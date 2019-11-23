import React, { Component } from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export default class Registration extends Component {
  	static defaultProps = {
    	history: {
      	push: () => {},
    	},
  	}

  	handleRegistrationSuccess = user => {
    	///const { history } = this.props
    	this.props.history.push('/login')
  	}

  	render() {
    	return (
      		<section className='RegistrationPage'>
        		<h2>Register</h2>
        		<RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
      		</section>
    )
  }
}
