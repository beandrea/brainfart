import React from 'react';
import "./profile.css";

function ProfileComponent() {
    return (
        <div>
            <div id="profilePicCard" className="card">
                <div className="card-body">
                    <div id="usernameCard" className="card-body">
                        <div id="usernameDisplay">Username</div>
                    </div>
                    <img id="profilePic" src="https://smhlancers.org/wp-content/uploads/2016/06/profile-placeholder.png" alt="profilepic"></img>
                </div>
            </div>
            <div id="userInfoDiv" className="card">
                <div className="card-body">
                    <h5>My Stats</h5>
                </div>
                <div className="card infoCards">
                    <div className="card-body">
                        highest grade
                    </div>
                </div>
                <div className="card infoCards">
                    <div className="card-body">
                        lowest grade
                    </div>
                </div>
                <div className="card infoCards">
                    <div className="card-body">
                        list of created
                    </div>
                </div>
                <div className="card infoCards">
                    <div className="card-body">
                        list of previous quizes
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
