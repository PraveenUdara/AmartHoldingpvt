// src/pages/helaya-pharmacy.js
import React, { useState, useEffect } from "react";
import "../styles/helayapharmacy.css";
import helayaCover from "../assets/9 pages/helaya paharmcey.png";
import helacolombo from "../assets/9 pages/helacolombo.webp";
import helkandy from "../assets/9 pages/helaya kandy.jpg";

const HelayaPharmacy = () => {
  const [activeBranch, setActiveBranch] = useState("kandy");

  // Sync tab with hash from navbar sublinks
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("kohuwala")) {
        setActiveBranch("kohuwala");
      } else if (hash.includes("kandy")) {
        setActiveBranch("kandy");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const branchContent = {
    kandy: {
      title: "Kandy Outlet",
      address: "No.10, T.B.Thennakoon Mw, Suduhunpola, Kandy",
      phone: "0812201777",
      description: [
        "Serving central Sri Lanka with a full range of prescriptions, OTC essentials, and wellness products.",
        "Ask our pharmacists for medication guidance and personalized support for you and your family.",
      ],
      image: helkandy,
      alt: "Helaya Pharmacy Kandy",
    },
    kohuwala: {
      title: "Kohuwala Outlet",
      address: "No.14/A, Sunethradevi rd, Kohuwala",
      phone: "0740102333",
      description: [
        "Supporting the Colombo suburb with quick access to prescriptions and attentive pharmacist advice.",
        "Drop in for wellness products, medication reviews, and caring service close to home.",
      ],
      image: helacolombo,
      alt: "Helaya Pharmacy Kohuwala",
    },
  };

  const current = branchContent[activeBranch];

  return (
    <div className="helaya-page">
      <section
        className="helaya-cover"
      >
        <img src={helayaCover} alt="Helaya Pharmacy" className="helaya-cover-img" />
        <div className="helaya-cover-overlay">
          <div className="helaya-cover-content">
            <h1>Helaya Pharmacy</h1>
            <p>
              Trusted pharmacy services delivering quality medicines and care.
            </p>
          </div>
        </div>
      </section>

      <section className="helaya-body">
        <div id="kandy"></div>
        <div id="kohuwala"></div>
        <h2 className="helaya-section-title">About Helaya Pharmacy</h2>
        <p>
          Helaya Health Mart Pharmacy is a trusted pharmaceutical retail chain committed to
          delivering high-quality medicines, healthcare products, and reliable patient care. With a
          growing network of conveniently located outlets, we ensure easy access to essential
          medications, wellness products, and professional healthcare advice.
        </p>
        <p>
          We go beyond dispensing medicines by placing personalized patient care at the heart of
          our services. Our qualified pharmacists provide expert guidance to support safe, effective
          medication use and informed health decisions. Backed by a streamlined and compliant
          supply chain, we maintain product authenticity, proper storage conditions, and strict
          regulatory standards.
        </p>
        <p>
          Driven by innovation and a patient-first approach, Helaya Health Mart Pharmacy
          continues to expand its reach, connecting healthcare providers with communities across
          the nation. Through both in-store services and digital platforms, we remain committed to
          enhancing healthcare accessibility, affordability, and reliability for all.
        </p>
        <div className="helaya-locations">
          <button
            className={`helaya-btn ${activeBranch === "kandy" ? "active" : ""}`}
            onClick={() => setActiveBranch("kandy")}
            type="button"
          >
            Kandy
          </button>
          <button
            className={`helaya-btn ${activeBranch === "kohuwala" ? "active" : ""}`}
            onClick={() => setActiveBranch("kohuwala")}
            type="button"
          >
            Kohuwala
          </button>
        </div>
        <div className="helaya-hours">
          <div className="hour-card">
            <div className="hour-location">Kandy</div>
          </div>
          <div className="hour-card">
            <div className="hour-location">Kohuwala</div>
          </div>
        </div>
      </section>

      <section className="branch-feature">
        <div className="branch-image" key={`${activeBranch}-image`}>
          <img src={current.image} alt={current.alt} />
        </div>
        <div className="branch-text" key={`${activeBranch}-text`}>
          <h3>{current.title}</h3>
          {current.address && <p><strong>Address:</strong> {current.address}</p>}
          {current.phone && <p><strong>Phone:</strong> {current.phone}</p>}
          {current.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelayaPharmacy;
