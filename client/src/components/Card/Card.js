import React from 'react'
import "./Card.css"

function Card(props)  {
    return (
        <div className="card subjectCard">
            <img src={props.image} className="card-img-top" alt={props.title}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default Card
