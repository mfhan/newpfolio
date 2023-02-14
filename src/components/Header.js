import React, { Component } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import '../App.css';


function Header() {

    // let ulStyles = {
    //     'height': '100px',
    //     'paddingTop': '50px',
    //     'listStyle': 'none',
    //     backgroundColor: 'pink'
    // }

    // let aStyles = {
    //     display: 'inline',
    //     color: 'white',
    //     textAlign: 'center',
    //     padding: '14px',
    //     textDecoration: 'none'
    // }

    return (
        <div>
            <Nav />
            <div className='hero_image'>
            </div>

        </div>
    );
}

export default Header;
