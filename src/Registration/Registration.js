import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export default class Registration extends React.Component{
	 render(){
        return(
            <>
                <nav role="navigation">Nav</nav>
                <main>
	                <form class='signup-form'>
	                    <div>
	                      <label for="first-name">First name</label>
	                      <input placeholder='First Name' type="text" name='first-name' id='first-name' />
	                    </div>
	                    <div>
	                      <label for="last-name">Last name</label>
	                      <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
	                    </div>
	                    <div>
	                      <label for="username">Email</label>
	                      <input type="text" name='username' id='username' />
	                    </div>
	                    <div>
	                      <label for="password">Password</label>
	                      <input type="password" name='password' id='password' />
	                    </div>
	                    <Link to='/main'>
	                        <button type='submit'>Sign Up</button>
	                     </Link> 
	                </form>
	            </main>
            </>
        )
    }
}