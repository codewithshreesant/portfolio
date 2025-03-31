import React from 'react';
import './ContactPage.css'; // Create this CSS file

function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in touch</h1>
        <h2>with me</h2>
      </div>
      <div className="contact-details">
        <div className="send-message">
          <p>SEND ME A</p>
          <p>MESSAGE</p>
          {/* You can add a form here later if needed */}
        </div>
        <div className="email-info">
          <p className="label">EMAIL</p>
          <p><a href="mailto:shikhashrestha333@gmail.com">shikhashrestha333@gmail.com</a></p>
        </div>
        <div className="phone-info">
          <p className="label">PHONE</p>
          <p>9744239317</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;