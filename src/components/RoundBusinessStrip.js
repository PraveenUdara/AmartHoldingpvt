import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RoundBusinessStrip.css";

import pharmaImg from "../assets/pharma.jpg";
import diagnosticsImg from "../assets/diagnostics.jpg";
import tourismImg from "../assets/tourism.jpg";
import helayaPharmacyImg from "../assets/helaya_pharmacy.webp";
import helayaInternationalImg from "../assets/helaya_international.jpg";
import brandingImg from "../assets/amart_branding.jpg";
import helayaClinicImg from "../assets/helaya_clinic.jpg";
import expiaImg from "../assets/expia.jpg";
import manufactureImg from "../assets/manufacture.jpg";

const BUSINESS_ITEMS = [
  { title: "Pharmaceuticals", path: "/business/pharmaceuticals", icon: pharmaImg },
  { title: "Diagnostics", path: "/business/diagnostics", icon: diagnosticsImg },
  { title: "Medical Tourism", path: "/business/medical-tourism", icon: tourismImg },
  { title: "Helaya Health Mart", path: "/business/helaya-health-mart", icon: helayaPharmacyImg },
  { title: "Helaya Pharmacy", path: "/business/helaya-pharmacy", icon: helayaPharmacyImg },
  { title: "Helaya Diagnostic", path: "/business/helaya-diagnostic", icon: diagnosticsImg },
  { title: "Medical Centers", path: "/business/medical-centers", icon: helayaClinicImg },
  { title: "Branding & Design", path: "/business/branding-design", icon: brandingImg },
  { title: "Helaya International", path: "/business/helaya-international", icon: helayaInternationalImg },
  { title: "Manufacture", path: "/business/manufacture", icon: manufactureImg },
  { title: "Exfea", path: "/business/expia", icon: expiaImg },
  { title: "Cosmeceutical", path: "/business/cosmeceutical", icon: helayaClinicImg },
];

const RoundBusinessStrip = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 3) % BUSINESS_ITEMS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((offset) => BUSINESS_ITEMS[(index + offset) % BUSINESS_ITEMS.length]);

  return (
    <div className="round-strip">
      <div className="round-strip-inner">
        {visible.map((item) => (
          <Link key={item.title} to={item.path} className="round-btn" aria-label={item.title}>
            <img src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoundBusinessStrip;
