import React from 'react';
import { Link } from 'react-router-dom';


export default class FullFolders extends React.Component{
	render(){
		return(
			<>
		    	<section>
		        	<header>
		            	<h2>Folders</h2>
		        	</header>
		        	<div>
				        <p>Folder 1</p>
				        <p>Folder 2</p>
				        <p>Folder 3</p>
		        	</div>
		        	<Link to = '/addfolder'>
		        		<button type='button'>Add Folder</button>
		        	</Link>
		      	</section>
			</>
		)
	}
}



