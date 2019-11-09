import React from 'react';
import { Link } from 'react-router-dom';



export default class AddFolder extends React.Component{
    render(){
        return(
            <>
		      	<header>
		        	<h1>Add Class</h1>
		      	</header>
		      	<section>
		        	<form id="class-plan">
		          		<div class="form-section">
		            		<label for="lesson-title">Folder Name</label>
		            		<textarea type="text" name="class-name" placeholder="Class 1" required ></ textarea>
		          		</div>
		          		<Link to='/main'>
		          			<button type="submit">Submit</button>
		          		</Link>
		          			<button type="reset">Reset</button>
		        	</form>
		      	</section>
		    </>
		)
    }
}