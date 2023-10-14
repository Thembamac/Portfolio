import React from 'react';
import {FaGithub, FaLinkedin, } from "react-icons/fa";
import {GrMail, GrDomain} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Themba Macheke</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Thembamac" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/themba-macheke-612351197" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:thembamachek.tm@gmail.com' target='_blank'><GrMail /></a>
        {/* <a href='https://resume-cv-80598.web.app/' target='_blank'><GrDomain /></a> */}
      </div>
    </footer>
  )
}

export default Footer