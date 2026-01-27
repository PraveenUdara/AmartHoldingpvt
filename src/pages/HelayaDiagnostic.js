import React from "react";
import "../styles/HelayaDiagnostic.css";
import Breadcrumbs from "../components/Breadcrumbs";
import diagnosticCover from "../assets/diagnostic2.jpg";

const HelayaDiagnostic = () => {
  return (
    <div className="helaya-diagnostic-page">
      <section className="helaya-diagnostic-hero">
        <img
          src={diagnosticCover}
          alt="Helaya Diagnostics"
          className="helaya-diagnostic-hero-img"
          width="1920"
          height="1080"
        />
        <Breadcrumbs variant="hero" />
        <div className="helaya-diagnostic-hero-overlay">
          <div className="helaya-diagnostic-hero-content">
            <h1>Helaya Diagnostics</h1>
            <p>
              Trusted diagnostic services powered by advanced technology and expert care.
            </p>
          </div>
        </div>
      </section>

      <section className="helaya-diagnostic-body">
        <div className="helaya-diagnostic-card">
          <h2>Precision Diagnostics for Better Decisions</h2>
          <p>
            Helaya Diagnostics delivers accurate, timely results backed by modern laboratory
            systems and rigorous quality controls. Our services support clinicians, hospitals, and
            patients with reliable insights for early detection, treatment planning, and ongoing
            care.
          </p>
          <p>
            We focus on patient safety and clarity, providing clear reports and dependable
            turnaround times. From routine testing to specialized panels, our team is committed to
            high standards and compassionate service.
          </p>
          <p>
            Through continuous innovation and skilled professionals, Helaya Diagnostics helps
            communities access trusted healthcare diagnostics with confidence.
          </p>
          <div className="helaya-diagnostic-cta">
            <a className="helaya-diagnostic-btn" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelayaDiagnostic;
