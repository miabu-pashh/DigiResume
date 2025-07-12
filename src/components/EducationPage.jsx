// src/components/EducationPage.jsx
import React from "react";
import "../css/EducationPage.css";

const EducationPage = ({ onNext, onBack }) => {
  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>
      <div className="education-wrapper">
        <div className="education-card">
          <h3 className="education-title">Saint Louis University</h3>
          <p className="education-location">St. Louis, MO, USA</p>
          <p className="education-detail">Master's in Software Engineering</p>
          <p className="education-detail">GPA: 3.92 / 4.0</p>
          <p className="education-detail">Graduation : Dec 2024</p>
          <div className="education-section">
            <h4 className="section-title">Academic Journey & Excellence:</h4>
            <p className="education-description">
              Throughout my Master's program, I immersed myself in advanced
              software engineering principles, building a strong foundation in
              data structures and algorithms that became the backbone of my
              problem-solving approach. The machine learning and AI coursework
              opened new horizons, where I explored neural networks, supervised
              and unsupervised learning algorithms, natural language processing,
              and computer vision techniques. This AI specialization involved
              hands-on experience with TensorFlow, PyTorch, and scikit-learn,
              culminating in projects that leveraged predictive modeling and
              intelligent automation. I have also worked as a software developer
              intern for two non-profit organizations, where I applied my skills
              in software development, data analysis, and machine learning to
              create impactful solutions. I am passionate about leveraging
              technology to solve complex problems and drive innovation in the
              software industry.
            </p>
          </div>
          <h3 className="education-title">
            Gokaraju Rangaraju Institute of Engineering and Technology
          </h3>
          <p className="education-location">Hyderabad, India</p>
          <p className="education-detail">
            Bachelor's in Mechanical Engineering
          </p>
          <p className="education-detail">GPA: 3.62 / 4.0</p>
          <p className="education-detail">Graduation: May 2021</p>

          <div className="education-section">
            <h4 className="section-title">Academic Experience:</h4>
            <p className="education-description">
              My undergraduate journey in Mechanical Engineering provided a
              comprehensive foundation in engineering principles and practical
              applications. Through rigorous coursework in Engineering
              Mathematics, I developed strong analytical and problem-solving
              skills that enhanced my quantitative reasoning abilities. The
              Thermodynamics and Fluid Mechanics courses deepened my
              understanding of energy systems and flow dynamics, which proved
              invaluable in designing efficient mechanical systems.
              Manufacturing Processes coursework exposed me to various
              production techniques and quality control methods, while Computer
              Aided Design training equipped me with proficiency in CAD software
              for 3D modeling and simulation. Project Management studies
              instilled essential skills in planning, execution, and team
              coordination that have been crucial throughout my career.
            </p>
          </div>

          <div className="education-section">
            <h4 className="section-title">Achievements:</h4>
            <ul className="awards-list">
              <li>
                Overall National level Champions of Mega ATV championship help
                by AUTO CAR India in April 2021. Two times National level
                Champions of FAME Baja, India.
              </li>
            </ul>
          </div>
        </div>
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

export default EducationPage;
