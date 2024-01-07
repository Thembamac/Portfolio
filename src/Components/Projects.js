import React from 'react';
import ProjectBox from './ProjectBox';
import XcoinCH from '../images/XcoinCH.png';
// import YAM from '../images/YAM.png';
import rari from '../images/rari.png';
import okhq from '../images/okhq.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {/* <ProjectBox projectPhoto={YAM} projectName="YAM" /> */}
        <ProjectBox projectPhoto={okhq} projectName="Onekey" />
        <ProjectBox projectPhoto={rari} projectName="RariCapital" />
        <ProjectBox projectPhoto={XcoinCH} projectName="XcoinCH" />

      </div>

    </div>
  )
}

export default Projects