// ExperiencePage.jsx
import React from "react";
import "../css/ExperiencePage.css";
import metlifeLogo from "/Logos/MetlifeLogo.jpeg";
import nagarroLogo from "/Logos/Nagarro_Logo.jpg";
import nithyaLogo from "/Logos/NithyaInd.jpeg";
import adonsLogo from "/Logos/Adons.jpeg";

const ExperiencePage = ({ onNext, onBack }) => {
  const experiences = [
    {
      logo: metlifeLogo,
      title: "Software Engineer",
      company: "MetLife · Contract",
      duration: "Jul 2024 – Mar 2025 · 9 mos",
      location: "United States · On-site",
      bullets: [
        "Orchestrated Agile methodologies across multiple teams, enhancing project velocity by 25% and minimizing sprint cycle times.",
        "Architected and deployed high-availability backend systems using Core Java, Spring Boot, and Microservices, leading to a 35% increase in transaction processing speeds.",
        "Engineered cross-browser compatible front-end interfaces using React.js, Angular, HTML, CSS, and JavaScript; optimized AWS application deployments, slashing infrastructure costs by 22%.",
      ],
      skills: [
        "Advanced Java",
        "JDBC",
        "SQL",
        "React.js",
        "Software Infrastructure",
        "Java Development",
        "Front-End Development",
      ],
    },
    {
      logo: nagarroLogo,
      title: "Java Software Engineer",
      company: "Nagarro · Full-time",
      duration: "Aug 2021 – Dec 2022 · 1 yr 5 mos",
      location: "Gurugram, Haryana, India · Remote",
      bullets: [
        "Implemented REST APIs for seamless communication between front-end (React) and back-end (Java) for BFSI client chat app.",
        "Utilized Mendix with Java for backend enhancements and rapid prototyping, reducing dev time by 80%.",
        "Led a team of 4 to develop eCommerce & dynamic apps using Spring Boot & Mendix, improving user engagement by 60%.",
      ],
      skills: [
        "Java Development",
        "Front-End Development",
        "Software Infrastructure",
        "Engineering",
      ],
    },
    // {
    //   logo: nithyaLogo,
    //   title: "Member",
    //   company: "Nithya Industries · Self-employed",
    //   duration: "Apr 2021 – Dec 2022 · 1 yr 9 mos",
    //   location: "Hyderabad, Telangana, India · Hybrid",
    //   bullets: [
    //     "Designed and marketed pipeline valves as a design and marketing coordinator.",
    //     "Developed catalogs and drove offline marketing strategies to grow client base.",
    //   ],
    //   skills: ["Project Management", "Time Management"],
    // },
    {
      logo: adonsLogo,
      title: "Software Engineer",
      company: "Adons Softech · Full-time",
      duration: "Jan 2020 – Aug 2021 · 1 yr 8 mos",
      location: "Hyderabad, Telangana, India · On-site",
      bullets: [
        "Led waterfall project workflows ensuring 100% on-time delivery with clear phase gates.",
        "Improved backend performance by 45% using Core Java, Servlets, JSP, and JDBC.",
        "Enhanced UI & reduced bounce rates by 20% using HTML, CSS, JS. Improved DB performance via MongoDB tuning.",
      ],
      skills: ["Software Development", "Advanced Java", "JDBC"],
    },
  ];

  return (
    <div className="experience-page-container">
      <h2 className="experience-heading">Professional Experience</h2>

      <ul className="experience-summary">
        <p>
          Software Engineer with 4+ years of experience in Banking, HealthCare,
          and eCommerce sectors, specializing in Java Full Stack Development
          with React/Angular, Spring Boot, Microservices, and AWS
          deployments.Well-versed in Java/J2EE technologies, including JDBC,
          JavaBeans, JSON, RESTful APIs, Servlets, Spring Boot, Hibernate,
          Spring MVC, Microservices and JSF for building efficient backend
          solutions.
        </p>
      </ul>

      {experiences.map((exp, idx) => (
        <div className="experience-card" key={idx}>
          <div className="experience-header">
            <img src={exp.logo} alt="logo" className="experience-logo" />
            <div className="experience-details">
              <h3 className="experience-title">{exp.title}</h3>

              <p className="experience-company">{exp.company}</p>

              <p className="experience-duration">
                {exp.duration} {exp.location}
              </p>
              {/* <p className="experience-location">{exp.location}</p> */}
            </div>
          </div>
          <ul className="experience-bullets">
            {exp.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="experience-skills">
            <strong>Skills:</strong> {exp.skills.join(" · ")}
          </p>
        </div>
      ))}

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

export default ExperiencePage;
