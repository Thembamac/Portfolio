import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Themba Macheke</b> and I'm from Pretoria, South
            Africa. I'm a <b>software developer</b> who has <b>2+ years</b> of
            work experience. <br />
            <br />I worked as a <b>Web developer, FrontEnd Developer, React Developer</b> at companies such as One Key HQ, XcoinCH and Rari Capital. I love to create
            original projects with beautiful designs, you can check out some of
            my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
        <Skills skill="Firebase" />
        <Skills skill="Css" />
        <Skills skill="Html" />
        <Skills skill="Next" />
        <Skills skill="Three" />
        <Skills skill="Tailwind" />
        <Skills skill="Expo" />
        <Skills skill="Redux" />
        <Skills skill="Typescript" />
      </div>
    </>
  );
}

export default About