import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";
import SchoolIcon from '@material-ui/icons/School';

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
                    <Link to ="/create">
                        Create A Quiz
                    </Link>
                </li>
                <li className="nav-item" title="Search" id="searchBar">
                    <form>
                        <input type="search" placeholder="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
