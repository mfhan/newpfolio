import { useState } from 'react';
import '../App.css';
import Contact from './Contact'
import About from './About'
import Bio from './Bio'
import Header from './Header'
import Projects from './Projects'
// import axios from 'axios'
// import {
//     BrowserRouter as Router,
//     Route, Routes, Link, BrowserRouter
// } from 'react-router-dom'

//old style: class Main extends React.Component {}

function Main() {

    const [elements, setElements] = useState([]);

    //published to the web: 
    // https://docs.google.com/spreadsheets/d/e/2PACX-1vQm70kl5Y3AQzOk_JWJyzDat1IRM50muU7bEBYz_3h3tb7-2_oHKmGdAtNDBFlEdKCM0zDSoaij-uW_/pubhtml

    //FREECODE CAMP: 
    //https://spreadsheets.google.com/feeds/cells/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/full?alt=json


    let myProjectsUrl = 'https://spreadsheets.google.com/feeds/cells/e/2PACX-1vQm70kl5Y3AQzOk_JWJyzDat1IRM50muU7bEBYz_3h3tb7-2_oHKmGdAtNDBFlEdKCM0zDSoaij-uW_/edit#gid=0'



    // const buildProjects = async () => {
    //     const response = await axios.get(myProjectsUrl)
    //     let data = response.data
    //     console.log('this is the data', data)
    //     //there won't be a setstate
    //     //you need to format the data so that it's compatible with what's inside projects.js
    //     //and then use setElements
    //     //what is the barest bone function so I can see the data on the Browser
    // }

    // buildProjects();

    return (
        <div>
            <Header />
            <Bio />
            <Contact />
            <Projects />
            <About />

            {/* <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/#bio' element={<Bio />} />
            </Routes> */}
        </div>
    );
}

export default Main