import React from 'react'
import aboutImage from "../images/about.png"

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit excepturi nemo tempora neque repellendus!  </p>
        <button>READ MORE</button>

      </div>

    </div>
  )
}

export default About