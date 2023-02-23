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
                    <h3>NewsWindow:<br />How the World Sees the News</h3>
                    <img className="project-img" src="https://i.imgur.com/mNvHWrl.png" />
                    <p className="info">Type in a search word, and three windows will populate with results from US news sources, UK news, and a list of non-English publications whose headlines will be automatically translated via API</p>
                    <p><strong>TECHNOLOGIES USED</strong>: React, React-Router, Axios </p>
                    <p><strong>GITHUB repo</strong>: <a href="https://github.com/mfhan/payplay/" target="_blank"> https://github.com/mfhan/newsone </a></p>
                    <p><a href="https://payplay.surge.sh" target="_blank">Visit Newswindow.netlify.app!</a></p>

                </div>
                <div className="project-card">TWO
                    <h3>PayPlay:<br /> Discover Street Artists Nearby</h3>
                    <img className="project-img" src="https://i.imgur.com/mNvHWrl.png" />
                    <p className="info">Using a map interface to input and visualize data. In this case, an app to help street artists share their location and be more discoverable</p>
                    <p><strong>TECHNOLOGIES USED</strong>: React, React-Router, Node, Express, Sequelize, Postgres, Axios, Json web Token, bcrypt, Mapbox, react-map-gl </p>
                    <p><strong>GITHUB repo</strong>: <a href="https://github.com/mfhan/payplay/" target="_blank"> https://github.com/mfhan/payplay  </a></p>
                    <p><a href="https://payplay.surge.sh" target="_blank">Visit PayPlay.surge.sh!</a></p>
                    <a href="https://medium.com/p/7a96b421bd90/" target="_blank">  <img className="bio-logo" src="assets/social/medium.png" /> Medium Blog Link </a>
                </div>
                <div className="project-card">THREE
                    <h3>PayPlay:<br /> Discover Street Artists Nearby</h3>
                    <img className="project-img" src="https://i.imgur.com/mNvHWrl.png" />
                    <p className="info">Using a map interface to input and visualize data. In this case, an app to help street artists share their location and be more discoverable</p>
                    <p><strong>TECHNOLOGIES USED</strong>: React, React-Router, Node, Express, Sequelize, Postgres, Axios, Json web Token, bcrypt, Mapbox, react-map-gl </p>
                    <p><strong>GITHUB repo</strong>: <a href="https://github.com/mfhan/payplay/" target="_blank"> https://github.com/mfhan/payplay  </a></p>
                    <p><a href="https://payplay.surge.sh" target="_blank">Visit PayPlay.surge.sh!</a></p>
                    <a href="https://medium.com/p/7a96b421bd90/" target="_blank">  <img className="bio-logo" src="assets/social/medium.png" /> Medium Blog Link </a>
                </div>
            </div >
        </>
    )
}

export default Projects;
