// src/pages/pharma.js
import React, { useEffect } from "react";
import pharmaCover from "../assets/9 pages/pharmaceuticals.jpg";
import pharmaImage2 from "../assets/9 pages/ph2.jpg";
import gpImage from "../assets/9 pages/pharamcutical/GP.jpg";
import cimImage from "../assets/9 pages/pharamcutical/Cim.png";
import sayreImage from "../assets/9 pages/pharamcutical/sy.png";
import sayrePortfolioImage from "../assets/9 pages/pharamcutical/images.png";
import "../styles/pharma.css";
import Breadcrumbs from "../components/Breadcrumbs";

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

  const mobilePartners = [
    { id: "sayre", title: "Sayre Therapeutics", image: sayreImage },
    { id: "portfolio", title: "Therapeutic Portfolio", image: sayrePortfolioImage },
    { id: "cim", title: "CIM", image: cimImage },
    { id: "gp", title: "GP Pharm", image: gpImage },
    { id: "quality", title: "Quality Products", image: pharmaImage2 },
  ];

  return (
    <div className="pharma-page">

      <div className="pharma-hero">
        <img src={pharmaCover} alt="Pharmaceuticals" />
        <Breadcrumbs variant="hero" />
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

      <div className="pharma-mobile-list">
        {mobilePartners
          .filter((item) => item.id !== "quality")
          .map((item) => (
            <a key={item.id} href={`#${item.id}-title`} className="pharma-mobile-card">
              <div className="pharma-mobile-thumb">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="pharma-mobile-title">{item.title}</div>
            </a>
          ))}
      </div>

      <div className="pharma-break" aria-hidden="true"></div>

      <section className="pharma-partner pharma-partner-reverse reveal" id="sayre">
        <div className="pharma-partner-image">
          <img src={sayreImage} alt="Sayre Therapeutics" />
        </div>
        <div className="pharma-partner-text">
          <h3 id="sayre-title">Sayre Therapeutics</h3>
          <p>
            Sayre Therapeutics is a healthcare company founded in 2015 with a mission
            to transform patient care by bringing life-saving therapies to those who
            need them most. The company focuses on innovative pharmaceuticals, medical
            devices, and advanced diagnostics, especially in the fields of oncology
            (cancer) and immunology (immune system disorders).
          </p>
        </div>
      </section>

      <div className="pharma-break" aria-hidden="true"></div>

      <section className="pharma-partner reveal" id="portfolio">
        <div className="pharma-partner-text">
          <h3 id="portfolio-title">Therapeutic Portfolio</h3>
          <p>
            The company specialises in developing and marketing a wide range of
            pharmaceutical drugs, medical devices, and nutraceuticals (food supplements)
            across several therapeutic areas, including gynaecology, urology,
            endocrinology, and general medicine. Its mission is to provide high-quality,
            effective products that improve patient well-being and support clinical care.
          </p>
        </div>
        <div className="pharma-partner-image">
          <img src={sayrePortfolioImage} alt="Sayre Therapeutics products" />
        </div>
      </section>

      <div className="pharma-break" aria-hidden="true"></div>

      <section className="pharma-partner pharma-partner-reverse reveal" id="cim">
        <div className="pharma-partner-image">
          <img src={cimImage} alt="CIM" />
        </div>
        <div className="pharma-partner-text">
          <h3 id="cim-title">CIM</h3>
          <p>
            CIM is a Cuban public biotech research and pharmaceutical institution specializing in
            immunotherapy, cancer vaccines, monoclonal antibodies, and biologically derived
            treatments — from lab research to production and marketing.
          </p>
        </div>
      </section>

      <div className="pharma-break" aria-hidden="true"></div>

      <section className="pharma-partner reveal" id="gp">
        <div className="pharma-partner-text">
          <h3 id="gp-title">GP Pharm</h3>
          <p>
            GP Pharm is an innovative Spanish pharma company that develops sophisticated injectable
            medicines, leverages advanced delivery technologies, and operates internationally both
            through its own products and collaborative manufacturing/services.
          </p>
        </div>
        <div className="pharma-partner-image">
          <img src={gpImage} alt="GP Pharm" />
        </div>
      </section>

      <div className="pharma-break" aria-hidden="true"></div>

      <section className="pharma-quality reveal" id="quality">
        <div className="pharma-quality-image">
          <img src={pharmaImage2} alt="Quality pharmaceutical products" />
        </div>

        <div className="pharma-quality-text">
          <h3 id="quality-title">Latest and highest quality products</h3>

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
