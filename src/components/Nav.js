import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <ul >
            {/* <li style={aStyles}><Link to="/">Home</Link></li> */}
            <li ><Link to="/about">About Me</Link></li>
            <li ><Link to="/contact">Get in Touch</Link></li>
            <li ><Link to="/projects">Projects</Link></li>
        </ul>
    )
}


export default Nav