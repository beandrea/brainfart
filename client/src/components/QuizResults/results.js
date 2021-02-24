import React, { useEffect, useState } from 'react';
import './results.css';
import API from '../../utils/API';
import { getUserId } from "../../utils/firebase";

function Results() {

    const [scores, setUserScores] = useState([])

    useEffect(() => {
        getResults()
    }, [])


    function getResults() {
        API.getUserInfo(getUserId()).then(res => {
            let newScores = res.data.userScores
            newScores.sort((a,b) => a-b).reverse()
            setUserScores(newScores)
            console.log(scores)
        })
    }

    return (
        <div className="spaceout">
            <div>
                <h1>My Results</h1>
                <br/>
                {scores.map(s => (
                    <div key={s.result}>
                        <p>Quiz Name: {s.quizName}</p>
                        <p>Score: {s.result}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Results;
