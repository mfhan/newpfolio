import React from 'react';


function Projects() {
    return (
        <div>
            {props.projects.map((d, i) => {
                return (
                    <div>
                        <h3>{d.title}</h3>
                        <img src={d.image} />
                        <p>{d.summary}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Projects;
