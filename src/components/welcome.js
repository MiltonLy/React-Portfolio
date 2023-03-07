import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

function Welcome() {
    return (
        <div>
            <section className="welcome-section" id="home">
                <div className="container-xl">
                    <div className="row">
                        <div className="col welcom-text">
                            <span>Hello, I'm Milton! I am a</span>
                            <TypeWriterEffect
                            textStyle={{fontFamily: "Segoe UI"}}
                            startDelay={100}
                            cursorColor="black"
                            text="Junior Developer"
                            typeSpeed={100}
                            hideCursorAfterText={true}
                            />
                            <div className="welcome-btn-container">
                                <a href="#projects" className="btn primary-btn">Projects</a>
                                <a href="#contact" className="btn secodary-btn">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Welcome