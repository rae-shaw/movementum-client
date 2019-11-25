import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Hyph } from '../Utils/Utils'
import TokenService from '../services/token-service'
//import IdleService from '../services/idle-service'
import './Header.css'

export default class Header extends Component {

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
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
             </div>
        )
    }

    renderLogInLink() {
        return (
            <div className='Header__not-logged-in'>
               <p className='text'>Welcome</p>
            </div>
        )
    }

    render() {
        console.log('tokenservice!', TokenService.hasAuthToken())
        return (
            <>
                <h1 classname='nav-header'> Movementum </h1>
                {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLogInLink()}
            </>
        )
    }
}