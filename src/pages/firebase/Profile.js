import React, { useContext } from "react";

import UserContext from "../../utils/userContext.js";

import { auth } from "../../utils/firebase";
import ProfileComponent from "../../components/Profile/ProfileComponent.js";
const ProfilePage = () => {

    const user = useContext(UserContext);
    const { photoURL, displayName, email } = user;

    return (
        <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
            <ProfileComponent />
            
            <button className="w-full py-3 bg-red-600 mt-4 text-white" onClick={() => { auth.signOut() }}>Sign out</button>
        </div>
    )
};

export default ProfilePage;
