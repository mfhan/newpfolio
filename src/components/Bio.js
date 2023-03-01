import React from 'react';
import '../App.css';


function Bio() {
    return (
        <section id='bio'>
            <h2 id="subhead">
                <strong>BIO:</strong>
            </h2>
            <li id="sub-subhead"> <strong>JOURNALISM:</strong> </li>
            <ul className="bio" >
                <li >Sciences-Po in Paris <img className='bio-logo' src={require("./assets/social/sciencespo.png")} alt="" /> economics and polisci
                </li>
                <li >Public Info officer at the United Nations in New York <img className='bio-logo' src={require("./assets/social/un_logo.png")} alt="" />
                </li>
                <li>Columbia Journalism School <img className='bio-logo' src={require("./assets/social/columbia.png")} alt="" /> majoring in print</li>
                <li >Tech reporter at Reuters<img className='bio-logo' src={require("./assets/social/reutersmini.png")} alt="" /> covering  Samsung, Apple, Sony
                </li>

                <li >News editor at Bloomberg <img className='bio-logo' src={require("./assets/social/bloomberg.png")} alt="" /> covering Russia <img className='bio-logo' src={require("./assets/social/angryputin.png")} alt="" /> and China</li>
            </ul>
            <br />
            <li id="sub-subhead"> <strong>TECHNOLOGY:</strong>
            </li>
            <ul className="bio" >
                <li >Tech evangelist at Jet.com building tech talks and workshop series <img className='bio-logo' src={require("./assets/social/jet.png")} alt="" />
                </li>
                <li >Technical content strategist at MongoDB setting up content creation process<img className='bio-logo' src={require("./assets/social/mongoDB.png")} alt="" />
                </li>

                <li ><strong>JavaScript</strong> including <strong>React.js</strong> <img className='bio-logo' src={require("./assets/social/react.png")} alt="" /> and <strong>Node.js</strong> <img className='bio-logo' src={require("./assets/social/node.png")} alt="" />
                </li>

                <li >GitHub <img className='bio-logo' src={require("./assets/social/github.png")} alt="" /> <strong> HTML5 </strong> <img className='bio-logo' src={require("./assets/social/HTML5.png")} alt="" /> and CSS <img className='bio-logo' src={require("./assets/social/CSS3.png")} alt="" />
                </li>

                <li >SQL <img className='bio-logo' src={require("./assets/social/SQL.png")} alt="" /> and <strong>Python</strong> <img className='bio-logo' src={require("./assets/social/python.png")} alt="" />
                </li>
                <li >ScrumMaster certification <img className='bio-logo' src={require("./assets/social/SQL.png")} alt="" />
                </li>
            </ul>
        </section >
    )
}

export default Bio