import React from 'react';
import { Link } from 'react-router-dom';



export default class AddFolder extends React.Component{
    render(){
		return(
			< >
				<button>
					<Link to={`/main`}>
					Go Back
					</Link>
				</button>
				<h1>Example Folder Name</h1>
			</ >
		)
	}
} 