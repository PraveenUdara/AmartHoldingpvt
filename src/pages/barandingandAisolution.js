import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "../styles/barandingandAisolution.css";
import brandingIcon from "../assets/9 pages/brandingandsolution/branding.png";
import aiIcon from "../assets/9 pages/brandingandsolution/Ai.png";
import heroImg from "../assets/9 pages/design/branding.png";

const BarandingAndAiSolution = () => {
  return (
    <div className="ba-page">
      <section className="ba-hero">
        <img src={heroImg} alt="Branding and AI Solutions" className="ba-hero-img" />
        <Breadcrumbs variant="hero" />
        <div className="ba-hero-overlay">
          <h1>Choose a Service</h1>
          <p>Select a business unit to continue.</p>
        </div>
      </section>

      <section className="ba-chooser">
        <div className="ba-intro">
          <h2>Creative Strategy Meets Intelligent Automation</h2>
          <p>
            Choose the service you need. Our Branding & Design team builds distinctive visual identities,
            while our AI Solution team delivers practical automation and insight tools for real workflows.
          </p>
        </div>

        <div className="ba-grid">
          <Link to="/business/branding-design-details" className="ba-card">
            <img src={brandingIcon} alt="Branding and Design" className="ba-card-img" />
            <div className="ba-card-overlay">
              <h2>Branding & Design</h2>
              <p>
                Brand identity, packaging, and visual systems that help your business stand out
                and stay consistent across every touchpoint.
              </p>
              <span className="ba-readmore">Explore more</span>
            </div>
          </Link>

          <Link to="/business/ai-solution" className="ba-card">
            <img src={aiIcon} alt="AI Solution" className="ba-card-img" />
            <div className="ba-card-overlay">
              <h2>AI Solution</h2>
              <p>
                Smart AI solutions designed to automate routine work, improve decisions, and
                deliver measurable value for teams.
              </p>
              <span className="ba-readmore">Explore more</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BarandingAndAiSolution;
