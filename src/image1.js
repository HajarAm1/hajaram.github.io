import React from "react";
import "./App.css";


function Image1() {
    return (
        <div>
            <img className="img1" src={require("./image/profilePic.jpeg")} alt="" />
        </div>
    );
}

export default Image1;