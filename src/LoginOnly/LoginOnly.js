import React from 'react';
//import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
//import { withRouter } from "react-router-dom";

class LoginOnly extends React.Component{

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
            console.log('****** props in LoginOnly', this.props)
            console.log("******** .then in LoginOnly")
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
        console.log('Login Page props', this.props)
        console.log('******** props history in LoginOnly',this.props.history)
       const { error } = this.state
        return(           
            <>
                <header>
                    <h2>Login to access your plans!</h2>
                </header>
                <main role="main">
                    <form
                        className='LoginForm'
                        onSubmit={this.handleSubmitJwtAuth}
                        >
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className='user_name'>
                            <label htmlFor='LoginForm__user_name'>
                                User name
                            </label>
                            <input
                                required
                                name='user_name'
                                id='LoginForm__user_name'>
                            </input>
                        </div>
                        <div className='password'>
                            <label htmlFor='LoginForm__password'>
                                Password
                            </label>
                            <input required name='password' type='password' id='LoginForm__password'>
                            </input>
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

export default LoginOnly