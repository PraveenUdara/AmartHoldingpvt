// src/pages/cosmoceutical.js
import React from "react";
import "../styles/cosmoceutical.css";
import cosmeceuticalCover from "../assets/9 pages/cosmoceutical/cosmeceutical.png";
import Breadcrumbs from "../components/Breadcrumbs";

const Cosmoceutical = () => {
  return (
    <div className="cosmoceutical-page">
      <section className="cosmoceutical-hero">
        <img
          src={cosmeceuticalCover}
          alt="Cosmeceutical"
          className="cosmoceutical-hero-img"
        />
        <Breadcrumbs variant="hero" />
        <div className="cosmoceutical-hero-overlay">
          <div className="cosmoceutical-hero-content">
            <h1>Cosmeceutical</h1>
            <p>
              Science-led skincare and cosmetic solutions designed for healthy,
              confident living.
            </p>
          </div>
        </div>
      </section>

      <section className="cosmoceutical-body">
        <div className="cosmoceutical-card">
          <h2>About Cosmeceutical</h2>
          <p>
            Our cosmeceutical portfolio blends research-backed formulations with
            trusted ingredients to support skin health, beauty, and everyday care.
          </p>
          <p>
            We focus on quality, safety, and results, delivering products that
            meet modern lifestyle needs while maintaining high clinical standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cosmoceutical;
