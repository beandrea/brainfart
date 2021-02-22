import React from 'react';
import CreateComponent from "../components/Create/CreateComponent";
import isSignedIn from "../utils/isSignedIn";

function Create() {

    isSignedIn()

    const questionsArray = [];

    function addQuestion () {

        let questionsArrayItem = [
            {
                title: document.getElementById("createTitle").value,
                subject: document.getElementById("createSubject").value,
                question: document.getElementById("createQuestion").value,
                answers:[
                    document.getElementById("createAnswer1").value,
                    document.getElementById("createAnswer2").value,
                    document.getElementById("createAnswer3").value
                ],
                correctAnswer: document.getElementById("createCorrectAnswer").value
            }
        ];

        questionsArray.push(questionsArrayItem);
        console.log(questionsArray);

        
        // let div = document.createElement(<CreateComponent/>)
        // let card = document.getElementById("createdCard")
        // card.append(div)
    }

    return (
        <div className="createDiv">
            <div id="createdCard">
                <CreateComponent />
            </div>
            <button onClick={addQuestion}>Next</button>
        </div>
    );
}

export default Create;
