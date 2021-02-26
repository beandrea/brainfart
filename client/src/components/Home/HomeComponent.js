import React from 'react';
import "./home.css";
import Card from "../Card/Card";
import SignUpBtn from "../Button/SignUpBtn"
import { Link } from 'react-router-dom';
import images from "../../images.json"

function HomeComponent() {
    return (
        <div>
            <div id="homePageDiv">
                <div className="welcomeSection">
                    <div className="welcomeLeft">
                        <h1>Brain Fart</h1>
                        <p>Welcome to BrainFart, a place where you can test your knowledge on the subjects you love. Take and make quizzes to help you further your grades and do well in your classes. With BrainFart, youll never have to worry about your professors deleting quizzes because we enforce a strict no snitch policy. And we all know that snitches get stitches</p>
                        <SignUpBtn></SignUpBtn>
                        {/* // type="button" 
                        // className="button btn btn-primary"
                        // onClick={() =>{}}>Get Started */}
                    </div>
                    <img className="welcomeRight" alt="welcome" src="https://images.squarespace-cdn.com/content/v1/57a34fcde6f2e10d061bc16b/1487861810473-3H8Y9BIGJWT4Z4SOWYNC/ke17ZwdGBToddI8pDm48kDVYnQx84rzrm2qQOUd7Sy17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UY8mqlSYPG-nmIUWpJc006SuQyuTTLGA4klG9-z6Yewc3-7Z7Bn97rMKff5yJsS8Lw/machine-learning-smart-brain-wallpaper-1920x1200.jpg?format=2500w"></img>
                </div>

                <div className="cardSection">
                    <div>
                        {/* <Link to = "/quiz/math"><Card image = {images[0].image} title = {"Math"}/></Link> */}
                        <Link to = "/category/science"><Card image = {images[1].image} title = {"Science"}/></Link> 
                        <Link to = "/category/history"><Card image = {images[2].image} title = {"History"}/></Link>
                        <Link to = "/category/compSci"><Card image = {images[3].image} title = {"Computer Science"}/></Link>
                        <Link to = "/category/sports"><Card image = {images[4].image} title = {"sports"}/> </Link>
                        <Link to = "/category/mythology"><Card image = {images[5].image} title = {"mythology"}/></Link>
                        <Link to = "/category/geography"><Card image = {images[6].image} title = {"Geography"}/></Link>
                        <Link to = "/random"><Card image = {images[6].image} title = {"Take A Random Quiz From a User"}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
