import React from 'react';
import { Link } from 'react-router-dom';
import PlanContext from '../PlanContext.js';
import PlanApiService from '../services/plan-api-services.js';
import { Redirect } from 'react-router-dom';




export default class PlanItem extends React.Component{
	static contextType = PlanContext;

	constructor(props) {
    	super(props);
    	this.state = {
      		redirect: false
    	};

  	}

	static defaultProps = {
	    history: {
	      push: () => { }
	    },
	}

	handleClick = (e) => {
        e.preventDefault()
        const planId = this.props.id
        const refresh =planId =>{
        	this.setState({
            	currentSearch: this.state.responseData.filter(plan => plan.id !== planId)
        	});
    	}

        PlanApiService.deletePlan(planId)
        .then(() => {
        	this.setState({
					redirect: true
			});
        	refresh(planId)
    	})

        .catch(error => {
            console.error({ error })
        })
    }

	render(){
		console.log('*****************state in planitem', this.state)
		//const planPath = `/lesson/${this.props.id}
		return(
				< >
					<section className= 'folderItem'>
						
					    <Link to= {{ pathname: `/lesson/${this.props.id}`, state: { plan: this.props } }} >
					    	<h2 className= 'header'>{this.props.name}</h2>
					    </Link>
					    	<p>{this.props.date_created}</p> 
					    <button className='buttons' onClick= {this.handleClick} >Delete</button>
					 </section>
				</ >
			)
		}
}
