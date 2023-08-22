import React, { Component } from 'react'
import "./App.css";

class About extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        };
        this.calcualteAge = this.calcualteAge.bind(this);
    }

    calcualteAge() {
        // var birthDate = new Date(1995, 13, 8);
        // var diff_ms = Date.now() - birthDate.getTime();
        // var age_date = new Date(diff_ms);
        // return Math.abs(age_date.getUTCFullYear() - 1970);
        let today = new Date().getTime();
        let other_date = new Date(new Date("1995-09-13")).getTime();
        let difference = Math.abs(today - other_date);

        let days = Math.floor(difference / (1000 * 3600 * 24));
        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;
        return years + 1;
    }

    render() {
        return (

            <div className="borderDiv">
                <h3 className="bold">About<br /> </h3>
                <div >
                    <p className="innerDivBorder">
                        Hajar Amara,{this.calcualteAge()} years old, from Zalafe Village.
                        I like to help others and be realted to volunteering groups.
                        As an aspiring professional in the realm of data and technology,
                        I possess a keen interest in working with SQL, JAVA and Python.
                        With a solid foundation in these languages and a commitment to continuous learning,
                        I am excited to embark on a junior role that offers opportunities for hands-on experience
                        and skill enhancement.
                    </p>
                    <br />
                </div>
            </div >

        );
    };
}

export default About;