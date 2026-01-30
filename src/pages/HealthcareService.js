// src/pages/HealthcareService.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HealthcareService.css";
import heroImage from "../assets/9 pages/healthservice/healthcareservice.png";
import heroImageMobile from "../assets/mobileimage/exfea/healthcare.mobile.png";
import tourismImg from "../assets/9 pages/healthservice/tourisam.png";
import pharmaImg from "../assets/9 pages/healthservice/pharamacutical.png";
import diagnosticImg from "../assets/9 pages/healthservice/diagnostic.png";
import Breadcrumbs from "../components/Breadcrumbs";

const HealthcareService = () => {
  useEffect(() => {
    document.body.classList.add("nav-blacktext");
    return () => document.body.classList.remove("nav-blacktext");
  }, []);

  return (
    <div className="healthservice-page">
      <section className="healthservice-hero relative w-full bg-[#0a2540] flex items-center justify-center h-hero-mobile min-h-hero-mobile xs:h-hero-tablet xs:min-h-hero-tablet lg:h-hero-desktop lg:min-h-hero-desktop">
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet={heroImageMobile} />
          <img
            src={heroImage}
            alt="Healthcare Services"
            className="healthservice-hero-img w-full h-full max-w-full max-h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <Breadcrumbs variant="hero" />
        <div className="healthservice-hero-content">
          <h1>Healthcare Services</h1>
          <p>
            Comprehensive healthcare solutions across pharmaceuticals, diagnostics, and medical tourism.
          </p>
        </div>
      </section>

      <section className="healthservice-content">
        <div className="healthservice-content-inner">
          <h2>End-to-end care you can trust</h2>
          <p>
            A Mart Healthcare Services brings together our pharmacy network, diagnostics, and medical
            tourism partners to deliver coordinated care. We focus on access, accuracy, and compassionate
            guidance so patients and providers can make informed decisions at every step.
          </p>
        </div>
      </section>

      <section className="healthservice-icon-section">
        <div className="healthservice-icon-grid">
          <div className="healthservice-icon-card">
            <img src={pharmaImg} alt="Pharmaceuticals" />
            <div className="healthservice-icon-overlay">
              <h3>Pharmaceuticals</h3>
              <p>Reliable medicines, cold-chain compliance, and trusted pharmacists across our Helaya network.</p>
              <Link className="healthservice-icon-btn" to="/business/pharmaceuticals">
                Explore more
              </Link>
            </div>
          </div>
          <div className="healthservice-icon-card">
            <img src={diagnosticImg} alt="Diagnostics" />
            <div className="healthservice-icon-overlay">
              <h3>Diagnostics</h3>
              <p>Advanced testing and lab services with fast turnaround and quality assurance.</p>
              <Link className="healthservice-icon-btn" to="/business/diagnostics">
                Explore more
              </Link>
            </div>
          </div>
          <div className="healthservice-icon-card">
            <img src={tourismImg} alt="Medical Tourism" />
            <div className="healthservice-icon-overlay">
              <h3>Medical Tourism</h3>
              <p>Cross-border care coordination with vetted hospitals and end-to-end travel support.</p>
              <Link className="healthservice-icon-btn" to="/business/medical-tourism">
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareService;
