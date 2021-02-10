import React from 'react';

function LoginComponent() {
    return (
        <div>
            <form>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginComponent
