import React from "react";
import "../css/AchievementsPage.css";
import NithyaLogo from "/Logos/NithyaInd.jpeg";
import SAELogo from "/Logos/GRIET.jpeg";

// Dummy vehicle images — replace with actual
import Buggy1 from "/Logos/MTV.jpeg";
import Buggy3 from "/Logos/FmaeW.jpeg";
import Buggy2 from "/Logos/Mcham.jpeg";

const AchievementsPage = ({ onBack, onNext }) => {
  return (
    <div className="achievements-container">
      <h2 className="achievements-title">Achievements</h2>

      <section className="achievement-section">
        <div className="achievement-header">
          <img
            src={NithyaLogo}
            alt="Nithya Industries"
            className="achievement-logo"
          />
          <div>
            <h3 className="achievement-role">Co-Founder/ Member</h3>
            <p className="achievement-company">
              Nithya Industries (Apr 2021 – Dec 2022)
            </p>
          </div>
        </div>
        <p className="achievement-description">
          Founded and led a hardware startup specializing in industrial pipeline
          valve manufacturing. Took charge of both product design and market
          strategy. Successfully created detailed product catalogs and executed
          offline marketing campaigns that boosted our local presence. The
          experience gave deep insights into entrepreneurship, client
          communication, and brand building in a competitive industry.
        </p>
      </section>

      <hr className="divider" />

      <section className="achievement-section">
        <div className="achievement-header">
          <img src={SAELogo} alt="SAEINDIA" className="achievement-logo" />
          <div>
            <h3 className="achievement-role">Design & Transmission Co-Lead</h3>
            <p className="achievement-company">
              SAE BAJA | Team Bruiser Heads (Jan 2019 – Jul 2021)
            </p>
          </div>
        </div>

        <div className="buggy-images-row">
          <div className="buggy-image-container">
            <img src={Buggy1} alt="Buggy Side View" />
            <p className="buggy-caption">ATV Vehicle</p>
          </div>
          <div className="buggy-image-container">
            <img src={Buggy2} alt="Buggy Front View" />
            <p className="buggy-caption">MEGA ATV CHAMPIONS</p>
          </div>
          <div className="buggy-image-container">
            <img src={Buggy3} alt="Buggy During Race" />
            <p className="buggy-caption">FMAE BAJA CHAMPIONS</p>
          </div>
        </div>

        <p className="achievement-description">
          Co-led the design and transmission unit for a custom-built All Terrain
          Vehicle (ATV) in the prestigious SAE BAJA competition. Spearheaded the
          development of drivetrain systems including gearbox, axles, CVT, and
          engine mounting. From CAD design to final assembly, played a hands-on
          role in shaping a high-performance buggy.
        </p>

        <p className="achievement-description">
          Our team participated in events across India and emerged victorious at
          the national level — securing{" "}
          <strong>1st place in Cost, Acceleration, Hill Climb</strong>, and a
          proud <strong>Runner-Up Overall</strong> at FMAE BAJA 2021. We also
          bagged <strong>Champions Trophy</strong> at Mega ATV 2021 in endurance
          and dirt races. This project taught resilience, collaboration, and how
          raw engineering meets innovation.
        </p>
      </section>

      <div className="swipe-buttons no-margin">
        <button className="swipe-button" onClick={onBack}>
          ← Back
        </button>
        <button className="swipe-button" onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default AchievementsPage;
