import React from 'react';
import '../App.css';
import Contact from './Contact'
import About from './About'
import Header from './Header'
import { Route, Link } from 'react-router-dom'

// class Main extends React.Component {}

function Main() {
    return (
        <div>
            <Header />
            <About />
            <Contact />
        </div>
    )
}

export default Main