import React, { useState, useEffect } from 'react';
import "./profile.css";
import API from '../../utils/API';
import { getUserId } from "../../utils/firebase";
import MyQuiz from "../MyQuiz/MyQuiz";


function ProfileComponent() {
    const [theUser, setTheUser] = useState({});
    const [theQuiz, setTheQuiz] = useState([]);
    const [scoreData, setData] = useState([]);
    const myId = getUserId();
    
    useEffect(() => {
        UserInfo();
        getUsersQuiz();
        scoreInfo();
    }, []);

    function UserInfo() {
        API.getUserInfo(myId).then(res =>
            setTheUser(res.data));
    }

    function scoreInfo() {
        API.getUserInfo(myId).then(res =>
            setData(res.data.userScores));
    }

    function getUsersQuiz() {
        API.getTheUserQuizes(myId).then(res =>
            setTheQuiz(res.data)
        );
        console.log(theQuiz);
    }

    function highestScore() {
        let scoreArr = [];
        if (scoreData === undefined) {
            return 0;
        } else {
            for (let i = 0; i < scoreData.length; i++) {
                scoreArr.push(scoreData[i].result);
            }
            let highest = Math.max(...scoreArr);
            return highest;
        }
    }

    function lowestScore() {
        let lowScoreArr = []
        if (scoreData === undefined) {
            return 0
        } else {
            for (let i = 0; i < scoreData.length; i++) {
                lowScoreArr.push(scoreData[i].result)
            }
            let lowest = Math.min(...lowScoreArr)
            return lowest
        }
    }

    function highestName() {
        let nameArr = []
        if (scoreData === undefined) {
            return "None"
        } else {
            for (let i = 0; i < scoreData.length; i++) {
                nameArr.push(scoreData[i])
            }
            console.log(nameArr)
            for (let j = 0; j < nameArr.length; j++) {
                if (highestScore() === nameArr[j].result) {
                    return nameArr[j].quizName.toUpperCase();
                }
            }
        }
    }

    function lowestName() {
        let nameArr = []
        if (scoreData === undefined) {
            return "None"
        } else {
            for (let i = 0; i < scoreData.length; i++) {
                nameArr.push(scoreData[i])
            }
            console.log(nameArr)
            for (let j = 0; j < nameArr.length; j++) {
                if (lowestScore() === nameArr[j].result) {
                    return nameArr[j].quizName.toUpperCase()
                }
            }
        }
    }

    return (
        <div>
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
                        <h6 className="quizName">Quiz Name: {highestName()}</h6>
                        <h6 id="grade">Grade: {highestScore()}</h6>
                    </div>
                </div>
                <div className="card infoCards">
                    <h5>Lowest Grade</h5>
                    <div className="card-body quizGrades background">
                        <h6 className="quizName">Quiz Name: {lowestName()}</h6>
                        <h6 id="grade">Grade: {lowestScore()}</h6>
                    </div>
                </div>
                <div className="card infoCards">
                    <h5> My Created Quizes</h5>
                    <MyQuiz
                        theQuiz={theQuiz}
                    />
                </div>
                {/* <div className="card infoCards">
                    <h5>My Previous Quizes</h5>
                    <div className="card-body background">
                        <h6 className="quizName">Quiz Name: { }</h6>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default ProfileComponent;
