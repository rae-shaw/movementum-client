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
    	console.log('*****SingleFolder props', this.props)
    	console.log('*******singlefolderstate', this.state)
		return(
			< >
				<button>
					<Link to={`/main`}>
					Go Back
					</Link>
				</button>
				<h1>{this.state.folder.name}</h1>
			</ >
		)
	}
} 