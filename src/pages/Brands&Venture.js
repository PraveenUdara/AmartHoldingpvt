// src/pages/Brands&Venture.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/BrandsVenture.css";
import coverImage from "../assets/9 pages/brand/brands_ventures.png";
import manufactureImg from "../assets/9 pages/brand/manufacture.png";
import internationalImg from "../assets/9 pages/brand/internatinal.png";
import exfeaImg from "../assets/9 pages/brand/exfea.png";
import cosmeceuticalImg from "../assets/9 pages/brand/consumetic.png";
import brandingImg from "../assets/9 pages/brand/branding.png";

const BrandsVenture = () => {
  return (
    <div className="brands-venture-page">
      <section className="brands-venture-hero">
        <img src={coverImage} alt="Brands and ventures cover" className="brands-venture-hero-img" />
        <div className="brands-venture-hero-overlay">
          <div className="brands-venture-hero-text">
            <h1>Brands & Ventures</h1>
            <p>Our portfolio of ventures built around innovation, quality, and growth.</p>
          </div>
        </div>
      </section>

      <section className="brands-venture-content">
        <h2>Growing strong brands across markets</h2>
        <p>
          We develop and scale focused ventures that deliver long-term value, from brand
          development and international trading to specialized wellness and manufacturing.
        </p>
        <div className="brands-venture-grid">
          <div className="brands-venture-card brands-venture-card-hero">
            <img src={brandingImg} alt="Branding & Design" />
            <div className="brands-venture-card-overlay branding-overlay">
              <h3>Branding & Design</h3>
              <p>Creative strategy and identity systems that help businesses stand out.</p>
              <Link className="brands-venture-btn" to="/business/branding-design">Explore more</Link>
            </div>
          </div>
          <div className="brands-venture-card">
            <img src={exfeaImg} alt="Exfea" />
            <div className="brands-venture-card-overlay">
              <h3>Exfea</h3>
              <p>Wellness-led ventures focused on modern, science-backed nutrition.</p>
              <Link className="brands-venture-btn" to="/business/expia">Explore more</Link>
            </div>
          </div>
          <div className="brands-venture-card">
            <img src={internationalImg} alt="Helaya International" />
            <div className="brands-venture-card-overlay">
              <h3>Helaya International</h3>
              <p>International sourcing and trading capabilities with UAE reach.</p>
              <Link className="brands-venture-btn" to="/business/helaya-international">Explore more</Link>
            </div>
          </div>
          <div className="brands-venture-card">
            <img src={manufactureImg} alt="Manufacture" />
            <div className="brands-venture-card-overlay">
              <h3>Manufacture</h3>
              <p>Production initiatives aimed at quality, efficiency, and scale.</p>
              <Link className="brands-venture-btn" to="/business/manufacture">Explore more</Link>
            </div>
          </div>
          <div className="brands-venture-card">
            <img src={cosmeceuticalImg} alt="Cosmeceutical" />
            <div className="brands-venture-card-overlay">
              <h3>Cosmeceutical</h3>
              <p>Dermal care lines blending skincare innovation with research.</p>
              <Link className="brands-venture-btn" to="/business/cosmeceutical">Explore more</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsVenture;
