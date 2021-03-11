import React from 'react';
import './Header.css';
import logo from '../../Images/bg.jpg';

import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="main-container">
            <img src={logo} alt="stadium" className="header-img" />
            <h1 className="centered"> Soccer Team Builder</h1>
            {/* <nav className="nav-item">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to={'/team'}> Team </Link>
                </li>
                <li>
                    <Link to="/detail"> Details</Link>
                </li>
            </nav> */}
        </div>
    );
};

export default Header;