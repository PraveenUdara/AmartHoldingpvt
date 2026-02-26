// src/components/BusinessButtons.js
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../components/BusinessButtons.css";
import "../index.css";

// New home button icons
import holdingIcon from "../assets/Home page icon/A Mart Holdings Logo.png";
import aiIcon from "../assets/diagnostics.jpg";
import brandingIcon from "../assets/Home page icon/Branding Design.png";
import energyIcon from "../assets/Home page icon/Energy & treading.png";
import helayaHealthIcon from "../assets/Home page icon/HelayaHealthMArt.png";
import manufactureIcon from "../assets/Home page icon/manufacture.png";

// Preview images (reused)
import holdingPreview from "../assets/businessPreview/AmartHoldings.png";
import aiPreview from "../assets/businessPreview/Diagnostic.png";
import brandingPreview from "../assets/businessPreview/branding and design.png";
import healthMartPreview from "../assets/businessPreview/HealayaHealth Mart.png";
import energyPreview from "../assets/businessPreview/Energey And trading.png";
import manufacturePreview from "../assets/businessPreview/Manufacring.png";

const BusinessButtons = ({ onHoverChange, resetPreview, currentPreviewData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const currentPreviewRef = useRef(currentPreviewData || null);
  const previousPreviewRef = useRef(null);

  const items = [
    {
      title: "A Mart Holdings",
      path: "/business/healthcare-services",
      icon: holdingIcon,
      preview: holdingPreview,
      desc: "Pharmaceuticals, diagnostics, and medical tourism under one group.",
      services: [
        "Pharmaceuticals",
        "Medical Tourism",
      ],
    },
    {
      title: "A Mart Diagnostic",
      path: "/business/diagnostics",
      icon: aiIcon,
      preview: aiPreview,
      desc: "Advanced testing and lab services with fast turnaround and quality assurance.",
      textTone: "blue",
      services: [
        "Advanced Lab Diagnostics",
        "Quality-Assured Testing",
      ],
    },
    {
      title: "Branding & Design + AI Solution",
      path: "/business/branding-design",
      icon: brandingIcon,
      preview: brandingPreview,
      desc: "Creative brand building and practical AI solutions in one integrated team.",
      services: [
        "Brand Identity & Design",
        "AI Workflow Automation",
      ],
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
      desc: "Helaya Biocim (Pvt) Ltd and Helaya CosmoDerma (Pvt) Ltd",
      services: [
        "Helaya Biocim (Pvt) Ltd",
        "Helaya CosmoDerma (Pvt) Ltd",
      ],
    },
  ];

  useEffect(() => {
    currentPreviewRef.current = currentPreviewData || null;
  }, [currentPreviewData]);

  return (
    <div className="business-buttons-container">
      {items.map((btn, index) => (
        <Link
          key={btn.title}
          to={btn.path}
          className={`business-btn-card ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => {
            previousPreviewRef.current = currentPreviewRef.current;
            const nextPreview = {
              title: btn.title,
              desc: btn.desc,
              preview: btn.preview,
              services: btn.services,
              textTone: btn.textTone,
            };
            currentPreviewRef.current = nextPreview;
            setActiveIndex(index);
            onHoverChange(nextPreview);
          }}
          onMouseLeave={() => {
            setActiveIndex(null);
            const restorePreview = previousPreviewRef.current;
            if (restorePreview) {
              currentPreviewRef.current = restorePreview;
              onHoverChange(restorePreview);
              return;
            }
            resetPreview();
          }}
        >
          <img src={btn.icon} className="business-btn-img" alt={btn.title} width="110" height="110" />
          <span className="business-btn-label">{btn.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default BusinessButtons;
