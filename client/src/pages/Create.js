import React, { useState, useEffect } from 'react';
import CreateComponent from "../components/Create/CreateComponent";
import API from "../utils/API"
import { getUserId } from "../utils/firebase";
import './style/create.css';
import isSignedIn from "../utils/isSignedIn";
import { Link } from 'react-router-dom';

const items = [
    {name:'Science', label:"Science"},
    {name:"Computer Science", label:"Computer Science"},
    {name:'History', label:"History"},
    {name:'English', label:"English"},
    {name:'Spanish', label:"Spanish"},
    {name:'Geography', label:"Geography"},
];

function Create(props) {
    isSignedIn()

    const url = window.location.pathname;

    let [numberOfElements, setNumberOfElements] = useState(1);

    useEffect(() => {
        if (url === "/update") {
            const quizData = props.location.state.quizObj;
            let questionsNum = quizData.questions.length;

            setNumberOfElements(questionsNum);

            setTimeout(function () {
                document.getElementById("createTitle").value = quizData.title;
                document.getElementById("createSubject").value = quizData.subject;

                for (let i = 0; i < questionsNum; i++) {
                    document.getElementById("createQuestion" + i).value = quizData.questions[i];

                    for (let j = 0; j < quizData.questionAnswers[i].length; j++) {
                        document.getElementById("createAnswer" + (j + 1) + "" + i).value = quizData.questionAnswers[i][j];
                    }

                    document.getElementById("createCorrectAnswer" + i).value = quizData.correctAnswer[i];
                }
            }, 1000);

        }
    }, []);


    function addQuestion() {
        numberOfElements++;
        setNumberOfElements(numberOfElements);
    }

    function submitQuiz() {
        let questionsArrayItem = {
            createdBy: getUserId(),
            title: document.getElementById("createTitle").value,
            subject: document.getElementById("createSubject").value,
            questions: [],
            questionAnswers: [],
            correctAnswer: []
        };

        for (let i = 0; i < numberOfElements; i++) {
            // questionsArray.forEach((e, i) => {

            questionsArrayItem.questions.push(document.getElementById("createQuestion" + i).value);

            let tempArr = [
                document.getElementById("createAnswer1" + i).value,
                document.getElementById("createAnswer2" + i).value,
                document.getElementById("createAnswer3" + i).value,
            ];

            let answerArr = tempArr.filter(n => n !== "");

            questionsArrayItem.questionAnswers.push(answerArr);
            questionsArrayItem.correctAnswer.push(document.getElementById("createCorrectAnswer" + i).value);

        }

        if (url === "/update") {
            API.updateUserQuiz(props.location.state.id, questionsArrayItem);
        } else if (url === "/create") {
            API.createQuiz(questionsArrayItem);
        }
    };

    if (url === "/create") {
        return (
            <div className="container">
            <div className="createDiv">
                <div className="card" id="titleCard">
                <div className="mx-auto" id="title-div">
                    <h3>Title:</h3>
                    <div className="titleBorder">
                        <input className="titleInput" id={"createTitle"}></input>
                    </div>
                </div>
                </div>
                <br />
                <div id="createdCard">
                    <div id="subject" className="overflow-visible">
                        <select id="createSubject" className="selector">
                            {items.map(({label, name,...rest})=>(
                                    <option value={name}>
                                        {label}
                                    </option>
                            ))}
                        </select>
                    </div>
                    {Array.from(Array(numberOfElements).keys()).map((e, i) => {
                        return <CreateComponent
                            key={i}
                            id={i}
                        />
                    })}
                </div>
                <br/>
                <button className="btn btn-primary" onClick={addQuestion}>
                    Add New Question
                </button>
                <Link to="/profile">
                    <button className="btn btn-danger" id="subQuizBtn" onClick={submitQuiz}>
                        Submit Quiz and Questions
                    </button>
                </Link>
            </div>
            </div>
        );
    } else {
        return (
            <div className="container">
            <div className="createDiv">
            <div className="card" id="titleCard">
                <div className="mx-auto" id="title-div">
                    <h3>Title:</h3>
                    <input id={"createTitle"}></input>
                </div>
                </div>
                <br />
                <div>
                    <h3>Subject:</h3>
                    <input id="createSubject" readOnly></input>
                </div>
                <div id="createdCard">
                    {Array.from(Array(numberOfElements).keys()).map((e, i) => {
                        return <CreateComponent
                            key={i}
                            id={i}
                        />
                    })}
                </div>
                <br/>
                <button className="btn btn-primary"
                onClick={addQuestion}>Add New Question</button>
                <button className="btn btn-danger"
                id="subQuizBtn"
                onClick={submitQuiz}>Update Quiz</button>
            </div>
            </div>

        );
    }
}


export default Create;
