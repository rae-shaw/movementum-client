import React from 'react';
import { Link } from 'react-router-dom';
//import ValidationError from '../ValidationError.js';
import FolderApiService from '../services/folder-api-services.js';
//import FolderContext from '../FolderContext.js';



export default class AddFolder extends React.Component{
	static defaultProps = {
	    history: {
	      push: () => { }
	    },
	}

	//static contextType = FolderContext;

	constructor(props) {
    	super(props);
    	this.state = {
      		name: {
        		value: "",
        		touched: false
      		}
      	}
    }

	updateName(name) {
    	this.setState({ name: { value: name, touched: true } });
  	}

  	validateName() {
    	const name = this.state.name.value.trim();
    		if (name.length === 0) {
      			return "Name is required";
    		}
    		 else if (name.length < 3 || name.length > 12) {
      			return 'Folder name must be between 3 and 12 characters long';
      		}
  	}

  	handleSubmit = e => {
	    e.preventDefault()
	    const folder = {
	      name: e.target['folder-name'].value
	    }
	    console.log('********* folder',folder)
	    FolderApiService.postFolder(folder)
	    .then((folder) => {
	    	console.log('*********** in addFolder .then', folder)
	    	this.props.history.push(`/main`)
	    })
	    .catch(
	    	//error => { console.error({ error }) }
	    	)
	}

    render(){
    	console.log('props in addfolder', this.props)
        return(
            <>
		      	<header>
		        	<h1>Add Class</h1>
		      	</header>
		      	<section>
		        	<form id="class-plan" onSubmit={this.handleSubmit}>
		          		<div className="form-section">
		            		<label htmlFor="folder-name">Folder Name</label>
		            		<textarea type="text" name="folder-name" placeholder="Class 1" required ></ textarea>
		          		</div>
		          			<button className='buttons' type="submit" >Submit</button>
		          		<Link to='/main'>
		          			<button type="reset">Reset</button>
		          		</Link>
		        	</form>
		      	</section>
		    </>
		)
    }
}