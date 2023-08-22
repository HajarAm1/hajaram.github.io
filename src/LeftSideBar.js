import React from "react";
import "./App.css";
import Image1 from "./image1";
import PersonalDetails from "./PesronalDetails";



function Left() {
    return (
        <div >
            <h2 className="links"> Hajar Amara</h2>
            <Image1 />
            <PersonalDetails />
            <br />
        </div>
    );
}

export default Left;