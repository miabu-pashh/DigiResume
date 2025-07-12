import React from "react";
import "../css/AboutMePage.css";
import profileImage from "/Images/ProfilePic.jpeg"; // Adjust the path as necessary

const AboutMePage = ({ onNext, onBack }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <img src={profileImage} alt="Profile" className="about-img" />

        <p className="about-text">
          Hello! I'm <strong>Mahaboob Pasha Mohammad</strong>, a passionate
          software engineer and a recent graduate from Saint Louis University
          with a Master's in Software Engineering. My interests lie at the
          intersection of{" "}
          <strong>
            AI, Human-Computer Interaction (HCI), and Full-Stack Development
          </strong>
          . I thrive on transforming abstract ideas into meaningful, scalable,
          and human-centric digital solutions. From building intuitive user
          interfaces to architecting complex backend systems, I enjoy crafting
          end-to-end applications that solve real-world problems. I believe
          technology should not only work — it should connect, inspire, and
          elevate the human experience.
        </p>

        <blockquote className="about-quote">
          “I believe in building software that’s not just functional, but
          thoughtful — technology with a human touch.”
        </blockquote>
      </div>

      <div className="swipe-buttons">
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
