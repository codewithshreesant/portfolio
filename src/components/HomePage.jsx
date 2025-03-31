import React from 'react';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <div className="home-page">
      <div className="left-section">
        <h1 className="worked-with-title">Worked with</h1>
        <div className="worked-with-list-container">
          <ul className="worked-with-list">
            <li>Kramasha</li>
            <li>Sonya Styles</li>
            <li>Anugraha designs</li>
            <li>yousha virago</li>
            <li>pj studio</li>
            <li>chuplag studio</li>
            <li>HOF runway</li>
          </ul>
        </div>
        <p className="model-name-bottom">shikha shrestha</p>
      </div>
      <div className="right-section">
        <img src="images/image3.jpg" alt="Shikha Shrestha" className="model-image" />
      </div>
    </div>
  );
}

export default HomePage;