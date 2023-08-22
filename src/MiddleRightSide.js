import React, { Component } from 'react'
import "./App.css";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import About from './about';
import Projects from './projects';


class MiddleRight extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            showHideAbout: true,
            showHideExp: false,
            showHideEdu: false,
            showHideSkill: false,
            showHideProjects: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(name) {
        switch (name) {
            case "showHideAbout":
                this.setState({ showHideAbout: true, showHideExp: false, showHideEdu: false, showHideSkill: false, showHideProjects: false });
                break;
            case "showHideExp":
                this.setState({ showHideAbout: false, showHideExp: true, showHideEdu: false, showHideSkill: false, showHideProjects: false });
                break;
            case "showHideEdu":
                this.setState({ showHideAbout: false, showHideExp: false, showHideEdu: true, showHideSkill: false, showHideProjects: false });
                break;
            case "showHideSkill":
                this.setState({ showHideAbout: false, showHideExp: false, showHideEdu: false, showHideSkill: true, showHideProjects: false });
                break;
            case "showHideProjects":
                this.setState({ showHideAbout: false, showHideExp: false, showHideEdu: false, showHideSkill: false, showHideProjects: true });
                break;
            default:
                this.setState({ showHideAbout: true, showHideExp: false, showHideEdu: false, showHideSkill: false, showHideProjects: false });
        }
    }

    render() {

        return (
            <div className='row'>
                <div className='column'>
                    <div className="middlecard button">
                        <button onClick={() => this.hideComponent("showHideAbout")}>About</button> <br />
                        <button onClick={() => this.hideComponent("showHideExp")} >Experience</button><br />
                        <button onClick={() => this.hideComponent("showHideEdu")}>Education</button><br />
                        <button onClick={() => this.hideComponent("showHideProjects")}>Projects</button><br />
                        <button onClick={() => this.hideComponent("showHideSkill")}>Skills</button><br />
                    </div>
                </div>
                <div className='column'>
                    {this.state.showHideAbout && <About />}
                    {this.state.showHideExp && <Experience />}
                    {this.state.showHideEdu && <Education />}
                    {this.state.showHideProjects && <Projects />}
                    {this.state.showHideSkill && <Skills />}
                </div >
            </div>
        );
    }
}

export default MiddleRight; 
