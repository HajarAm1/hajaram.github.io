import React from "react";
import "./App.css";

function Experience() {
    return (
        <div className="borderDiv">
            <h3 className="bold">Work Experience<br /> </h3>
            <div  >
                Galil Software Ltd - Automation Engineer(2020 - 2021)
                <div className="innerDivBorder">
                    <h5>Idomoo Project:</h5>
                    <div className="nestedInnerBorder">I wrote tests to validate the correctness of UI. The working method in testing relied on manual
                        testing and then followed by automated tests. The tests were written in Python and Selenium.
                        Creating pages that contain web elements,creating tests that using these pages, also adding data reader from excel file.
                    </div>
                    <h5>Sentinelone Project:</h5>
                    <div className="nestedInnerBorder">
                        I wrote tests to validate the windows desktop application UI correctness, and if its data shown as expected. I used Pywinauto and Python.
                        Comparing json files with the UI data, validate UI elements like buttons, and textbox working as expected.
                    </div>
                    <h5>The Floor Project:</h5>
                    <div className="nestedInnerBorder">
                        I helped the team in writing tests. I used Java 14 Selenium, testng library and mongodb.
                        Creating tests to validate the correctness of UI data, and its behavior. if the elements are working as expected like buttons, scroll, search bar, etc. Comparing data from mongodb with the UI.
                    </div>
                </div>
                <div> Instructor in Perach program (Oct 2015- Jun 2017)</div>
                <br />
            </div>
        </div >
    );
}

export default Experience;