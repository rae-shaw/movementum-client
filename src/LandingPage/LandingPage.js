import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import'./LandingPage.css'

export default class LandingPage extends React.Component{


    state = { error: null }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.handleLogin()
            this.props.history.push(`/main`)
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render(){
        const { error } = this.state
        console.log('LandingPage props', this.props)
        return(
            <>
                <main role="main">
                    <header role="banner">
                        <h1>Movementum</h1>
                        <h2 className='landing-title'>A class planning tool designed by and for movement instructors.</h2>
                    </header>
                    <section>
                        <header>
                            <h3 className='landing-title'>Create folders for classes</h3>
                        </header>
                        <p className='landing-text'>placeholder for screenshot of folder with plans</p>
                        <p className='landing-text'>With Movementum, you can easily organize your lesson plans by class and date.</p>
                    </section>
                    <section>
                        <h3 className='landing-title'>Keep track of your students' progress</h3>
                        <p className='landing-text'>[<em>placeholder for screenshot of update screen</em>]</p>
                        <p className='landing-text'>After class, track your students progress easily within the class plan.</p>
                    </section>
                    <section>
                        <header>
                            <h3 className='landing-title'>Start Planning Classes Now</h3>
                        </header>
                            <Link to='/registration'>
                                <button>Sign Up</button>
                             </Link> 
                            <p className='landing-text'>Already have an account?</p>
                            <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth} >
                                <div role='alert'>
                                    {error && <p className='red'>{error}</p>}
                                </div>
                                <div className='user_name'>
                                    <label htmlFor='LoginForm__user_name'>
                                        User name
                                    </label>
                                    <input required name='user_name' id='LoginForm__user_name'> </input>
                                </div>
                                <div className='password'>
                                    <label htmlFor='LoginForm__password'>
                                        Password
                                    </label>
                                    <input required name='password' type='password' id='LoginForm__password'></input>
                                </div>
                                <button type='submit'>
                                    Login
                                </button>
                            </form>
                    </section>
                </main>
            </>

        )
    }
} 