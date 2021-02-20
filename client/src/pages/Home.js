import React from 'react';
import HomeComponent from "../components/Home/HomeComponent";
import { isSignedIn } from "../utils/firebase";


function Home() {
    
    isSignedIn()


    return (
        <div>
            <HomeComponent />
        </div>
    )
}

export default Home
