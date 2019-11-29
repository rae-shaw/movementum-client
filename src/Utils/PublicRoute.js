import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PublicRoute({ component, render, ...props }) {
  const Component = component || render
  return (
        <Route
                {...props}
                render={componentProps => (
                    TokenService.hasAuthToken()
                        ? <Redirect to={'/main'} />
                        : <Component {...componentProps} />
                )}
        />
    )
}