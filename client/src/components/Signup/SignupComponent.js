import React from 'react'

function SignupComponent() {
    return (
        <div>
            <form>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="ReType Password"></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default SignupComponent
