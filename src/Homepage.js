import React from 'react';
import './Homepage.css';
import './App.css'
import Sidenav from './navigation/Sidenav.js';
import Timeline from './timeline/Timeline.js';

function Homepage() {
  return (
    
      <div className='homepage flex flex-row'>
      <div className="homepage_nav ">
      <Sidenav />
      </div>
      <div className="homepage_timeline">
        <Timeline /> 
    </div>
      </div>
    
  )
}

export default Homepage
