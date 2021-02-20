import React from 'react';
import HomeComponent from "../components/Home/HomeComponent";
import { isSignedIn, getUserId } from "../utils/firebase";


function Home() {
    
    isSignedIn()

    console.log(getUserId())

    return (
        <div>
            <HomeComponent />
        </div>
    )
}

export default Home
