import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
export const PrivateRouter = ({ isAuthenticated, component: Component, ...reset }) => {
    localStorage.setItem('lastPath',reset.location.pathname)
    return (
        <Route {...reset} component={props => isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />} />
    )
}

PrivateRouter.propTypes = { isAuthenticated: PropTypes.bool.isRequired, component: PropTypes.func.isRequired }
