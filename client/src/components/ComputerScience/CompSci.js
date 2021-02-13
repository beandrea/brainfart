import React, {useState} from 'react';
import "./compSci.css";
import API from "../../utils/API";

function CompSci() {
    const [cs, setCs] = useState([]);
    
    function getQuizes() {
        API.getQuiz(18).then(res => {setCs(res.json)});
        console.log(cs);
    }

    return (
        <div>
            Hi Bob!
        </div>
    )
}

export default CompSci;