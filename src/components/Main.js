import React from 'react';
import '../App.css';
import Contact from './Contact'
import About from './About'
import Bio from './Bio'
import Header from './Header'
import {
    BrowserRouter as Router,
    Route, Routes, Link
} from 'react-router-dom'

//old style: class Main extends React.Component {}

function Main() {

    let myProjectsUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQm70kl5Y3AQzOk_JWJyzDat1IRM50muU7bEBYz_3h3tb7-2_oHKmGdAtNDBFlEdKCM0zDSoaij-uW_/pubhtml'


    return (
        <div>
            <Header />
            <Bio />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/intro' element={<Bio />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route exact path='/' element={<Bio />} /> */}
            </Routes>
        </div>

    );
}

export default Main