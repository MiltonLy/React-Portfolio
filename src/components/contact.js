import React from "react";
import { BsLinkedin, AiFillGithub, CgMail } from "react-bootstrap-icons"

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
                            <a href="/"><BsLinkedin/></a>
                        </li>
                        <li>
                            <a href="/"><AiFillGithub/></a>
                        </li>
                        <li>
                            <a href="/"><CgMail/></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Contact