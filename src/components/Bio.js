import React from 'react';
import '../App.css';


function Bio() {
    return (
        <section id='bio'>
            <h2 id="subhead">
                <strong>BIO:</strong>
            </h2>
            <li id="subhead"> <strong>JOURNALISM:</strong> </li>
            <ul className="bio" >
                <li >Public Info officer at the United Nations in New York; Security Council and General Assembly
                </li>
                <li>Columbia journalism school</li>
                <li >Tech reporter at Reuters<img className='bio-logo' src={require("./assets/social/reutersmini.png")} alt="" /> covering  Samsung, Apple, Sony
                </li>

                <li >News editor at Bloomberg <img className='bio-logo' src={require("./assets/social/bloomberg.png")} alt="" /> covering Russia <img className='bio-logo' src={require("./assets/social/angryputin.png")} alt="" /> and China</li>
            </ul>
            <br />
            <li id="subhead"> <strong>TECHNOLOGY:</strong>
            </li>
            <ul className="bio" >
                <li >Tech evangelist at Jet.com building tech talks and workshop series
                </li>
                <li >Technical content strategist at MongoDB xxxxx
                </li>

                <li ><strong>JavaScript</strong> including <strong>React.js</strong> <img className='bio-logo' src={require("./assets/social/react.png")} alt="" /> and <strong>Node.js</strong> <img className='bio-logo' src={require("./assets/social/node.png")} alt="" />
                </li>

                <li >Git and GitHub <img className='bio-logo' src={require("./assets/social/github.png")} alt="" />; <strong> HTML5 </strong> <img className='bio-logo' src={require("./assets/social/HTML5.png")} /> and CSS <img className='bio-logo' src={require("./assets/social/CSS3.png")} alt="" />
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