import React from "react";
import '../reset.css'
import '../styles/skill-section.css'

import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel"

import Skills from "./skill";

function SkillSection() {
    return (
        <div>
            <section id="skillSection" className="skill-section">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="skills-container">
                            <div className="skills">
                                <p>Skills</p>
                            </div>
                        </div>
                        <div className="skills-cont">
                            <Skills />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillSection