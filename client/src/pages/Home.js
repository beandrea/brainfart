import React, {useEffect} from 'react';
import HomeComponent from "../components/Home/HomeComponent";
import isSignedIn from "../utils/isSignedIn";


function Home() {

    isSignedIn()
    
    return (
        <div>
            <HomeComponent />
        </div>
    )
}

export default Home
