import React from 'react';
import Card from "../Card/Card"


function CategoryComponent() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Category</h1>
                    <div className="cardSection">
                    <div>
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