import React from 'react';
import { Link } from 'react-router-dom';
//import FolderContext from '../FolderContext.js';
import PlanApiService from '../services/plan-api-services';
import FolderApiService from '../services/folder-api-services';

export default class AddLesson extends React.Component{

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
      		},
            folders: [],
            //error: null
      	}
    }


	// updateName(name) {
 //    	this.setState({ name: { value: name, touched: true } });
 //  	}

 //  	validateName() {
 //    	const name = this.state.name.value.trim();
 //    		if (name.length === 0) {
 //      			return "Name is required";
 //    		}
 //    		 else if (name.length < 3 || name.length > 12) {
 //      			return 'Folder name must be between 3 and 12 characters long';
 //      		}
 //  	}

  	handleSubmit = e => {
        e.preventDefault()
        console.log('IN handleSubmit!')
        
        let newPlan = {
            name: e.target['name'].value,
            folder_id: e.target['folder-id'].value 
        }

        if (e.target['folder-id'].value == undefined){

        }

        if (e.target['date'].value !== '') {
            newPlan.class_date = e.target['date'].value;
        }
        if (e.target['warm-Up'].value !== '') {
            newPlan.warm_up = e.target['warm-Up'].value;
        }
        if (e.target['skills'].value !== '') {
            newPlan.skills = e.target['skills'].value;
        }
        if (e.target['notes'].value !== '') {
            newPlan.notes = e.target['notes'].value;
        }
        if (e.target['students'].value !== '') {
            newPlan.students = e.target['students'].value;
        }

        console.log(newPlan)
        PlanApiService.postPlan(newPlan)

        .then((plan) => {
        	console.log('NEWPLAN', plan)
            this.props.history.push(`/main`)
        })
        .catch(res => {
            this.setState({ error: res.error })
        });
    }


    componentDidMount(){
        FolderApiService.getFolders()
        .then(folderData => {
            this.setState({
                folders: folderData
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
                            /*<div role='alert'>
                            {error && <p className='red'>{[error]}</p>}
                        </div>*/

    render(){
    	const folders=this.state.folders
         //const { error } = this.state
    	console.log('********Props', this.props)
    	console.log('add lesson state', this.state.error)
        return(
            <>
		      	<header>
		        	<h1 className='addLessonHeader'>Add Lesson Plan</h1>
                    <Link to='/main'>
                        <button type="reset">Back</button>
                    </Link>
		      	</header>

		      	<section>
		        	<form className ='customForm' onSubmit={this.handleSubmit}>
		          		<div className="form-names">
		            		<label htmlFor="name">Name</label>
		            		<textarea type="text" name="name" placeholder="Class 1" required ></textarea>
		          		</div>
		          		<div className="form-names">
		            		<label htmlFor="date">Date</label>
		            		<textarea type="date" name="date" ></textarea>
		          		</div>
		          		<div className="custom-select">
	            			<label htmlFor="folder">Class</label>
	            			<select id='folder-id' name = 'folder-id' required >
	            				<option type = 'number' value={null}>...</option>
	              				{folders.map(folder =>
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>
                            )}
	            			</select>
		          		</div>
		          		<div className="form-section">
		            		<label htmlFor="warm-Up">Warm-Up</label>
		            		<textarea name="warm-Up" rows="15"   ></textarea>
		          		</div>
		          		<div className="form-section">
		            		<label htmlFor="skills">Skills or Combinations</label>
		            		<textarea name="skills" rows="10"   ></textarea>
		          		</div>
		          		<div className="form-section">
		            		<label htmlFor="notes">Notes for Next Class</label>
		            		<textarea name="notes" rows="10"   ></textarea>
		          		</div>
		          		<div className="form-section">
		            		<label htmlFor="students">Notes on Students</label>
		            		<textarea name="students" rows="10"   ></textarea>
		          		</div>
                        <div className = 'buttonRow'>
		          			<button type="submit">Submit</button>
		          			<button type="reset">Reset</button>
                        </div>
		        	</form>
		      	</section>
		    </>
		)
	}

}