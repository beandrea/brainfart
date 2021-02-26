import React, { useEffect, useState } from 'react';
import Card from "../Card/Card"
import "./category.css";
import API from "../../utils/API"
import {Link} from "react-router-dom";


function CategoryComponent(props) {

    const [quizData, setQuizData] = useState([])

    useEffect(()=>{
       API.getQuizByCategory(props.id).then(res => {
            
            let data = res.data.map((e) => {
                return {
                    id:e._id,
                    title:e.title
                }
            })
            setQuizData(data)
        });
    },[])


     
    return (
        <div>
            {quizData.map(quizzes => (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Category</h1>
                    <div className="cardSection">
                    <div className="cards">
                        <Link to = {"/quiz/" + quizzes.id}>
                        <Card image = {"..."} title = {quizzes.title}
                        />
                        </Link>
                        </div>
                        </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default CategoryComponent