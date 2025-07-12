import React from "react";
import "../css/ThankYouPage.css";

const ThankYouPage = ({ onBack }) => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-wrapper">
        <h1 className="thankyou-title">Thank You</h1>

        <p className="thankyou-message">
          I sincerely appreciate you taking the time to explore my digital
          resume. This journey has been a reflection of my growth, experiences,
          and the passion I bring to every project I undertake. Whether it’s
          engineering software, solving real-world problems, or building
          something from scratch, I believe in delivering meaningful impact with
          precision and creativity.
        </p>

        <p className="thankyou-message">
          If you’d like to connect, collaborate, or simply learn more about my
          work, feel free to reach out. I’m always open to exciting
          opportunities and meaningful conversations.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> mahaboobpashamohammad8@gmail.com
          </p>
          <p>
            <strong>Contact:</strong> +1(314)-305-6056
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/miabu-pashh"
              target="_blank"
              rel="noreferrer"
            >
              github.com/miabu-pashh
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/mohammad-mahaboob-pasha/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/mohammad-mahaboob-pasha
            </a>
          </p>
          <p>
            <strong>Portfolio:</strong>{" "}
            <a
              href="https://miabu-pashh.github.io/Portfolio-maibu/"
              target="_blank"
              rel="noreferrer"
            >
              maibupasha.website
            </a>
          </p>
        </div>

        <p className="closing-line">
          Looking forward to what the future holds. Let’s build something
          incredible together.
        </p>

        <div className="swipe-buttons no-margin">
          <button className="swipe-button" onClick={onBack}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
