import React from 'react';
import { Link } from 'react-router-dom';
//import FolderContext from '../FolderContext.js';
import './FolderItem.css';
import PropTypes from 'prop-types';




export default class FolderItem extends React.Component{
	//const className = 'folders-item' + (props.highlighted ? ' highlighted' : '');
	//static contextType = FolderContext;
	render(){
		console.log('this.props.id', this.props.id)
		const foldersPath= `/main/${this.props.id}`
		const date_created= new Date(this.props.date_created)
		console.log('date_created', date_created)
		console.log(foldersPath)
		const className = 'folderItem' + (this.props.highlighted ? ' highlighted' : '');
		console.log('highlighted', this.props.highlighted)
		return(
				< >
					<section>
						<Link className= {className} to={foldersPath}>
					    	<h3 className='singleFolderTitle'>{this.props.name}</h3>
					    	
					    </Link>
					    <p>{date_created.toDateString()}</p>
					 </section>
				</ >
			)
		}
}