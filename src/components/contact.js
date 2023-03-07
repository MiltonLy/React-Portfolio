import React from "react";
import { Linkedin, Github, Envelope } from "react-bootstrap-icons"

function Contact(){
    return (
        <div>
            <section id="contact" className="contact-section">
                <div className="container-xl">
                    <div className="contact-info">
                        <h2>Contact me at:</h2>
                    </div>
                    <ul className="contact-icons">
                        <li>
                            <a href="/"><Linkedin/></a>
                        </li>
                        <li>
                            <a href="/"><Github/></a>
                        </li>
                        <li>
                            <a href="/"><Envelope/></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Contact