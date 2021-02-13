import React from 'react';
import HomeComponent from "../components/Home/HomeComponent";
import { isSignedIn, signOut } from "../utils/firebase";


function Home() {
    
    // signOut()
    isSignedIn()

    return (
        <div>
            <HomeComponent />
        </div>
    )
}

export default Home
