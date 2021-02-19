import React, { useState, useEffect } from 'react';
import "./compSci.css";
import API from "../../utils/API";

function CompSci() {
    const [cs, setCs] = useState([]);


    useEffect(() => {
        getQuizzes()
    }, []);

    const decodeText = (text) => {
        if (!text || !text.replace) {
            return text;
        }
        const decodedText = text.replace(/:!_amp_:/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/<br>/g, '\n')
            .replace(/<br \/>/g, '\n')
            .replace(/<br\/>/g, '\n')
        return decodedText;
    }

    function getQuizzes() {
        API.getQuiz(18).then(res => {
            console.log(res)

            let quiz = res.data.map((obj) => {
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
                    correctAnswer: decodeText(obj.correct_answer)
                }

                return newObj
            })

            console.log(quiz)


            setCs(quiz)
        });
    }

    function chosenAnswer(e) {
        for (let i = 0; i < cs.length; i++) {
            let correct = cs[i].correctAnswer
            const clicked = e.target.value
            if (clicked === correct) {

                alert('yes')
            }
        }
    }


    return (
        <div className="spaceout">
            <div className="quiz">
                {cs.map(quiz => (
                    <div className="card" key={quiz.correctAnswer}>
                        <div className="card-body">
                            <h3>{quiz.question}</h3>
                            <form>
                                {quiz.answers.map(allAnswers => (
                                    <div>
                                        <input id="testing" type="radio" className="answers" onClick={chosenAnswer} value={allAnswers} name={quiz.question} />
                                        <label>{allAnswers}</label>
                                    </div>
                                ))}
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompSci;