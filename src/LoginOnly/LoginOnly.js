import React from 'react';
//import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export default class LoginOnly extends React.Component{

    static defaultProps = {
    onLoginSuccess: () => {}
    }

    static defaultProps = {
        history: {
        push: () => {},
        },
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
                <header>
                    <h1>Login to access your plans!</h1>
                </header>
                <main role="main">
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
                </main>
            </>
        )
    }
}