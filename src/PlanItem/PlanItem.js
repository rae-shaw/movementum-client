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
						<h3 className='plan-header'>{this.props.name}</h3>
					    	<p className= 'plan-date'>{date_created_plan.toDateString()}</p> 
					    <Link to= {{ pathname: `/lesson/${this.props.id}`, state: { plan: this.props } }} >
					    	 <button type='button'>See Full Plan</button>
					    </Link>
					 </section>
				</ >
			)
		}
}
