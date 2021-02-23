import React, { useState, useEffect } from 'react';
import CreateComponent from "../components/Create/CreateComponent";
import API from "../utils/API"
import {getUserId} from  "../utils/firebase"

let questionsArray = ["","",""]

function Create() {

    const [questions, setquestions] = useState([]);

    useEffect(() => {
        setquestions(questionsArray)
    }, [])

    function addQuestion() {
        questionsArray.push(questionsArray)
        console.log(questionsArray)
        setquestions(questionsArray)
        // setquestions((state) => {
        //     console.log(state)
        //     return state
        // })


        // let questionsArrayItem = [
        //     {
        //         title: document.getElementById("createTitle").value,
        //         subject: document.getElementById("createSubject").value,
        //         question: document.getElementById("createQuestion").value,
        //         answers:[
        //             document.getElementById("createAnswer1").value,
        //             document.getElementById("createAnswer2").value,
        //             document.getElementById("createAnswer3").value
        //         ],
        //         correctAnswer: document.getElementById("createCorrectAnswer").value
        //     }
        // ];

        // questionsArray.push(questionsArrayItem);
        // console.log(questionsArray);
        // let div = document.createElement(<CreateComponent/>)
        // let card = document.getElementById("createdCard")
        // card.append(div)
    }

    function submitQuiz() {
        let questionsArrayItem = {
            createdBy: getUserId(),
            title: document.getElementById("createTitle").value,
            subject: document.getElementById("createSubject").value,
            questions: [],
            answers: [],
            correctAnswer: []
        }
        questionsArray.forEach((e, i) => {

            questionsArrayItem.questions.push(document.getElementById("createQuestion" + i).value)

            let tempArr = [
                document.getElementById("createAnswer1" + i).value,
                document.getElementById("createAnswer2" + i).value,
                document.getElementById("createAnswer3" + i).value,
            ]

            let answerArr = tempArr.filter(n => n !== "")

            questionsArrayItem.answers.push(answerArr)
            questionsArrayItem.correctAnswer.push(document.getElementById("createCorrectAnswer" + i).value)

        })
        console.log(questionsArrayItem)
        API.createQuiz(questionsArrayItem)
    }

    return (
        <div className="createDiv">
            <div id="createdCard">
                <div>
                    <h3>Title:</h3>
                    <input id={"createTitle"}></input>
                </div>
                <div>
                    <h3>Subject:</h3>
                    <input id={"createSubject"}></input>
                </div>
                {/* <CreateComponent
                    key="0"
                    id="0"
                /> */}
                {questions.map((e, i) => {
                    return <CreateComponent
                        key={i}
                        id={i}
                    />
                })}
            </div>
            <button onClick={addQuestion}>Add New Question</button>
            <button onClick={submitQuiz}>Submit Quiz</button>
        </div>
    );
}

export default Create;
