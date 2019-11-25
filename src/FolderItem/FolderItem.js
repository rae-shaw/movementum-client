import React from 'react';
import { Link } from 'react-router-dom';
//import FolderContext from '../FolderContext.js';
import './FolderItem.css';
//import Moment from 'react-moment';




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
					    	<h3 className= 'header'>{this.props.name}</h3>
					    	
					    </Link>
					    <p className= 'folder-item'>{this.props.date_created} </p>
					 </section>
				</ >
			)
		}
}