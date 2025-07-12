// src/components/AboutMePage.jsx
import React from "react";
import "../css/AboutMePage.css";
import profileImage from "/Images/ProfilePic.jpeg"; // Adjust the path as necessary
import AnimatedTitle from "./AnimatedTitle"; // adjust path if needed

const AboutMePage = ({ onNext, onBack }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        {/* <AnimatedTitle text="SOFTWARE ENGINEERING" /> */}
        <img src={profileImage} alt="Profile" className="about-img" />
        <p className="about-text">
          Hello! I'm <strong>Mahaboob Pasha Mohammad</strong>, a passionate
          graduate student of Software Engineering at Saint Louis University. I
          graduated with a Master's degree and have immersed myself in areas
          like Software Development, AI, and HCI — all fueling my passion for
          cutting-edge tech and innovation. Outside coding, I enjoy leading
          workshops and building creative projects.
        </p>
        <p className="about-text">
          I come from India, Southern part. I have done my Schooling and
          Bachelor's degree there before moving to the United States for my
          Master's.
        </p>
      </div>
      <div className="flex justify-between w-full mt-6">
        <button onClick={onBack} className="swipe-button">
          ← Back
        </button>
        <button onClick={onNext} className="swipe-button">
          Next →
        </button>
      </div>
    </div>
  );
};

export default AboutMePage;
