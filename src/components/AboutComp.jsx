import React from 'react';
import './AboutComp.css'; // Create this CSS file
 // Replace with your actual image path

function AboutComp() {
  return (
    <div className="about-page-container">
      <div className="about-image-section">
        <img src="images/image4.jpg" alt="Shikha Shrestha" className="about-page-image" />
      </div>
      <div className="about-text-section">
        <div className="about-header">
          <h1>About Me</h1>
          
        </div>
        <p>I have been modelling since more than 3 years. Currently I'm doing Bachelor's in Computer Application. I am very hardworking and always ready to learn.</p>
        <p>I have that confident. I have won Envogue8 by House Of Fashion Nepal. Also right now I make content and also working as freelancer content creator.</p>
      </div>
    </div>
  );
}

export default AboutComp;