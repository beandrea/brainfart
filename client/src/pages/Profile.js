import React from "react";
import ProfileComponent from "../components/Profile/ProfileComponent";
import firebase from "firebase/app";
import Redirect from "react-dom";

const ProfilePage = () => {
    if (firebase.auth().currentUser === null) {
        return <Redirect to="/signin" />;
    }

    return (
        <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
            <ProfileComponent />
        </div>
    )
};

export default ProfilePage;
