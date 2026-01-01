// src/components/BusinessButtons.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/BusinessButtons.css";
import "../index.css";

// Button icon images
import pharmaImg from "../assets/pharma.jpg";
import diagnosticsImg from "../assets/diagnostics.jpg";
import tourismImg from "../assets/tourism.jpg";
import helayaPharmacyImg from "../assets/helaya_pharmacy.webp";
import helayaInternationalImg from "../assets/helaya_international.jpg";
import brandingImg from "../assets/amart_branding.jpg";
import helayaClinicImg from "../assets/helaya_clinic.jpg";
import expiaImg from "../assets/expia.jpg";
import manufactureImg from "../assets/manufacture.jpg"; // ⭐ NEW

// Preview images
import preview1 from "../assets/businessPreview/1.jpg";
import preview2 from "../assets/businessPreview/2.jpg";
import preview3 from "../assets/businessPreview/3.jpg";
import preview4 from "../assets/businessPreview/4.jpg";
import preview5 from "../assets/businessPreview/5.jpg";
import preview6 from "../assets/businessPreview/6.jpg";
import preview7 from "../assets/businessPreview/7.jpg";
import preview8 from "../assets/businessPreview/8.jpg";
import preview9 from "../assets/businessPreview/9.jpg"; // ⭐ NEW

const BusinessButtons = ({ onHoverChange, resetPreview }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Pharmaceuticals",
      path: "/business/pharmaceuticals",
      icon: pharmaImg,
      preview: preview1,
      desc: "Provides high-quality medicines and therapeutic products.",
    },
    {
      title: "Medical Diagnostics",
      path: "/business/diagnostics",
      icon: diagnosticsImg,
      preview: preview2,
      desc: "Advanced diagnostic testing with international lab partners.",
    },
    {
      title: "Medical Tourism",
      path: "/business/medical-tourism",
      icon: tourismImg,
      preview: preview3,
      desc: "Access world-class treatment in Singapore and India.",
    },
    {
      title: "Helaya Heatlth Mart",
      path: "/business/helaya-health-mart",
      icon: helayaPharmacyImg,
      preview: preview4,
      desc: "Modern pharmacy chain with genuine medicines.",
    },
    {
      title: "Helaya International",
      path: "/business/helaya-international",
      icon: helayaInternationalImg,
      preview: preview5,
      desc: "Global sourcing, partnerships and healthcare solutions.",
    },
    {
      title: "A Mart Branding & Design",
      path: "/business/branding-design",
      icon: brandingImg,
      preview: preview6,
      desc: "Creative branding, marketing and digital design studio.",
    },
    {
      title: "Cosmeceutical",
      path: "/business/cosmeceutical",
      icon: helayaClinicImg,
      preview: preview7,
      desc: "Science-led skincare and cosmetic wellness solutions.",
    },
    {
      title: "Exfea",
      path: "/business/expia",
      icon: expiaImg,
      preview: preview8,
      desc: "Premium wellness and nutritional supplement brand.",
    },
    {
      title: "Manufacturing",
      path: "/business/manufacture",
      icon: manufactureImg,
      preview: preview9,
      desc: "Pharmaceutical and healthcare manufacturing with quality-driven processes.",
    },
  ];

  return (
    <div className="business-buttons-container">
      {items.map((btn, index) => (
        <Link
          key={btn.title}
          to={btn.path}
          className={`business-btn-card ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => {
            setActiveIndex(index);
            onHoverChange({
              title: btn.title,
              desc: btn.desc,
              preview: btn.preview,
            });
          }}
          onMouseLeave={() => {
            setActiveIndex(null);
            onHoverChange(resetPreview);
          }}
        >
          <img src={btn.icon} className="business-btn-img" alt={btn.title} width="75" height="75" />
          <div className="business-btn-overlay">
            <h3>{btn.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BusinessButtons;
