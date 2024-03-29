import React from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

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
                                id='LoginForm__user_name'/>
                        </div>
                        <div className='password'>
                            <label htmlFor='LoginForm__password'>
                                Password
                            </label>
                            <input required name='password' type='password' id='LoginForm__password'/>
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