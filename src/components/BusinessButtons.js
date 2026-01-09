// src/components/BusinessButtons.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/BusinessButtons.css";
import "../index.css";

// New home button icons
import holdingIcon from "../assets/Home page icon/A Mart Holdings Logo.png";
import aiIcon from "../assets/Home page icon/Aisolution.png";
import brandingIcon from "../assets/Home page icon/Branding Design.png";
import energyIcon from "../assets/Home page icon/Energy & treading.png";
import helayaHealthIcon from "../assets/Home page icon/HelayaHealthMArt.png";
import manufactureIcon from "../assets/Home page icon/manufacture.png";

// Preview images (reused)
import defaultPreview from "../assets/businessPreview/default.jpg";
import holdingPreview from "../assets/businessPreview/AmartHoldings.png";
import aiPreview from "../assets/businessPreview/Ai solution.png";
import brandingPreview from "../assets/businessPreview/branding and design.png";
import healthMartPreview from "../assets/businessPreview/HealayaHealth Mart.png";
import energyPreview from "../assets/businessPreview/Energey And trading.png";
import manufacturePreview from "../assets/businessPreview/Manufacring.png";

const BusinessButtons = ({ onHoverChange, resetPreview }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "A Mart Holdings",
      path: "/business/healthcare-services",
      icon: holdingIcon,
      preview: holdingPreview,
      desc: "Pharmaceuticals, diagnostics, and medical tourism under one group.",
      services: [
        "Pharmaceuticals",
        "Diagnostics",
        "Medical Tourism",
      ],
    },
    {
      title: "AI Solution",
      path: "/business/ai-solution",
      icon: aiIcon,
      preview: aiPreview,
      desc: "AI Solution",
    },
    {
      title: "Branding & Design",
      path: "/business/branding-design",
      icon: brandingIcon,
      preview: brandingPreview,
      desc: "A Mart Branding & Design",
    },
    {
      title: "Helaya Health Mart",
      path: "/business/helaya-health-mart",
      icon: helayaHealthIcon,
      preview: healthMartPreview,
      desc: "Helaya Pharmacy, Helaya Diagnostic, and Medical Centers",
      services: [
        "Helaya Pharmacy",
        "Helaya Diagnostic",
        "Medical Centers",
      ],
    },
    {
      title: "Energy & Trading",
      path: "/business/helaya-international",
      icon: energyIcon,
      preview: energyPreview,
      desc: "Exfea and Helaya International",
      services: [
        "Exfea",
        "Helaya International",
      ],
    },
    {
      title: "Manufacture",
      path: "/business/manufacture",
      icon: manufactureIcon,
      preview: manufacturePreview,
      desc: "Helaya Biosim (Pvt) Ltd and Helaya CosmoDerma (Pvt) Ltd",
      services: [
        "Helaya Biosim (Pvt) Ltd",
        "Helaya CosmoDerma (Pvt) Ltd",
      ],
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
              services: btn.services,
            });
          }}
          onMouseLeave={() => {
            setActiveIndex(null);
            resetPreview();
          }}
        >
          <img src={btn.icon} className="business-btn-img" alt={btn.title} width="75" height="75" />
        </Link>
      ))}
    </div>
  );
};

export default BusinessButtons;
