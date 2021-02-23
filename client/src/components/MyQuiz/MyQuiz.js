import React from 'react'
import API from '../../utils/API'

function MyQuiz(props) {

function deleteUserQuiz(e) {
    let clicked = e.target.value
    console.log(clicked)
    const deletedQuiz = props.theQuiz.find(click => click._id === clicked)
    console.log(deletedQuiz._id)
    API.deleteQuiz(deletedQuiz._id)
    .then(window.location.reload())
}

    console.log(props.theQuiz)
    return (
        <div>
            {props.theQuiz.map( quiz => (
                <div key={quiz._id} id="created" className="card-body background">
                    <h6 className="quizName">Quiz Name: {quiz.title}</h6>
                    <div id="btns">
                        <button value={quiz._id} className="btn btn-outline-success createdBtns" onClick={deleteUserQuiz}>Delete</button>
                        <button value={quiz._id} className="btn btn-outline-warning createdBtns">Edit</button>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default MyQuiz
