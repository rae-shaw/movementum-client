import React from 'react';
import { Link } from 'react-router-dom';



export default class LoginPage extends React.Component{
    render(){
        return(
            <>
                <nav role="navigation">Nav</nav>
                <main role="main">
                    <header role="banner">
                        <h1>Movementum</h1>
                        <h2>A class planning tool designed by and for movement instructors.</h2>
                    </header>
                    <section>
                        <header>
                            <h3>Create folders for classes</h3>
                        </header>
                        <p>placeholder for screenshot of folder with plans</p>
                        <p>With Movementum, you can easily organize your lesson plans by class and date.</p>
                    </section>
                    <section>
                        <header>
                            <h3>Keep track of your students' progress</h3>
                        </header>
                        <p>[<em>placeholder for screenshot of update screen</em>]</p>
                        <p>After class, track your students progress easily within the class plan.</p>
                    </section>
                    <section>
                        <header>
                            <h3>Start Planning Classes Now</h3>
                        </header>
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
                            <p>Already have an account?</p>
                            <Link to='/main'>
                                <button type='button'>Sign In</button>
                            </Link> 
                        </form>
                    </section>
                </main>
                <footer role="content-info">Footer</footer>
            </>

            )
    }
} 