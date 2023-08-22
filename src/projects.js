import React from "react";
import "./App.css";

function Projects() {
    return (
        <div className="borderDiv">
            <h3 className="bold">Projects <br /></h3>
            <div className="innerDivBorder">
                <h5 > My Profile</h5>
                <a className="linkProj" href="https://github.com/HajarAmara/pacmanGame" >view github link</a>
                <br /> <br />
                <h5 > Convert Files</h5>
                <div>
                    describe
                </div>
                <a className="linkProj" href="https://github.com/HajarAmara/pacmanGame" >view github link</a>
                <br />
            </div>
        </div>
    );
}

export default Projects;