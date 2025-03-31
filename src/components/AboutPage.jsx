import React from 'react';
import './AboutPage.css'; // Create this CSS file
import AboutComp from './AboutComp';

function AboutPage() {
  return (
    <div style={{ width: '100%' }}> {/* Removed vw */}
      <AboutComp />
      <div className="about-container">
        <div className="about-header">
          <div>
            <h1>About</h1>
            <h2>Myself</h2>
          </div>
          <div className="number-indicator">01.</div>
        </div>
        <div className="image-grid">
          <div className="image-circle">
            <img src="images/image1.jpg" alt="Image 1" />
          </div>
          <div className="image-circle">
            <img src="images/image2.jpg" alt="Image 2" />
          </div>
          <div className="image-circle">
            <img src="images/image3.jpg" alt="Image 3" />
          </div>
          <div className="image-circle">
            <img src="images/image4.jpg" alt="Image 4" />
          </div>
        </div>
        <div className="contact-info">
          <div className="email-me">EMAIL ME</div>
          {/* You can add more text or information below the images */}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;