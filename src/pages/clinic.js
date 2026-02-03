// src/pages/clinic.js
import React, { useEffect } from "react";
import clinicCover from "../assets/9 pages/medical/clinic.png";
import clinicCoverMobile from "../assets/mobileimage/medical center/medical_centermobile.png";
import "../styles/clinic.css";
import Breadcrumbs from "../components/Breadcrumbs";

const MedicalCenters = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".clinic-reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="clinic-page">
      <section className="clinic-hero">
        <picture>
          <source media="(max-width: 768px)" srcSet={clinicCoverMobile} />
          <img src={clinicCover} alt="Medical center cover" className="clinic-hero-img" />
        </picture>
        <Breadcrumbs variant="hero" />
        <div className="clinic-hero-overlay">
          <div className="clinic-hero-text">
            <h1>Medical Centers</h1>
            <p>Care-first clinics combining trusted physicians, diagnostics, and pharmacy access.</p>
          </div>
        </div>
      </section>

      <section className="clinic-overview clinic-reveal">
        <div className="clinic-overview-text">
          <h2>Integrated care, closer to home</h2>
          <p>
            Our medical centers bring together outpatient care, labs, and pharmacy support so every
            visit feels coordinated and clear.
          </p>
          <div className="clinic-tags">
            <span className="tag">Outpatient care</span>
            <span className="tag">Diagnostics</span>
            <span className="tag">Pharmacy access</span>
            <span className="tag">Follow-up plans</span>
          </div>
        </div>
        <div className="clinic-points">
          <div className="point-card">
            <h3>Experienced clinicians</h3>
            <p>Doctors and nurses focused on evidence-based care and clear communication.</p>
          </div>
          <div className="point-card">
            <h3>Connected services</h3>
            <p>On-site diagnostics and pharmacy support for smooth, end-to-end visits.</p>
          </div>
          <div className="point-card">
            <h3>Comfortable settings</h3>
            <p>Welcoming spaces designed to keep patients relaxed and informed.</p>
          </div>
        </div>
      </section>

      <section className="clinic-cta clinic-reveal">
        <div className="clinic-cta-card">
          <div>
            <h3>Need to book a visit?</h3>
            <p>Reach out to schedule an appointment or ask about our services.</p>
          </div>
          <a className="clinic-cta-button" href="/contact">Contact us</a>
        </div>
      </section>
    </div>
  );
};

export default MedicalCenters;
