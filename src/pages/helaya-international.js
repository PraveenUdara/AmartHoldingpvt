// src/pages/helaya-international.js
import React, { useEffect } from "react";
import intlCover from "../assets/9 pages/international/international.png";
import intlCoverMobile from "../assets/mobileimage/international/internationalmobile.png";
import "../styles/helaya-international.css";
import Breadcrumbs from "../components/Breadcrumbs";

const HelayaInternational = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".intl-reveal");
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
    <div className="intl-page">
      <section className="intl-hero">
        <picture className="intl-hero-picture">
          <source media="(max-width: 768px)" srcSet={intlCoverMobile} />
          <img src={intlCover} alt="Helaya International cover" className="intl-hero-img" />
        </picture>
        <Breadcrumbs variant="hero" />
        <div className="intl-hero-overlay">
          <div className="intl-hero-text">
            <h1>Helaya International</h1>
            <p>Global sourcing and distribution with quality-first standards.</p>
          </div>
        </div>
      </section>

      <section className="intl-body intl-reveal">
        <div className="intl-text">
          <h2>Worldwide reach, trusted partners</h2>
          <p>
            Helaya International Trading, operating as Requisites Trading Co. L.L.C in Dubai, is a
            globally connected trading company specializing in the import, export, and distribution
            of high-quality products across international markets.
          </p>
          <p>
            Leveraging Dubai's strategic position as a global trade hub, we bridge manufacturers and
            consumers through efficient supply chain management, reliable logistics, and
            competitive pricing. Our operations span multiple sectors, including pharmaceuticals,
            healthcare, beauty & personal care, consumer goods, and industrial products, ensuring
            seamless trade solutions for diverse market needs.
          </p>
          <p>
            We are committed to sourcing and delivering premium-quality products that meet global
            standards of safety, compliance, and sustainability. Our experienced team ensures timely
            deliveries, transparent processes, and consistent quality across every transaction.
          </p>
          <p>
            Driven by trust, long-term partnerships, and operational excellence, Helaya International
            Trading continues to expand its global footprint. With a strong focus on innovation and
            customer satisfaction, we remain dedicated to supporting our partners and advancing
            international trade with integrity and reliability.
          </p>
          <div className="intl-tags">
            <span className="tag">Global sourcing</span>
            <span className="tag">Quality control</span>
            <span className="tag">Cold-chain</span>
            <span className="tag">Compliance</span>
          </div>
        </div>
        <div className="intl-grid">
          <div className="intl-card">
            <h3>Supply integrity</h3>
            <p>Audited suppliers, traceable batches, and strict storage protocols end-to-end.</p>
          </div>
          <div className="intl-card">
            <h3>Logistics expertise</h3>
            <p>Coordinated freight and customs support to keep timelines predictable.</p>
          </div>
          <div className="intl-card">
            <h3>Regulatory alignment</h3>
            <p>Documentation and certifications aligned with destination requirements.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelayaInternational;
