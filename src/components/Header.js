import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Header() {

    let ulStyles = {
        'height': '100px',
        'paddingTop': '50px',
        'listStyle': 'none',
        backgroundColor: 'pink'
    }


    let aStyles = {
        display: 'inline',
        color: 'white',
        textAlign: 'center',
        padding: '14px',
        textDecoration: 'none'
    }

    return (
        <ul style={ulStyles}>
            {/* <li style={aStyles}><Link to="/">Home</Link></li> */}
            <li style={aStyles}><Link to="/about">About Me</Link></li>
            {/* <li style={aStyles}><Link to="/contact">Get in Touch</Link></li> */}
            <li style={aStyles}><Link to="/projects">Projects</Link></li>
        </ul>

    );
}

export default Header;
