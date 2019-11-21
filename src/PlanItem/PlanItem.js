import React from 'react';
import { Link } from 'react-router-dom';
import PlanContext from '../PlanContext.js';




export default class PlanItem extends React.Component{
	static contextType = PlanContext;

	render(){
		//const planPath = `/lesson/${this.props.id}
		return(
				< >
					<section className= 'folderItem'>
						
					    <Link to= {{ pathname: `/main/${this.props.id}`, state: { plan: this.props } }} >
					    	<h2 className= 'header'>{this.props.name}</h2>
					    </Link>
					    	<p>{this.props.date_created}</p> 
					 </section>
				</ >
			)
		}
}
