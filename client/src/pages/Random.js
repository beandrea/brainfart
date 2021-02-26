import React, { useState, useEffect } from 'react'
import "./style/random.css"
import API from "../utils/API";
import { getUserId } from "../utils/firebase";


function Random(props) {

    const [userQuiz, setUserQuiz] = useState([])
    const correctChoice = [];
    let reqParam = props.id

    const decodeText = (text) => {
        if (!text || !text.replace) {
            return text;
        }
        const decodedText = text.replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/<br>/g, '\n')
            .replace(/<br \/>/g, '\n')
            .replace(/<br\/>/g, '\n');
        return decodedText;
    }

    useEffect(() => {
        UserInfo()
        // console.log(userQuiz)
    }, [])

    function UserInfo() {
        API.getTheUserQuizes(getUserId()).then(res => {
            console.log(res.data)

            if (res.data.length > 0) {
                let quizIndex = Math.floor(Math.random() * res.data.length)
                console.log(res.data[quizIndex])
                initalizeQuizData(res.data[quizIndex])
            }
            else {
                console.log("checking for user quiz")
                ///check table for user quizes
            }
        });
    }

    function initalizeQuizData (data) {
        let quizObj =[]
            for (let i = 0; i < data.questions.length; i++) {
                quizObj.push({
                    question:  data.questions[i],
                    correct_answer: data.correctAnswer[i],
                    incorrect_answers: data.questionAnswers[i]
                })
            }
            console.log(quizObj)
            sortQuizData(quizObj)
    }

    function sortQuizData(data)  {
        let quiz = data.map((obj) => {
            var answers = [obj.correct_answer, ...obj.incorrect_answers]
            var randomA = []
            for (let n = answers.length; n > 0; n--) {
                let i = Math.floor(Math.random() * answers.length)
    
                let ans = decodeText(answers[i])
    
                randomA.push(ans);
                answers.splice(i, 1)
            }
            let newObj = {
                question: decodeText(obj.question),
                answers: randomA,
                correctAnswer: decodeText(obj.correctAnswer)
            }
    
            return newObj
        })
    
        console.log(quiz)
    
        setUserQuiz(quiz)
    }

    userQuiz.forEach(e => {
        correctChoice.push(false);
    });

    function chosenAnswer(e) {
        for (let i = 0; i < userQuiz.length; i++) {
            let correct = userQuiz[i].correctAnswer;
            const clicked = e.target.value;
            if (clicked === correct) {
                correctChoice[i] = true;
            }
        }
    }

    function handleSubmit() {
        let score = 0;
        for (let i = 0; i < userQuiz.length; i++) {
            if (correctChoice[i]) {
                score += 10;
            }
        }
        API.submitQuiz(score, reqParam, getUserId());

        setTimeout(function () { window.location.href = "/results" }, 1500);
    }

    return (
        <div className="spaceout">
            <div className="quiz">
                {userQuiz.map(quiz => (
                    <div className="container" id="quizContainer">
                        <div className="card" id="questions" key={quiz.correctAnswer}>
                            <div className="card-body">
                                <h3>{quiz.question}</h3>
                                <form>
                                    {quiz.answers.map(allAnswers => (
                                        <div>
                                            <input id="testing" type="radio" className="answers" value={allAnswers} name={quiz.question} onClick={chosenAnswer} />
                                            <label>{allAnswers}</label>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </div>
                    </div>
                ))}

                <button style={{ margin: "20px" }} type="submit" className="btn btn-primary endQuiz" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Random
