import React, {useState, useEffect} from 'react';
import "./compSci.css";
import API from "../../utils/API";

function CompSci() {
    const [cs, setCs] = useState([]);
    
    useEffect(() => {
        getQuizzes()
    }, []);

    function getQuizzes() {
        API.getQuiz(18).then(res => {setCs(res.json)});
        console.log(cs);
    }

    return (
        <div className="spaceout">
            <div className="quiz">

            </div>
        </div>
    )
}

export default CompSci;