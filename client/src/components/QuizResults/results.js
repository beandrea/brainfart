import React from 'react';
import './results.css';
import API from '../../utils/API';
import {getUserId} from "../../utils/firebase";

function Results() {
    return (
        <div className="spaceout">
            <p className="score">
                <button onClick={parse}>See your score!</button>
            </p>
        </div>
    )
}

function parse(){
    return (document.querySelector('p').innerHTML = `You scored: ${API.getScore(getUserId)}`);
}

export default Results;
