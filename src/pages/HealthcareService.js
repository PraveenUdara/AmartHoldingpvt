// src/pages/HealthcareService.js
import React from "react";
import "../styles/HealthcareService.css";
import heroImage from "../assets/9 pages/healthservice/healthcareservice.png";

const HealthcareService = () => {
  return (
    <div className="healthservice-page">
      <section className="healthservice-hero">
        <img src={heroImage} alt="Healthcare Services" className="healthservice-hero-img" />
        <div className="healthservice-hero-content">
          <h1>Healthcare Services</h1>
          <p>
            Comprehensive healthcare solutions across pharmaceuticals, diagnostics, and medical tourism.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HealthcareService;
