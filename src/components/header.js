import React from "react";
import '../reset.css'
import '../styles/header.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-xl">
                    {/* Navbar */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collaps" data-bs-target="#navlinks" aria-controls="navlink" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler"></span>
                    </button>
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