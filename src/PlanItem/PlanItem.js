import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PlanApiService from '../services/plan-api-services.js';
import './PlanItem.css';




export default class PlanItem extends React.Component{

  	state = {
  		currentSearch: []
  	}


	// handleClick = (e) => {
 //        e.preventDefault()
 //       const planId = this.props.id

 //        PlanApiService.deletePlan(planId)
 //        .then(() => {
	// 		this.props.handleUpdate()
 //    	})

 //        .catch(error => {
 //            console.error({ error })
 //        })
    //}
//<button onClick= {this.handleClick} >Delete</button>

	render(){
		console.log('*****************state in planitem', this.state)
		console.log('***props in plan items', this.props)
		const date_created_plan= new Date(this.props.date_created)
		return(
				< >
					<section>
					    <Link to= {{ pathname: `/lesson/${this.props.id}`, state: { plan: this.props } }} >
					    	<h3 className='updateLessonTitle'>{this.props.name}</h3>
					    </Link>
					    	<p className= 'plan-date'>{date_created_plan.toDateString()}</p> 
					    
					 </section>
				</ >
			)
		}
}
