import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <>
            <h1 className="siren-heading">The Siren</h1>

            <ul>
                <Link to="/"><li className="navbar-item">Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
                <Link to="/bollywood"><li className="navbar-item">Bollywood&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
                <Link to="/technology"><li className="navbar-item">Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
                <Link to="/hollywood"><li className="navbar-item">Hollywood&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
                <Link to="/fitness"><li className="navbar-item">Fitness&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
                <Link to="/food"><li className="navbar-item">Food</li></Link>
            </ul>

            <Link to="/login"><button className="btn btn-dark btn-md login-button">Sign Up</button></Link>
            
            <h3>_______________________________________________________________________________________________________________________________________</h3>
        </>
    );
};

export default Navbar;