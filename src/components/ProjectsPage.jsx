// src/components/ProjectsPage.jsx
import React from "react";
import "../css/ProjectsPage.css";

const projects = [
  {
    title: "Resume Builder",
    description:
      "Tailors LaTeX resumes using AI based on job descriptions and generates cover letters instantly.",
    tech: "React, Node.js, Gemini API, LaTeX, PDFKit",
    github: "https://github.com/your-resume-builder",
    demo: "https://resume-demo.com",
  },
  {
    title: "E-Learning Platform",
    description:
      "Developed a professional client-server e-learning app with dynamic content, quizzes, and analytics.",
    tech: "React, Node.js, MongoDB, Tailwind CSS",
    github: "https://github.com/your-elearning-platform",
    demo: "https://elearning-demo.com",
  },
  {
    title: "Health Web Application",
    description:
      "Tracks patient records, schedules, and reports using secure web interfaces.",
    tech: "React, Firebase, Chart.js",
    github: "https://github.com/your-health-app",
    demo: "https://health-demo.com",
  },
  {
    title: "Budget Application",
    description:
      "Tracks income, expenses, and visualizes savings using rule-based budgeting.",
    tech: "React, Recharts, Context API",
    github: "https://github.com/your-budget-app",
    demo: "https://budget-demo.com",
  },
  {
    title: "PACMAN Project",
    description:
      "Classic Pacman clone enhanced with pathfinding AI algorithms.",
    tech: "Python, Pygame, A* Algorithm",
    github: "https://github.com/your-pacman",
    demo: "https://pacman-demo.com",
  },
  {
    title: "Clipboard Sync Tool",
    description:
      "Synchronizes clipboard data across devices using WebSockets and Electron.",
    tech: "Electron, Node.js, WebSockets",
    github: "https://github.com/your-clipboard",
    demo: "https://clipboard-demo.com",
  },
  {
    title: "Email Sorter Application",
    description:
      "Classifies job emails using NLP into Selection, Rejection, and Interview categories.",
    tech: "React, Node.js, Gmail API, NLP",
    github: "https://github.com/your-email-sorter",
    demo: "https://email-sorter-demo.com",
  },
  {
    title: "Material Donor Mutual Assist",
    description:
      "Tracks donated items and sends reminder emails to encourage donor engagement.",
    tech: "React, Node.js, Prisma, PostgreSQL",
    github: "https://github.com/your-donor-app",
    demo: "https://donor-demo.com",
  },
];

const ProjectsPage = ({ onNext, onBack }) => {
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <h2 className="projects-heading">Projects</h2>
        <p className="projects-summary">
          I've built full-stack applications ranging from AI-powered resume
          tools and budget managers to healthcare systems and educational
          platforms. Each project showcases my ability to design, develop, and
          deploy impactful tech solutions.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-entry" key={index}>
              <div className="project-title">{project.title}</div>
              <p className="project-desc">{project.description}</p>
              <p className="project-tech">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
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
    </div>
  );
};

export default ProjectsPage;
