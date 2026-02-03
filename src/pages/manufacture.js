// src/pages/Manufacture.js
import React, { useEffect, useRef, useState } from "react";
import "../styles/manufacture.css";
import manufactureImg from "../assets/9 pages/manufacture/manufatcure.png";
import manufactureImgMobile from "../assets/mobileimage/manufacture/manufacturemobilehero.png";
import Breadcrumbs from "../components/Breadcrumbs";

const Manufacture = () => {
  const [activeEntity, setActiveEntity] = useState("cosmoderma");
  const switcherRef = useRef(null);

  const manufactureData = {
    cosmoderma: {
      title: "Helaya CosmoDerma Life Sciences (Pvt) Ltd",
      summary:
        "Research-driven cosmeceuticals focused on dermatology-grade skincare, haircare, and aesthetic wellness with clinical formulation standards.",
      points: [
        "In-house R&D lab specializing in sensitive-skin safe actives and stability-tested formulations.",
        "White-label and private-label programs with GMP-compliant production and batch traceability.",
        "Portfolio spans cleansers, serums, sunscreens, targeted treatments, and post-procedure care.",
      ],
    },
    biocim: {
      title: "Helaya Biocim (Pvt) Ltd",
      summary:
        "Biosimilar development and sterile manufacturing with a focus on quality, safety, and regulated market readiness.",
      points: [
        "Process development, analytical characterization, and comparability protocols for biocimilars.",
        "Aseptic filling, controlled environments, and validation aligned to stringent QA/QC standards.",
        "Technology transfer support, documentation, and stability programs for global registrations.",
      ],
    },
  };

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("helaya-biocim")) {
        setActiveEntity("biocim");
      } else if (hash.includes("helaya-cosmoderma")) {
        setActiveEntity("cosmoderma");
      }
      if (hash) {
        switcherRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <div className="manufacture-page">

      {/* HERO */}
      <section className="manufacture-hero">
        <picture className="manufacture-hero-picture">
          <source media="(max-width: 768px)" srcSet={manufactureImgMobile} />
          <img src={manufactureImg} alt="Manufacturing" />
        </picture>
        <Breadcrumbs variant="hero" />
      </section>

      {/* INTRO */}
      <section className="manufacture-intro">
        <h2>Our Manufacturing Excellence</h2>
        <p>
          At A Mart Holdings, we are redefining cosmetology and aesthetic wellness through the
          development and manufacturing of scientifically formulated, proven skincare and
          haircare products. As custodians of quality-driven formulations, we combine research,
          innovation, and industry expertise to deliver safe, effective, and results-oriented
          solutions.
        </p>
        <p>
          Our manufacturing capabilities focus on skin, hair, and aesthetic care, offering a holistic
          approach to beauty and self-care. Through strong research partnerships and advanced
          formulation practices, we develop proprietary product ranges that align with the latest
          advancements in cosmetology and dermatological science.
        </p>
        <p>
          Our product portfolio includes brands such as Vital Skin and Pure Herbs, created to
          support both professional treatments and at-home care. Each product is developed with
          strict quality controls to ensure safety, consistency, and long-lasting results.
        </p>
        <p>
          Driven by innovation and a commitment to excellence, we empower individuals to achieve
          healthy, radiant skin and hair through solutions tailored to diverse needs. Every product
          we manufacture reflects our dedication to quality, safety, and industry-leading
          standards, reinforcing our position as a trusted name in cosmetology manufacturing.
        </p>
      </section>

      {/* ENTITY SWITCHER */}
      <section className="manufacture-switcher" ref={switcherRef}>
        <div className="manufacture-tabs">
          <button
            type="button"
            className={`manufacture-tab ${activeEntity === "cosmoderma" ? "active" : ""}`}
            onClick={() => setActiveEntity("cosmoderma")}
          >
            Helaya CosmoDerma Life Sciences (Pvt) Ltd
          </button>
          <button
            type="button"
            className={`manufacture-tab ${activeEntity === "biocim" ? "active" : ""}`}
            onClick={() => setActiveEntity("biocim")}
          >
            Helaya Biocim (Pvt) Ltd
          </button>
        </div>

        <div className="manufacture-panel">
          <h3>{manufactureData[activeEntity].title}</h3>
          <p>{manufactureData[activeEntity].summary}</p>
          <ul>
            {manufactureData[activeEntity].points.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="manufacture-features">
        <div className="feature-card">
          <h3>GMP Standards</h3>
          <p>
            Our facilities operate under Good Manufacturing Practices to ensure
            product safety, consistency, and reliability.
          </p>
        </div>

        <div className="feature-card">
          <h3>Advanced Technology</h3>
          <p>
            We use modern equipment and automated processes to maintain precision
            and efficiency.
          </p>
        </div>

        <div className="feature-card">
          <h3>Quality Assurance</h3>
          <p>
            Every product undergoes rigorous testing to meet international
            healthcare standards.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Manufacture;
