import React from 'react';
import { Link } from 'react-router-dom';
import './FolderItem.css';
import PropTypes from 'prop-types';




export default class FolderItem extends React.Component{
	render(){
		console.log('this.props.id', this.props.id)
		const foldersPath= `/main/${this.props.id}`
		const date_created= new Date(this.props.date_created)
		console.log('date_created', date_created)
		console.log(foldersPath)
		const className = 'folderItemSection' + (this.props.highlighted ? '' : 'highlighted');
		console.log('highlighted', this.props.highlighted)

		return(
				< >
					<section className= {className}>
						<Link  to={foldersPath}>
					    	<h3 className='singleFolderTitle'>{this.props.name}</h3>
					    	
					    </Link>
					    <p className='folderItemP'>{date_created.toDateString()}</p>
					 </section>
				</ >
			)
		}
}
FolderItem.propTypes = {
  value: PropTypes.bool
};