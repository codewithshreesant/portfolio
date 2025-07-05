import React from 'react';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <div className='main-home-section'>
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
          <a href="https://youtu.be/-7cThUWexeo?si=6aFCXIjkORW5ukVH" className="text-white">
            <button className='px-[1rem] py-[0.4rem] bg-blue-700 font-bold  cursor-pointer'>Music Video</button>
          </a>
        </div>

        <div className="right-section">
          <img src="images/image3.jpg" alt="Shikha Shrestha" className="model-image" />
        </div>


      </div>

    </div>
  );
}

export default HomePage;