import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlanApiService from '../services/plan-api-services.js';
import FolderApiService from '../services/folder-api-services.js';


 class UpdateLesson extends React.Component {


	constructor(props) {
  	super(props);
	    this.state = { 
	    	id: '',
	    	folder_id: '',
	    	skills: '',
	    	warm_up:'',
	    	notes: '',
	    	students: '',
	    	folders: []
	    };

	}

	componentDidMount() {

        PlanApiService.getPlan(this.props.location.state.plan.id)
	  	.then(responseData => {
	    	this.setState({
	          	id: responseData.id,
	          	folder_id: responseData.folder_id,
	          	skills: responseData.skills || '',
	          	warm_up: responseData.warm_up || '',
	          	notes: responseData.notes || '',
	          	students: responseData.students || ''
	    	})
	  	})
	  	.then( () => {
	       	FolderApiService.getFolders()
	        .then(folderData => {
	        	console.log('****folderData in update lesson', folderData)
	            this.setState({
	                folders: folderData
	            })
	        })
	    })
	    .catch(error => {
	        console.error(error)
	        this.setState({ error })
	    })
	}

	handleSubmit = e => {
	    e.preventDefault()

	    const { id, folder_id, skills, warm_up, notes, students } = this.state
		const updatedSkill = { id, folder_id, skills, warm_up, notes, students }

	    PlanApiService.patchPlan(updatedSkill)
	    .then(() => {
	    	console.log('**********updatedSkill', updatedSkill)
	    	this.props.history.push(`/main`)
	    })
	    .catch(
	    	//error => { console.error({ error }) }
	    	)
	}

	handleChangeFolder = e => {
		this.setState({ folder_id: e.target.value })
	};

	handleChangeSkills = e => {
		this.setState({ skills: e.target.value })
	};

	handleChangeWarm_Up = e => {
		this.setState({ warm_up: e.target.value })
	};

	handleChangeNotes = e => {
		this.setState({ notes: e.target.value })
	};

	handleChangeStudents = e => {
		this.setState({ students: e.target.value })
	};

	render(){
	    console.log('**********************props in updateLesson', this.props)
	    console.log('***********', this.state.id)
	    console.log('****************updatelessonstate)',this.state)
	    const plan = this.props.location.state.plan
	    const folders = this.state.folders
	    const update_class_date= new Date(plan.class_date)
		return(
			<section className='updateLesson'>
				<header>
					<h3 className='updateLessonTitle'>{plan.name}</h3>
		        	<p>{update_class_date.toDateString()}</p>
		        	<Link id = 'link-to-main' to={`/main`}>
						<button className='buttons' type='button'> Go Back </button>
					</Link>
		       	</header>
				<section>
			        <form className='customForm' onSubmit={this.handleSubmit}>
			          	<div className="custom-select">
			            	<label htmlFor="folder-select">
			            		Folder
			            	</label>
			            	<select id='folder-select' name='folder-id'  onChange={this.handleChangeFolder} value={this.state.folder_id}>
				            	<option type = 'number' value={this.state.folder_id}>...</option>
	              				{folders.map(folder =>
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>
                            )}
				            </select >
			        	</div>
			        	<div className="form-section">
		        			<label htmlFor="warm-up">Warm-Up</label>
		        			<textarea className='text-area' name="warm-up" rows="10" value={this.state.warm_up} onChange={this.handleChangeWarm_Up} ></textarea>
		      			</div>
				        <div className="form-section">
		       		    	<label htmlFor="skills">Skills or Combinations</label>
		        	    	<textarea className='text-area' name="skills" rows="15"  value = {this.state.skills} onChange={this.handleChangeSkills} ></textarea>
		      			</div>
		      			<div className="form-section">
		        			<label htmlFor="notes">Notes for Next Class</label>
		        			<textarea className='text-area' name="notes" rows="10" value ={this.state.notes}  onChange={this.handleChangeNotes}  ></textarea>
		      			</div>
		      			
		      			<div className="form-section">
		        			<label htmlFor="students">Students</label>
		        			<textarea className='text-area' name="students" rows="10" value ={this.state.students}  onChange={this.handleChangeStudents}  ></textarea>
		      			</div>
		       			<div className = 'buttonRow'>
			          		<button className='buttons' type="submit">Submit</button>
			          		<button className='buttons' type="reset">Reset</button>

			          	</div>
			        </form>
			    </section>
			</section>
		)
	}
}

export default withRouter(UpdateLesson)