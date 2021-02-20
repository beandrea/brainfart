import React from 'react';
import "./create.css";

function CreateComponent() {

    return (
        <div className="createMainDiv">
            <div className="card">
                <div className="card-body">
                    <div>
                        <h3>Title:</h3>
                        <input id="createTitle"></input>
                    </div>
                    <div>
                        <h3>Subject:</h3>
                        <input id="createSubject"></input>
                    </div>
                    <div>
                        <h3>Question:</h3>
                        <input id="createQuestion"></input>
                    </div>
                    <div>
                        <h4>Answer 1:</h4>
                        <input id="createAnswer1"></input>
                    </div>
                    <div>
                        <h4>Answer 2:</h4>
                        <input id="createAnswer2"></input>
                    </div>
                    <div>
                        <h4>Answer 3:</h4>
                        <input id="createAnswer3"></input>
                    </div>
                    <div>
                        <h4>Answer 4:</h4>
                        <input id="createCorrectAnswer"></input>
                    </div>
                    {/* <div>
                        <button className="addQuestionBtn">Add Question</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CreateComponent
