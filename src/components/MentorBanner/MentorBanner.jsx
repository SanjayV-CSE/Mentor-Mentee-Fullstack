// MentorBanner.js
import React from 'react';
import './MentorBanner.css'

const MentorBanner = () => {
  return (
    <div>
    <h1>OUR MENTORS</h1>
    <div className='mentor-main'>
    <div className="mentor-card">
    
      <img src="./src/assets/Mentor2.jpg" alt='Mentor1'/>
      <div className="card-content">
        <h3>BRO</h3>
        <p>I have a skill in design, and love to be your mentor</p>
      </div>
    </div>

<div className="mentor-card">
<img src="./src/assets/Mentor2.jpg" alt='Mentor1'/>
<div className="card-content">
  <h3>BRO</h3>
  <p>I have a skill in design, and love to be your mentor</p>
</div>
</div>

<div className="mentor-card">
      <img src="./src/assets/Mentor2.jpg" alt='Mentor1'/>
      <div className="card-content">
        <h3>BRO</h3>
        <p>I have a skill in design, and love to be your mentor</p>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default MentorBanner;
