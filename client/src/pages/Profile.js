import React from "react";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { isSignedIn } from "../utils/firebase";
import Redirect from "react-dom";

const ProfilePage = () => {
    isSignedIn()

    return (
        <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
            <ProfileComponent />
        </div>
    )
};

export default ProfilePage;
