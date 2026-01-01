// src/pages/expia.js
import React from "react";
import "../styles/Exfea.css";
import exfeaCover from "../assets/energy.png";

const Expia = () => {
  return (
    <div className="exfea-page">
      <section className="exfea-hero">
        <img src={exfeaCover} alt="Exfea" className="exfea-hero-img" />
        <div className="exfea-hero-overlay">
          <div className="exfea-hero-content">
            <h1>Exfea</h1>
            <p>
              Premium wellness and nutritional supplements designed to support
              everyday energy, vitality, and balance.
            </p>
          </div>
        </div>
      </section>

      <section className="exfea-body">
        <div className="exfea-card">
          <h2>About Exfea</h2>
          <p>
            Exfea is a wellness brand focused on scientifically backed nutrition
            for modern lifestyles. We blend quality ingredients with careful
            formulation to help customers feel their best.
          </p>
          <p>
            Our products are built around trust, safety, and consistency, with a
            commitment to delivering reliable results.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Expia;
