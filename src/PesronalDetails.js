import React from "react";
import "./App.css";
import { FaLocationArrow, FaPhone, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

function PersonalDetails() {
    return (
        <div>
            <p className="PersonalDetails">
                <h4 className="links"><FaLocationArrow />  Ma’ale Iron, Zalafe </h4>
                <h4 className="links"><FaPhone /> +972 0522216445</h4>
                <a className="links" href="mailto: hajar.amara.9@gmail.com"><FaEnvelope /></a>
                <a className="links" href="https://www.linkedin.com/in/hajar-amara-193292b3/"><FaLinkedinIn /></a>
                <a className="links" href="https://github.com/HajarAmara"><FaGithub /></a>
                {/* <h3 className="spaceleft"> LinkedIn: https://www.linkedin.com/in/hajar-amara-193292b3/ </h3>
                <h3 className="spaceleft"> GitHub: https://github.com/HajarAmara </h3> */}
            </p >
        </div >
    );
}

export default PersonalDetails;