import React from 'react'
import { useHistory } from 'react-router-dom'
import API from '../../utils/API'


function MyQuiz(props) {

    const history = useHistory()

    function deleteUserQuiz(e) {
        let clicked = e.target.value
        console.log(clicked)
        const deletedQuiz = props.theQuiz.find(click => click._id === clicked)
        console.log(deletedQuiz._id)
        API.deleteQuiz(deletedQuiz._id)
            .then(window.location.reload())
    }

    function editUserQuiz(e) {
        let clicked = e.target.value
        const quiz = props.theQuiz.find(click => click._id === clicked)
        history.push('/update', { id:clicked, quizObj:quiz })
    }

    console.log(props.theQuiz)
    return (
        <div>
            {props.theQuiz.map(quiz => (
                <div key={quiz._id} id="created" className="card-body background">
                    <h6 className="quizName">Quiz Name: {quiz.title}</h6>
                    <div id="btns">
                        <button value={quiz._id} className="btn btn-outline-success createdBtns" onClick={deleteUserQuiz}>Delete</button>
                        <button value={quiz._id} className="btn btn-outline-warning createdBtns" onClick={editUserQuiz}>Edit</button>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default MyQuiz
