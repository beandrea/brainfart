import React from 'react';
import "./create.css";

function CreateComponent(props) {

    // console.log(props)

    return (
        <div className="createMainDiv">
            <div className="card" id={"create" + props.id}>
                <div className="card-body">
                    
                    <div>
                        <h3>Question:</h3>
                        <input className="questionInput"
                        id={"createQuestion" + props.id}></input>
                    </div>
                    <div>
                        <h4>Answer 1:</h4>
                        <input id={"createAnswer1" + props.id}></input>
                    </div>
                    <div>
                        <h4>Answer 2:</h4>
                        <input id={"createAnswer2" + props.id}></input>
                    </div>
                    <div>
                        <h4>Answer 3:</h4>
                        <input id={"createAnswer3" + props.id}></input>
                    </div>
                    <div>
                        <h4>Correct Answer:</h4>
                        <input id={"createCorrectAnswer" + props.id}></input>
                    </div>
                    {/* <div>
                        <button className="addQuestionBtn">Add Question</button>
                    </div> */}
                </div>
            </div>
            <div>
                <br/>
            </div>
        </div>
        
    )
}

export default CreateComponent
