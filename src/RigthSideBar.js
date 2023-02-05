import React from "react";
import "./App.css";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

function Right() {
    return (
        <div className="maincard">
            <h3 className="bold">Work Experience<br /> </h3>
            <Experience />
            <h3 className="bold">Education <br /></h3>
            <Education />
            <h3 className="bold">Skills</h3>
            <Skills />
            <a className="nonbold" href="./HajarAmaraCV.docx" download>Download CV</a>
        </div>
    );
}

export default Right;