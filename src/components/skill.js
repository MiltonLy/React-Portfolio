import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/skill.css'

import cssIcon from '../assets/css icon.png'
import expressIcon from '../assets/express icon.png'
import html5Icon from '../assets/html5.png'
import jsIcon from '../assets/js icon.png'
import mongoIcon from '../assets/mongodb icon.png'
import nodejsIcon from '../assets/nodejs icon.png'
import reactIcon from '../assets/react icon.png'

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      infinite={true}
      draggable={true}
    >
      <div>
        <div className="skills">
          <div className="skill-icon">
            <img src={html5Icon} alt="icon"/>
            <img src={cssIcon} alt="icon"/>
            <img src={jsIcon} alt="icon"/>
            <img src={mongoIcon} alt="icon"/>
            <img src={expressIcon} alt="icon"/>
            <img src={reactIcon} alt="icon"/>
            <img src={nodejsIcon} alt="icon"/>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Skills;
