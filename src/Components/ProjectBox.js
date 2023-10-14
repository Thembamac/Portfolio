import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    // XcoinCHDesc:"Expert Advisors, Browser-based EA, Free Crypto / Forex Historical DATA API plugins. This plugin can help you import any historical/streaming data via API (RESTful API or WebSocket).",
    XcoinCHGithub: "https://github.com/Thembamac/XcoinCH",
    XcoinCHWebsite: "www.xcoinch.com/",

    // onekeyhqnativeapplicationDesc:
    //   "Onekey is an app for the cryptocurrencies it allows one to trade.",
    onekeyhqnativeapplicationGithub:
      "https://github.com/Thembamac/One-Key-HQ",
    onekeyhqnativeapplicationWebsite: "https://onekey.so/",

    // RariCapitalDesc: "Rari capital is an open decentralized exchange platform for blockchain technologies.",
    RaricCpitalGithub: "https://github.com/Thembamac/Rari-Capital",
    RariCapitalWebsite: "https://app.rari.capital/",
  };

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Live</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox