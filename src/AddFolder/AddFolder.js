import React from 'react';
import { Link } from 'react-router-dom';
import FolderApiService from '../services/folder-api-services.js';

export default class AddFolder extends React.Component{
	static defaultProps = {
	    history: {
	      push: () => { }
	    },
	}

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
	    FolderApiService.postFolder(folder)
	    .then((folder) => {
	    	this.props.history.push(`/main`)
	    })
	    .catch(
	    	error => { console.error({ error }) }
	    )
	}

    render(){
        return(
            <>
		      	<header>
		        	<h1>Add Class</h1>
		      	</header>
		      	<section>
		        	<form className ='customForm' onSubmit={this.handleSubmit}>
		          		<div className="form-names">
		            		<label htmlFor="folder-name">Folder Name</label>
		            		<textarea type="text" name="folder-name"  placeholder="Class 1" required ></ textarea>
		          		</div>
		          		<div className = 'buttonRow'>
		          			<button type="submit" >Submit</button>
		          		</div>
		          		<Link to='/main'>
		          			<button type="reset">Back</button>
		          		</Link>
		        	</form>
		      	</section>
		    </>
		)
    }
}