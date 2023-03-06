import React from "react";
import { Collapse } from "bootstrap";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-xl">
                    {/* Title */}
                    <h2 className="name">Milton Ly</h2>
                    {/* Navbar */}
                    <div className="collapse navbar-collapse" id="navlinks">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-btn"><a className="nav-link active" aria-current="page" href="#home">Home</a></li>
                            <li className="nav-btn"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-btn"><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-btn"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header