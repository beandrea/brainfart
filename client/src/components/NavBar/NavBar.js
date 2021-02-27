import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";
import SchoolIcon from '@material-ui/icons/School';
import PowerIcon from '@material-ui/icons/PowerSettingsNew'
import { signOut } from "../../utils/firebase";


function NavBar() {
    return (
        <div>
            <ul className="nav nav-tabs" id="navBar">
                <li className="nav-item" title="Logo">
                    <p id="logo">
                        <SchoolIcon />
                    </p>
                </li>
                <li className="nav-item" title="Home Page">
                    <Link to="/" >
                        Home
                </Link>
                </li>
                <li className="nav-item" title="Profile">
                    <Link to="/profile" >
                        Profile
                </Link>
                </li>
                <li className="nav-item" title="Create a Quiz">
                    <Link to ="/create" action="crea">
                        Create A Quiz
                    </Link>
                </li>
                <li className="nav-item" title="Create a Quiz">
                    <button className="btn" onClick={signOut} alt="sign out"><span id="power">
                        <PowerIcon />
                    </span> </button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
