import React from "react";
import "../css/SkillsPage.css";

const skillsTable = {
  Languages:
    "Core & Advanced Java, Python, TypeScript, JavaScript, SQL, FastAPI",
  "Methodologies & OS":
    "SDLC, Agile, Waterfall, Requirements Gathering, Linux, Windows, MacOS",
  "Frameworks & IDEs":
    "SpringBoot, Microservices, Hibernate, JPA, React.JS, Next.JS, Node.JS, Redux",
  "Web Technologies": "HTML, CSS, Bootstrap, jQuery, Ajax, JSON, XML, Electron",
  "Cloud/Application Servers":
    "AWS (VPC, EC2, S3, ELB), Azure, Tomcat, Docker, ML deployments",
  "Version Control & Tools":
    "Git, GitHub, Maven, Gradle, Jira, Jenkins, CI/CD, Webpack",
  "Databases & J2EE":
    "MySQL, PostgreSQL, MongoDB, Oracle DB (exposure), Servlets, JSP",
};

const descriptions = [
  {
    title: "Programming Languages",
    text: "I possess strong expertise in object-oriented and functional programming using Core & Advanced Java, Python, TypeScript, and JavaScript. For data handling and API development, I leverage SQL and FastAPI.",
  },
  {
    title: "Frameworks & IDEs",
    text: "My experience spans Spring Boot, Microservices, Hibernate, JPA, and modern frameworks like React.js and Next.js, often integrated using Node.js in full-stack architectures.",
  },
  {
    title: "Web Technologies",
    text: "I build responsive web interfaces with HTML, CSS, and Bootstrap, adding dynamic behavior through Ajax, JSON, and XML. I've also developed cross-platform desktop apps using Electron.",
  },
  {
    title: "Cloud & Servers",
    text: "I deploy scalable cloud-based applications on AWS and Azure, using services like EC2, S3, VPC, and ELB. I've configured Tomcat and Docker for service orchestration and ML model deployment.",
  },
  {
    title: "Tools & Version Control",
    text: "I ensure smooth development and delivery with Git, GitHub, Maven, Gradle, and CI/CD pipelines built using Jenkins and Webpack. I also track and manage projects with Jira.",
  },
  {
    title: "Databases & J2EE",
    text: "I’ve designed scalable database solutions using MySQL, PostgreSQL, and MongoDB, and worked with Java-based enterprise tools like Servlets, JSP, and Oracle DB.",
  },
];

const SkillsPage = ({ onNext, onBack }) => {
  return (
    <div className="skills-page-container">
      <div className="skills-wrapper">
        <h2 className="skills-heading">Technical Skills</h2>

        <table className="skills-table">
          <tbody>
            {Object.entries(skillsTable).map(([category, tools], index) => (
              <tr key={category}>
                <th>{category}</th>
                <td>{tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="skills-description-section">
          <ul>
            {descriptions.map((item, index) => (
              <li key={index} className="skill-desc-item">
                {item.text}
              </li>
            ))}
          </ul>
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

export default SkillsPage;
