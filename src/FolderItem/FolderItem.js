import React from 'react';
import { Link } from 'react-router-dom';
//import FolderContext from '../FolderContext.js';




export default class FolderItem extends React.Component{
	//static contextType = FolderContext;
	render(){
		console.log('this.props.id', this.props.id)
		const foldersPath= `/main/${this.props.id}`
		console.log(foldersPath)
		const className = 'folders-item' + (this.props.highlighted ? ' highlighted' : '');
		return(
				< >
					<section className= 'folderItem'>
						<Link className= {className} to={foldersPath}>
					    	<h2 className= 'header'>{this.props.name}</h2>
					    	
					    </Link>
					    <p>{this.props.date_created}</p>
					 </section>
				</ >
			)
		}
}