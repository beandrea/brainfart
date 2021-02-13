import React, { useState, useEffect } from 'react';
import "./compSci.css";
import API from "../../utils/API";

function CompSci() {
    const [cs, setCs] = useState([]);

    useEffect(() => {
        getQuizzes()
    }, []);

    function getQuizzes() {
        API.getQuiz(18).then(res => {
            setCs(res.data)
        });
        console.log(cs.catagory);
    }


    return (
        <div className="spaceout">
            <div className="quiz">
                {cs.map(quiz => (
                    <div className="card" key={quiz.correct_answer}>
                        <div className="card-body">
                            <h3>{quiz.question}</h3>
                            <h4>{quiz.incorrect_answers}{quiz.correct_answer}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompSci;