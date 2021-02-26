// import React from 'react'

function isSignedIn() {
    const uid = localStorage.getItem("uid");
    console.log(uid + " uid");
    if (uid === "null") {
        window.location.href = "/signin";
    }
}
   
export default isSignedIn;
