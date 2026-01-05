// src/pages/pharma.js
import React, { useEffect } from "react";
import pharmaCover from "../assets/9 pages/pharmaceuticals.jpg";
import pharmaImage2 from "../assets/9 pages/ph2.jpg";
import "../styles/pharma.css";

const Pharmaceuticals = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pharma-page">

      <div className="pharma-hero">
        <img src={pharmaCover} alt="Pharmaceuticals" />
        <div className="pharma-hero-text">
          <h1>Pharmaceuticals</h1>
          <p>
            High-quality medicines and healthcare solutions with global partners.
          </p>
        </div>
      </div>

      <section className="pharma-info reveal">
        <div className="pharma-text">
          <h2>Pharmaceuticals</h2>
          <p>
            We specialize in the import, distribution, and retail of high-quality pharmaceutical
            products, ensuring the highest standards of safety, efficacy, and regulatory compliance at
            every stage.
          </p>

          <p>
            Our temperature-controlled supply chain preserves product integrity through advanced
            cold-chain management, real-time monitoring, and reliable backup systems. Supported
            by an efficient distribution network, we ensure timely and accurate delivery to hospitals,
            clinics, and pharmacies across the country.
          </p>

          <p>
            Through Helaya Health Mart Pharmacy, we provide convenient access to essential
            medicines, complemented by expert pharmacist guidance to support patient care.
          </p>

          <p>
            Driven by a patient-first approach, innovation, and continuous improvement, we go
            beyond product delivery to enhance healthcare accessibility and contribute positively to
            better patient outcomes and overall well-being.
          </p>

          <div className="pharma-certifications">
            <div className="cert-badge">ISO Certified</div>
            <div className="cert-badge">GMP Compliant</div>
            <div className="cert-badge">NMRA Approved</div>
          </div>

          <div className="pharma-cta">
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="pharma-image-wrap">
          <img
            src={pharmaCover}
            alt="Pharmaceutical distribution"
            className="pharma-info-image"
          />
        </div>
      </section>

      <section className="pharma-quality reveal">
        <div className="pharma-quality-image">
          <img src={pharmaImage2} alt="Quality pharmaceutical products" />
        </div>

        <div className="pharma-quality-text">
          <h3>Latest and highest quality products</h3>

          <p>
            We are committed to introducing the latest and highest quality pharmaceutical
            products to Sri Lanka, enriching the lives of people across the country.
          </p>

          <p>
            We supply premium medicines sourced globally, stored under recommended temperature
            conditions to maintain effectiveness, with proper NMRA certifications.
          </p>

          <p>
            For over two decades, our management has contributed to the healthcare industry by
            introducing high-quality and innovative pharmaceutical solutions.
          </p>

          <p>
            Health is our priority, and we ensure the highest standards in every product we offer.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Pharmaceuticals;
