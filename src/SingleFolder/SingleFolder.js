import React from 'react';
import { Link } from 'react-router-dom';
import FolderApiService from '../services/folder-api-services.js';



export default class AddFolder extends React.Component{
	state = {
		folder: { }
	}

	componentDidMount(){
        FolderApiService.getFolder(this.props.location.state.plan.folder_id)
        .then(singleFolderData => {
            this.setState({
                folder: singleFolderData
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
    render(){
		return(
			< >
				<header>
					<h2 className='singleFolderTitle'>{this.state.folder.name}</h2>
				</header>
				<Link to={`/main`}>
					<button className='buttons' type='button'> Go Back </button>
				</Link>	
			</ >
		)
	}
} 