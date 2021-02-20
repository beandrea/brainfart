// import React from 'react'

function isSignedIn() {
    const isSignedIn = localStorage.getItem("isSignedIn")
    console.log(isSignedIn)
    if (isSignedIn === "false") {
        console.log("true")
        window.location.href = "/signin"
    }
}

export default isSignedIn
