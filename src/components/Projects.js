import React from 'react';


// function Projects(props) {
//     return (
//         <div>
//             {props.elements.map((d, i) => {
//                 return (
//                     <div>
//                         <h3>{d.title}</h3>
//                         <img src={d.image} />
//                         <p>{d.summary}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }


function Projects() {
    return (
        <>
            <h2 id="project-title">
                <strong>PROJECTS:</strong>
            </h2>

            <div className='projects-container' id="projects">


                <div className="project-card">
                    <h3>News Translator and Comparator</h3>
                    <img className="project-img" src="https://i.imgur.com/mNvHWrl.png" alt="" />
                    <p className="info">Type in a search word, and three windows will populate with results from US news sources, UK news, and a list of non-English publications whose headlines will be automatically translated via API</p>
                    <p><strong>TECHNOLOGIES USED</strong>: React, React-Router, Axios </p>
                    <p><strong>GITHUB repo</strong>: <a href="https://github.com/mfhan/payplay/" rel="noreferrer" target="_blank"> https://github.com/mfhan/newsone </a></p>
                    <p><a href="https://payplay.surge.sh" rel="noreferrer" target="_blank">Visit Newswindow.netlify.app!</a></p>

                </div>
                <div className="project-card">
                    <h3>120 Years of Women's Olympics Participation</h3>
                    <img className="project-img" src={require("./assets/oly_women.png")} alt="" />

                    <p className="info">Timelapse visualization showing more and more female athletes fromm all over the world are competing at the summer olympics</p>
                    <p><strong>TOOLS USED</strong>: Python, Numpy, Plotly </p>
                    <p><strong>GITHUB repo</strong>: <a href="https://github.com/mfhan/olympics/" rel="noreferrer" target="_blank"> https://github.com/mfhan/olympics  </a></p>


                </div>
                <div className="project-card">
                    <h3>PayPlay: Support Street Artists Near You</h3>
                    <img className="project-img" src="https://i.imgur.com/X9BjP6N.png" alt="" />
                    <p className="info">Using a map interface to input and visualize data. In this case, an app to help street artists share their location and be more discoverable</p>
                    <p><strong>TOOLS USED</strong>: React, React-Router, Node, Express, Sequelize, Postgres, Axios, Json web Token, bcrypt, Mapbox, react-map-gl </p>
                    <p><strong>GITHUB repo</strong>: <a href="https://github.com/mfhan/payplay/" rel="noreferrer" target="_blank"> https://github.com/mfhan/payplay  </a></p>

                </div>
            </div >
        </>
    )
}

export default Projects;
