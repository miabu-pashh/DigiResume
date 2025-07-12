// WelcomePage.jsx
import React from "react";
import "../css/WelcomePage.css"; // Assuming you have a CSS file for styles

const WelcomePage = ({ onNext, onBack }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-heading">
          Welcome to <br /> My <br /> Digital Resume
        </h1>
        <p className="welcome-text">
          This interactive resume mimics a real PDF layout — <br />
          centered, clean, and scrollable.
        </p>
      </div>

      <button className="welcome-button" onClick={onNext}>
        swipe →
      </button>
    </div>
  );
};

export default WelcomePage;
