import React, { useState, useEffect } from 'react';
import "./profile.css";
import API from '../../utils/API';
import {getUserId} from "../../utils/firebase";



function ProfileComponent() {

    const [theUser, setTheUser] = useState({})
    const [theQuiz, setTheQuiz] = useState([])
    const myId = getUserId()

    useEffect(() => {
        UserInfo()
        getUsersQuiz()
        
    }, [])

    function UserInfo() {
        API.getUserInfo(myId).then(res =>
            setTheUser(res.data))
        console.log(theUser)
    }

    function getUsersQuiz() {
        API.getTheUserQuizes(myId).then(res => 
            setTheQuiz(res.data)
        )
        console.log(theQuiz)
    }

    return (
        <div >
            <div id="profilePicCard" className="card">
                <div className="card-body">
                    <div id="usernameCard" className="card-body">
                        <div id="usernameDisplay">Username: {theUser.email}</div>
                    </div>
                    <img id="profilePic" src="https://smhlancers.org/wp-content/uploads/2016/06/profile-placeholder.png" alt="profilepic"></img>
                </div>
            </div>
            <div id="userInfoDiv" className="card">
                <div className="card-body">
                    <h3>My Stats</h3>
                </div>
                <div className="card infoCards">
                    <h5>Highest Grade</h5>
                    <div className="card-body quizGrades background">
                        <h6 className="quizName">Quiz Name: { }</h6>
                        <h6 id="grade">Grade: { }</h6>
                    </div>
                </div>
                <div className="card infoCards">
                    <h5>Lowest Grade</h5>
                    <div className="card-body quizGrades background">
                        <h6 className="quizName">Quiz Name: { }</h6>
                        <h6 id="grade">Grade: { }</h6>
                    </div>
                </div>
                <div className="card infoCards">
                    <h5> My Created Quizes</h5>
                    <div id="created" className="card-body background">
                        <h6 className="quizName">Quiz Name: { }</h6>
                        <div id="btns">
                            <button className="btn btn-outline-success createdBtns">Delete</button>
                            <button className="btn btn-outline-warning createdBtns">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="card infoCards">
                    <h5>My Previous Quizes</h5>
                    <div className="card-body background">
                        <h6 className="quizName">Quiz Name: { }</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
