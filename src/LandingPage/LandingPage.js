import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export default class LandingPage extends React.Component{

    static defaultProps = {
    onLoginSuccess: () => {}
    }

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
            this.props.onLoginSuccess()
            this.props.handleLogin()
            this.props.history.push(`/main`)
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }


    render(){
        console.log('LandingPage props', this.props)
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
                            <Link to='/registration'>
                                <button>Sign Up</button>
                             </Link> 
                            <p>Already have an account?</p>
                            <form
                                className='LoginForm'
                                onSubmit={this.handleSubmitJwtAuth}
                                >

                                <div className='user_name'>
                                    <label htmlFor='LoginForm__user_name'>
                                        User name
                                    </label>
                                    <textarea
                                        required
                                        name='user_name'
                                        id='LoginForm__user_name'>
                                    </textarea>
                                </div>
                                <div className='password'>
                                    <label htmlFor='LoginForm__password'>
                                        Password
                                    </label>
                                    <textarea
                                        required
                                        name='password'
                                        type='password'
                                        id='LoginForm__password'>
                                    </textarea>
                                </div>
                                <button type='submit'>
                                    Login
                                </button>
                            </form>
                    </section>
                </main>
                <footer role="content-info">Footer</footer>
            </>

        )
    }
} 