import React from "react";
import "./App.css";
import { FaLocationArrow, FaPhone, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

function PersonalDetails() {
    return (
        <div>
            <div >
                <h6 className="links"><FaLocationArrow />  Ma’ale Iron, Zalafe </h6>
                <h6 className="links"><FaPhone /> +972 0522216445</h6>
                <div className="aLinks">
                    <a className="links" href="mailto: hajar.amara.9@gmail.com"><FaEnvelope /></a>
                    <a className="links" href="https://www.linkedin.com/in/hajar-amara-193292b3/"><FaLinkedinIn /></a>
                    <a className="links" href="https://github.com/HajarAmara"><FaGithub /></a>
                </div>
            </div >
        </div >
    );
}

export default PersonalDetails;