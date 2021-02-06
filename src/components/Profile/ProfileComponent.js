import React from 'react';
import "./profile.css";

function ProfileComponent() {
    return (
        <div>
            <div id="profilePicCard" className="card">
                <div className ="card-body">
                    <img id="profilePic" src="https://smhlancers.org/wp-content/uploads/2016/06/profile-placeholder.png" alt="profilepic"></img>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
