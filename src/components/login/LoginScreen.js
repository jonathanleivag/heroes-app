import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history: { replace } }) => {

    const { dispatch } = useContext(AuthContext);
    const handlerLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/'
        dispatch({
            type: types.login,
            payload: {
                name: 'Jonathan'
            }
        })
        replace(lastPath)
    }

    return (
        <section className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button
                className='btn btn-outline-success'
                onClick={handlerLogin}
            >
                Login
            </button>
        </section>
    )
}
