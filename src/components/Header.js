import React from 'react';
// import { Component } from 'react';
import Nav from './Nav';
// import { Link } from 'react-router-dom';
import '../App.css';


function Header() {

    return (
        <div>
            <Nav />
            <div className='hero_image'>
                <h1>Marie-France Han</h1>

                <div className="social">
                    <a href="https://www.github.com/mfhan" rel="noreferrer" target="_blank">
                        <img className='social-logo' src={require("./assets/social/github.png")} alt="" />
                    </a>
                    <a href="https://www.LinkedIn.com/in/mariefr" target="_blank">
                        <img className='social-logo' src={require("./assets/social/linked25.png")} alt="" />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Header;
