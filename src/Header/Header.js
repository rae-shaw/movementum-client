import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Hyph } from '../Utils/Utils'
import TokenService from '../services/token-service'
//import IdleService from '../services/idle-service'
import './Header.css'

export default class Header extends Component {

    constructor(props){
    super(props)
    this.viewForm = React.createRef()
}

    static defaultProps = {
        history: {
          push: () => { }
        },
    }
    
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.props.handleLogout()
        this.props.history.push('/')
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link className='header-link' onClick={this.handleLogoutClick} to='/'>
                    <button type='button' className='buttons' id='logout-button'>Logout</button>
                </Link>
             </div>
        )
    }

    renderLogInLink() {
        return (
            <div className='Header__not-logged-in'>
                <p>Welcome</p>
            </div>
        )
    }

    render() {
        console.log('tokenservice!', TokenService.hasAuthToken())
        return (
            <>
                <h1 className='nav-header'> Movementum </h1>
                {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLogInLink()}
            </>
        )
    }
}