// src/pages/HelayaHeatlthMart.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HelayaHealthMart.css";
import helayaHealthMartCover from "../assets/HelayaHealthmart.png";
import helayaPharmacyImg from "../assets/9 pages/helacolombo.webp";
import medicalClinicImg from "../assets/clinic1.png";
import medicalDiagnosticImg from "../assets/medicaldiagnostic.png";

const HelayaHeatlthMart = () => {
  return (
    <div className="helaya-healthmart-page">
      <section className="helaya-healthmart-hero">
        <img
          src={helayaHealthMartCover}
          alt="Helaya Health Mart"
          className="helaya-healthmart-hero-img"
        />
        <div className="helaya-healthmart-hero-overlay">
          <div className="helaya-healthmart-hero-content">
            <h1>Helaya Health Mart</h1>
            <p>
              A trusted pharmacy experience with genuine products, expert advice,
              and friendly care for every family.
            </p>
          </div>
        </div>
      </section>

      <section className="helaya-healthmart-body">
        <div className="helaya-healthmart-card">
          <h2>About Helaya Health Mart</h2>
          <p>
            Helaya Health Mart delivers accessible pharmacy services with a focus on
            quality, safety, and convenience. Our team supports customers with reliable
            medicines, wellness products, and professional guidance.
          </p>
          <p>
            Under Helaya Health Mart, we unite Helaya Pharmacy, Helaya Diagnostic, and
            Medical Clinic services to offer connected care — from prescriptions and
            lab testing to primary consultations.
          </p>
          <p>
            We are committed to a patient-first approach, ensuring every visit feels
            personal, informed, and trustworthy.
          </p>
        </div>
      </section>

      <section className="helaya-healthmart-feature">
        <div className="helaya-healthmart-feature-card">
          <img src={helayaPharmacyImg} alt="Helaya Pharmacy" />
          <div className="helaya-healthmart-feature-overlay">
            <h2>Helaya Pharmacy</h2>
            <p>
              Helaya Pharmacy provides trusted access to prescriptions, wellness products,
              and pharmacist support with a focus on safe, reliable care.
            </p>
            <Link className="helaya-healthmart-btn" to="/business/helaya-pharmacy">
              Explore More <span className="helaya-healthmart-btn-arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="helaya-healthmart-feature-card">
          <img src={medicalClinicImg} alt="Medical Center" />
          <div className="helaya-healthmart-feature-overlay">
            <h2>Medical Center</h2>
            <p>
              Our medical clinics provide compassionate consultations, primary care,
              and ongoing support for your everyday health needs.
            </p>
            <Link className="helaya-healthmart-btn" to="/business/medical-centers">
              Explore More <span className="helaya-healthmart-btn-arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="helaya-healthmart-feature-card">
          <img src={medicalDiagnosticImg} alt="Helaya Diagnostic" />
          <div className="helaya-healthmart-feature-overlay">
            <h2>Helaya Diagnostic</h2>
            <p>
              Accurate, timely diagnostic services with modern labs and expert
              professionals supporting informed healthcare decisions.
            </p>
            <Link className="helaya-healthmart-btn" to="/business/helaya-diagnostic">
              Explore More <span className="helaya-healthmart-btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelayaHeatlthMart;
