import React, { useState } from 'react';
import '../Styles/Project.scss';
import Grow from "../Styles/teamsly.webp"
import Grow2 from "../Styles/roancloud.png"
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleClick = (filter) => {
 
    setActiveFilter(filter);
    
  };

  return (
    <div id='project'>
      <div className='project-heading'>
        
        <h3>latest work</h3>
      </div>

      <ul className='project-filter'>
        <li
          className={activeFilter === 'All' ? 'project-filter-active' : ''}
          onClick={() => handleClick('All')}
        >
          All
        </li>
        <li
          className={activeFilter === 'Website Design' ? 'project-filter-active' : ''}
          onClick={() => handleClick('Website Design')}
        >
          Website Design
        </li>
        <li
          className={activeFilter === 'Website Development' ? 'project-filter-active' : ''}
          onClick={() => handleClick('Website Development')}
        >
          Website Development
        </li>
      </ul>


      <div className="project-container">

        <a href="https://www.teamsly.net" target='_blank' className="project-box">
            <img src={Grow} alt="" />
            <h5>TEAM SLY</h5>
        </a>
        <a href="http://roanclouds.com" target='_blank' className="project-box">
            <img src={Grow2} alt="" />
            <h5>ROAN CLOUD</h5>
        </a>
    
      
      </div>
    </div>
  );
};

export default Projects;
