import React from 'react';
import '../App.css';


function Bio() {
    return (
        <section id='about'>
            <div className="social">
                <h3>SOCIALS:</h3>
                <img className='emoji' src={require("./assets/emoji.png")}
                    height="120" width="130" />
                <a href="https://www.facebook.com/mariefrancehan" target="_blank">
                    <img className='social-logo' src={require("./assets/social/icon_facebook.svg")} /> </a>

                <a href="https://www.github.com/mfhan" target="_blank">
                    <img className='social-logo' src={require("./assets/social/github.png")} />
                </a>
                <a href="https://www.instagram.com/mariefr" target="_blank">
                    <img className='social-logo' src={require("./assets/social/icon_ig.svg")} /></a>
                <a href="https://www.LinkedIn.com/in/mariefr" target="_blank">
                    <img className='social-logo' src={require("./assets/social/linked25.png")} />
                </a>
            </div>

            <ul className="bio" />
            <li id="subhead">
                <strong>BIO:</strong>
            </li>


            <li > Born in France
                <img className='bio-logo' src={require("./assets/social/tricolore.png")} />
                += Grew up in Africa
                <img className='bio-logo' src={require("./assets/social/ivory.png")} />
                <img className='bio-logo' src={require("./assets/social/tunisia.png")} />
                <img className='bio-logo' src={require("./assets/social/morocco.png")} />
                <img className='bio-logo' src={require("./assets/social/cameroon.png")} />
                += College in Paris
                <img className='bio-logo' src={require("./assets/social/eiffel.png")} />
            </li>

            <li id="subhead"> <strong>JOURNALISM:</strong> </li>

            <li >Public Info officer at the United Nations <img className='bio-logo' src={require("./assets/social/un_logo.png")} /> in New York; Security Council and General Assembly
            </li>

            <li >Columbia <img className='bio-logo' src={require("./assets/social/columbia.png")} /> journalism school
            </li>

            <li > Tech reporter at Reuters<img className='bio-logo' src={require("./assets/social/reutersmini.png")} /> covering  Samsung, Apple, Sony
            </li>

            <li > News editor at Bloomberg <img className='bio-logo' src={require("./assets/social/bloomberg.png")} /> covering Russia <img className='bio-logo' src={require("./assets/social/angryputin.png")} /> and China
            </li>


            <li id="subhead"> <strong>TECH:</strong>
            </li>

            <li > Tech evangelist at Jet.com <img className='bio-logo' src={require("./assets/social/jet.com.png")} /> building tech talks and workshop series
            </li>

            <li ><strong>JavaScript</strong> including <strong>React.js</strong> <img className='bio-logo' src={require("./assets/social/react.png")} /> and <strong>Node.js</strong> <img className='bio-logo' src={require("./assets/social/node.png")} />
            </li>

            <li >Git and GitHub <img className='bio-logo' src={require("./assets/social/github.png")} />; <strong> HTML5 </strong> <img className='bio-logo' src={require("./assets/social/HTML5.png")} /> and CSS <img className='bio-logo' src={require("./assets/social/CSS3.png")} />
            </li>

            <li >SQL <img className='bio-logo' src={require("./assets/social/SQL.png")} /> and <strong>Python</strong> <img className='bio-logo' src={require("./assets/social/python.png")} />
            </li>

        </section >
    )
}

export default Bio