import React from 'react'
import "./Card.css"
import {Link} from 'react-router-dom';

function Card(props) {
    return (
        <div className="card subjectCard">
            <img src={props.image} className="card-img-top" alt={props.title}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default Card
