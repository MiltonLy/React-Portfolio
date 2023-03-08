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
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2000, min: 524 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        arrows={true}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
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
