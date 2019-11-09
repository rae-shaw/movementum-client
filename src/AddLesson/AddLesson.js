import React from 'react';
import { Link } from 'react-router-dom';


export default class AddLesson extends React.Component{
    render(){
        return(
            <>
		      	<header>
		        	<h1>Add Lesson Plan</h1>
		      	</header>
		      	<section>
		        	<form id="class-plan">
		          		<div class="form-section">
		            		<label for="lesson-title">Name</label>
		            		<textarea type="text" name="skill-name" placeholder="Class 1" required ></textarea>
		          		</div>
		          		<div class="form-section">
		            		<label for="date">Date</label>
		            		<textarea type="date" name="date" ></textarea>
		          		</div>
		          		<div class="form-section">
	            			<label for="folder">Class</label>
	            			<select required>
	              				<option value="Trapeze">Trapeze</option>
	              				<option value="Lyra">Lyra</option>
	              				<option value="Hammock">Hammock</option>
	              				<option Silks="audi">Silks</option>
	            			</select>
		          		</div>
		          		<div class="form-section">
		            		<label for="Warm-Up">Warm-Up</label>
		            		<textarea name="Warm-Up" rows="15"   ></textarea>
		          		</div>
		          		<div class="form-section">
		            		<label for="skills">Skills or Combinations</label>
		            		<textarea name="skills" rows="10"   ></textarea>
		          		</div>
		          		<div class="form-section">
		            		<label for="notes">Notes for Next Class</label>
		            		<textarea name="notes" rows="10"   ></textarea>
		          		</div>
		          		<div class="form-section">
		            		<label for="students">Notes on Students</label>
		            		<textarea name="students" rows="10"   ></textarea>
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