import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <ul className='ulStyles'>
            <li className='aStyles'><a href="#bio">About Me</a></li>
            <li className='aStyles'><a href="#contactme">Get in Touch</a></li>
            <li className='aStyles'><a href="#projects">Projects</a></li>
        </ul>
    )
}

//  <li><a href="default.asp">Home</a></li>
//<li><a href="about.asp">About</a></li> */}


// <ul className='ulStyles'>
// <li className='aStyles'><Link to="#about">About Me</Link></li>
// <li className='aStyles'><Link to="#contactme">Get in Touch</Link></li>
// <li className='aStyles'><Link to="/#projects">Projects</Link></li>
// </ul> */}

export default Nav