import React from 'react';
import './spiral.css'; 

const YourComponent = () => {
  return (
    <div className="game-loader">
      <div className="game-loader__planet">
        {/* Add loader elements */}
        <div className="loader-radius1"></div>
        <div className="loader-radius2"></div>
        <div className="loader-radius3"></div>
        <div className="loader-radius4"></div>
        <div className="loader-mini1"></div>
        <div className="loader-mini2"></div>
        <div className="loader-mini3"></div>
        <div className="loader-mini4"></div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
            
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default YourComponent;
