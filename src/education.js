import React from "react";
import "./App.css";

function Education() {
    return (
        <div className="borderDiv">
            <h3 className="bold">Education <br /></h3>
            <div> Information Systems at University of Haifa(2014- 2019):
                <div className="innerDivBorder">
                    <h5 > Courses:</h5>
                    <div className="nestedInnerBorder"> Introduction to computer science(C), OOP(JAVA), software engineering Basics of client-side programming.</div>
                    <h5 > Projects:</h5>
                    <div className="nestedInnerBorder">
                        •Graduation Project: developed a home food sales website. technologies that used java, HTML5, CSS, bootstrap4, MySQL, tomcat. link for the project: <a className="linkProj" href="https://github.com/HajarAmara/zakifood.github.io" >view github link</a>
                        <br />•	Software engineering course: developed a Pacman Game in Java language with MVC architecture, and agile development. link for game:  <a className="linkProj" href="https://github.com/HajarAmara/pacmanGame" >view github link</a>
                    </div>
                    <br />
                </div>
            </div>
        </div >
    );
}

export default Education;