import React from 'react';
import "./home.css";
import Card from "../Card/Card";
import SignUpBtn from "../Button/SignUpBtn"

function HomeComponent() {
    return (
        <div>
            <div id="homePageDiv">
                <div className="welcomeSection">
                    <div className="welcomeLeft">
                        <h1>Brain Fart</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                        <SignUpBtn></SignUpBtn>
                        {/* // type="button" 
                        // className="button btn btn-primary"
                        // onClick={() =>{}}>Get Started */}
                    </div>
                    <img className="welcomeRight" src="https://images.squarespace-cdn.com/content/v1/57a34fcde6f2e10d061bc16b/1487861810473-3H8Y9BIGJWT4Z4SOWYNC/ke17ZwdGBToddI8pDm48kDVYnQx84rzrm2qQOUd7Sy17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UY8mqlSYPG-nmIUWpJc006SuQyuTTLGA4klG9-z6Yewc3-7Z7Bn97rMKff5yJsS8Lw/machine-learning-smart-brain-wallpaper-1920x1200.jpg?format=2500w"></img>
                </div>

                <div className="cardSection">
                    <div>
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                        <Card image = {"..."} title = {"Test Subject"} href = {"#"}/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
