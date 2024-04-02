import React from 'react';
import './CopyRight.css'

const Copyright = () => {
  return (
    <div className="copyright">
      <p>&copy; {new Date().getFullYear()} MentorMentee</p>
    </div>
  );
};

export default Copyright;
