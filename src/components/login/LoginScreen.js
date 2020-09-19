import React from 'react'

export const LoginScreen = ({ history: { replace } }) => {
    return (
        <section className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button
                className='btn btn-outline-success'
                onClick={() => replace('/')}
            >
                Login
            </button>
        </section>
    )
}
