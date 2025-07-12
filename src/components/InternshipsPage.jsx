// src/components/InternshipsPage.jsx
import React from "react";
import "../css/InternshipsPage.css";
import SluOpenSource from "/Logos/SluOpenSource.png";
import BHNA from "/Logos/BHNA Logo.jpeg";

import Excelerate from "/Logos/ExcelerateLogo.jpeg";

import IYB from "/Logos/IYB.png";

const internships = [
  {
    title: "Software Intern",
    company: "Open Source with SLU",
    type: "Internship",
    date: "Aug 2024 - Dec 2024 · 5 mos",
    location: "St Louis, Missouri, United States · On-site",
    description:
      "Developed Web application to track and improve the donor details and donation tracking. Enhanced the donation tracking by 100%",
    techStack: "Java, React, CI/CD, Postmen, Git, Prisma, Postgre SQL",
    skills:
      "Node.js · Front-End Development · Java Development · Software Infrastructure",
    logo: SluOpenSource,
  },
  {
    title: "Software Intern",
    company: "Missouri Botanical Garden",
    type: "Internship",
    date: "Feb 2024 - Apr 2024 · 3 mos",
    location: "St Louis, Missouri, United States · Remote",
    description:
      "Built the website using HCI principles to boost usability and increase visits by 80%.",
    techStack: "HTML, CSS, JavaScript, React, WordPress",
    skills:
      "WordPress Design · WordPress · HTML5 · CSS · Front-End Development · Software Infrastructure",
    logo: BHNA,
  },
  {
    title: "Data Analyst Intern",
    company: "Excelerate",
    type: "Internship",
    date: "Aug 2023 - Sep 2023 · 2 mos",
    location: "St Louis, Missouri, United States · Remote",
    description:
      "Created visual data stories and developed visual thinking skills for effective sponsor communication.",
    techStack: "HTML, CSS, JavaScript, React, WordPress",
    skills:
      "Data Science · Software Infrastructure · Data Analysis · SQL · MongoDB",
    logo: Excelerate,
  },
  {
    title: "Software Engineer Intern",
    company: "It’s Your Birthday, Inc.",
    type: "Part-time",
    date: "Jul 2023 - Sep 2023 · 3 mos",
    location: "St Louis, Missouri, United States · Remote",
    description:
      "Developed a React app to manage shelter birthday celebrations, enabling admin functionality for organizers.",
    techStack: "HTML, CSS, JavaScript, React",
    skills:
      "Advanced Java · React Native · React.js · nodejs · SQL · Software Infrastructure",
    logo: IYB,
  },
];

const InternshipsPage = ({ onNext, onBack }) => {
  return (
    <div className="internships-page-container">
      <h2 className="internships-heading">Internships</h2>

      <p className="internships-summary">
        Over the course of multiple internships, I gained hands-on experience in
        full-stack development, data visualization, and user experience design.
        From building donor tracking systems and birthday celebration apps to
        creating HCI-based websites and data-driven stories, I have consistently
        contributed to impactful projects using modern tech stacks like React,
        Node.js, SQL, and CI/CD pipelines.
      </p>

      <div className="internships-list">
        {internships.map((item, index) => (
          <div key={index} className="internship-card">
            <div className="internship-logo">
              <img src={item.logo} alt={item.company} />
            </div>
            <div className="internship-details">
              <h3>{item.title}</h3>
              <p className="company">
                {item.company} · {item.location}
              </p>
              <p className="date">{item.date}</p>
              {/* <p className="location">{item.location}</p> */}
              <p className="description">{item.description}</p>
              <p className="tech">
                <strong>Tech Stack:</strong> {item.techStack}
              </p>
              {/* <p className="skills">
                <strong>Skills:</strong> {item.skills}
              </p> */}
            </div>
          </div>
        ))}
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

export default InternshipsPage;
