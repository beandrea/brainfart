import React, { useEffect, useState } from 'react';
import Card from "../Card/Card"
import "./category.css";
import API from "../../utils/API"


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
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Category</h1>
                    <div className="cardSection">
                    <div className="cards">
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryComponent