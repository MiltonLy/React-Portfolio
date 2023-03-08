import React from "react";
import "../reset.css";
import "../styles/welcome.css";
import TypeWriterEffect from "react-typewriter-effect";

function Welcome() {
  return (
    <div>
      <section className="welcome-section" id="home">
        <div className="container-xl">
          <div className="row">
            <div className="col welcome-text">
              <h1>Hello, I'm Milton! I am a</h1>
              <span style={{display: "inline-block"}} className="typewriter-text">
                <TypeWriterEffect
                  textStyle={{ fontFamily: "Segoe UI" }}
                  startDelay={100}
                  cursorColor="black"
                  text="Junior Developer"
                  typeSpeed={100}
                  hideCursorAfterText={true}
                />
              </span>
              <p>Aspiring Full Stack Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
