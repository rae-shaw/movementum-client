import React from 'react';
import { Link } from 'react-router-dom';
import PlanContext from '../PlanContext.js'

export default class AddLesson extends React.Component{

static defaultProps = {
	    history: {
	      push: () => { }
	    },
	}

	static contextType = PlanContext;

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

/*  	handleSubmit = e => {
	    e.preventDefault()
	    const lesson = {
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
	}*/



    render(){
    	const { plans=[] } =this.context
    	console.log('********Props', this.props)
    	console.log('add lesson context', this.context.plans)
        return(
            <>
		      	<header>
		        	<h1>Add Lesson Plan</h1>
		      	</header>
		      	<section>
		        	<form id="class-plan">
		          		<div className="form-section">
		            		<label for="lesson-title">Name</label>
		            		<textarea type="text" name="skill-name" placeholder="Class 1" required ></textarea>
		          		</div>
		          		<div className="form-section">
		            		<label for="date">Date</label>
		            		<textarea type="date" name="date" ></textarea>
		          		</div>
		          		<div className="form-section">
	            			<label for="folder">Class</label>
	            			<select required>
	              				<option value="Trapeze">Trapeze</option>
	              				<option value="Lyra">Lyra</option>
	              				<option value="Hammock">Hammock</option>
	              				<option value="audi">Silks</option>
	            			</select>
		          		</div>
		          		<div className="form-section">
		            		<label for="Warm-Up">Warm-Up</label>
		            		<textarea name="Warm-Up" rows="15"   ></textarea>
		          		</div>
		          		<div className="form-section">
		            		<label for="skills">Skills or Combinations</label>
		            		<textarea name="skills" rows="10"   ></textarea>
		          		</div>
		          		<div className="form-section">
		            		<label for="notes">Notes for Next Class</label>
		            		<textarea name="notes" rows="10"   ></textarea>
		          		</div>
		          		<div className="form-section">
		            		<label for="students">Notes on Students</label>
		            		<textarea name="students" rows="10"   ></textarea>
		          		</div>
		          		<Link to='/main'>
		          			<button type="submit">Submit</button>
		          		</Link>
		          			<button type="reset">Reset</button>
		        	</form>
		      	</section>
		    </>
		)
	}

}