import React from 'react';
import { Link } from 'react-router-dom';
import './PlanItem.css';




export default class PlanItem extends React.Component{

  	state = {
  		currentSearch: []
  	}

	render(){
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
