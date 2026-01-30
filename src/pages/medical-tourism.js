// src/pages/medical-tourism.js

import React, { useEffect, useState } from "react";
import "../styles/tourism.css";
import Breadcrumbs from "../components/Breadcrumbs";
import tourismCover from "../assets/9 pages/medicaltcover.jpg";
import indiaImage from "../assets/9 pages/medicalt/MH.jpg";
import asterImage from "../assets/9 pages/medicalt/A-CMI.jpg";
import apolloImage from "../assets/9 pages/medicalt/appolo.webp";
import ggImage from "../assets/9 pages/medicalt/GG.webp";
import mountImage from "../assets/9 pages/medicalt/Mount-Elizabeth_novena.jpg";
import mountElizabethImage from "../assets/9 pages/medicalt/mounitel.jpg";
import parkwayImage from "../assets/9 pages/medicalt/pak-east.jpg";
import gleneaglesImage from "../assets/9 pages/medicalt/gleneagles.jpg";
import pccImage from "../assets/9 pages/medicalt/pcc.jpg";
import medicalTourismBg from "../assets/pageimage/medical tourisam.png";

const hospitalData = {
  india: [
    {
      id: "manipal",
      title: "Manipal Hospitals",
      image: indiaImage,
      reverse: false,
      description: [
        "Manipal Hospital offers 56 specialties under one roof with advanced technology and clinicians known for precise diagnostics and treatment.",
        "From robotic surgery to centers of excellence, patients from over 30 countries choose Manipal for comprehensive care and modern facilities.",
      ],
    },
    {
      id: "aster",
      title: "Aster CMI Hospital Bengaluru",
      image: asterImage,
      reverse: true,
      description: [
        "Aster CMI is a 500-bed facility delivering primary to quaternary care with excellence across cardiac sciences, neurosciences, gastroenterology, liver care, and more.",
        "Multidisciplinary teams provide integrated plans, from women's health to organ transplant and rehabilitative services.",
      ],
    },
    {
      id: "apollo",
      title: "Apollo Hospitals, Chennai",
      image: apolloImage,
      reverse: false,
      description: [
        "Apollo's flagship in Chennai spans 60+ departments led by internationally trained doctors, offering cutting-edge procedures and advanced facilities.",
        "International patients are guided by experienced staff who coordinate travel, admission, and aftercare for a seamless experience.",
      ],
    },
    {
      id: "gleneagles-india",
      title: "Gleneagles Global Hospitals",
      image: ggImage,
      reverse: true,
      description: [
        "Gleneagles Global Hospitals pioneer multi-organ transplants and advanced care in hepatology, nephrology, bariatrics, and gastroenterology.",
        "Hospitals in Mumbai, Bengaluru, Chennai, and Hyderabad pair state-of-the-art infrastructure with a commitment to clinical excellence.",
      ],
    },
  ],
  singapore: [
    {
      id: "novena",
      title: "Mount Elizabeth Novena Hospital, Singapore",
      image: mountImage,
      reverse: true,
      description: [
        "Mount Elizabeth Novena blends luxury interiors with world-class care, upholding Singapore's reputation for excellence.",
        "International patient teams advise on special needs, cost estimates, and after-visit support to keep care transparent and comfortable.",
      ],
    },
    {
      id: "mount-elizabeth",
      title: "Mount Elizabeth Hospital, Singapore",
      image: mountElizabethImage,
      reverse: false,
      description: [
        "Serving the Asia-Pacific for 30+ years, Mount Elizabeth pairs top specialists with leading technology across oncology, cardiology, and more.",
        "The hospital holds Joint Commission International accreditation, ensuring consistent quality and patient safety.",
      ],
    },
    {
      id: "parkway-east",
      title: "Parkway East Hospital, Singapore",
      image: parkwayImage,
      reverse: true,
      description: [
        "General acute care with specialties spanning OB-GYN, general and orthopaedic surgery, ENT, and ophthalmology, supported by on-site rehab and imaging.",
        "JCI accreditation reflects Parkway East's focus on clinical quality for patients and staff alike.",
      ],
    },
    {
      id: "gleneagles-sg",
      title: "Gleneagles Hospital, Singapore",
      image: gleneaglesImage,
      reverse: false,
      description: [
        "Specialist, diagnostic, and imaging services across oncology, cardiology, transplant, gastroenterology, orthopaedics, and women's health.",
        "JCI accredited since 2006, Gleneagles emphasizes patient safety and consistent outcomes.",
      ],
    },
    {
      id: "pcc",
      title: "Parkway Cancer Centre, Singapore",
      image: pccImage,
      reverse: true,
      description: [
        "Comprehensive cancer care delivered by a multidisciplinary team of doctors, nurses, counsellors, and allied professionals.",
        "Advanced therapies and supportive care ensure each visit is as effective and comfortable as possible.",
      ],
    },
  ],
};

const MedicalTourism = () => {
  const [activeCountry, setActiveCountry] = useState("india");

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("singapore")) {
        setActiveCountry("singapore");
      } else if (hash.includes("india")) {
        setActiveCountry("india");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);


  const handleTabChange = country => {
    setActiveCountry(country);
    window.location.hash = country;
  };

  return (
    <div className="tourism-page">
      <section
        className="tourism-cover"
        style={{ backgroundImage: `url(${tourismCover})` }}
      >
        <Breadcrumbs variant="hero" />
        <div className="tourism-overlay">
          <div className="tourism-cover-content">
            <h1>Medical Tourism</h1>
            <p>
              Coordinated treatment journeys with accredited hospitals across India and Singapore,
              backed by experienced patient support teams.
            </p>
          </div>
        </div>
      </section>

      <section className="tourism-content">
        <img
          src={medicalTourismBg}
          alt=""
          aria-hidden="true"
          className="tourism-bg-art"
        />
        <div className="tourism-intro">
          <h2>A Mart Holdings - Medical Tourism Division</h2>
          <p>
            A Mart Holdings - Medical Tourism Division connects patients with leading international
            healthcare providers in Singapore, Turkey, India, and Bangladesh, ensuring access to
            world-class medical care with confidence and convenience. We work closely with
            accredited hospitals, internationally qualified consultants, and highly experienced
            doctors and nursing teams who meet the highest global standards of quality and patient
            safety.
          </p>
          <p>
            From initial consultation to post-treatment care, we manage every step of the journey
            with precision and care. With a patient-first approach and end-to-end coordination, we
            make international healthcare accessible, seamless, and stress-free, ensuring peace of
            mind throughout the medical journey.
          </p>
        </div>

        <ul className="tourism-services-list">
          <li>Professional recommendations on treatment options and specialists.</li>
          <li>Appointment scheduling within 24 hours.</li>
          <li>Teleconsultation arrangements.</li>
          <li>Guidance on estimated treatment and procedure costs.</li>
          <li>Visa application and extensions.</li>
          <li>Flight, accommodation, and airport transfer arrangements.</li>
          <li>Evacuation and repatriation assistance.</li>
          <li>Post-care and recovery support.</li>
          <li>Additional services tailored to individual needs.</li>
        </ul>

        <div className="tourism-tabs">
          <button
            type="button"
            className={`tourism-tab ${activeCountry === "india" ? "active" : ""}`}
            onClick={() => handleTabChange("india")}
          >
            India
          </button>
          <button
            type="button"
            className={`tourism-tab ${activeCountry === "singapore" ? "active" : ""}`}
            onClick={() => handleTabChange("singapore")}
          >
            Singapore
          </button>
        </div>

        <div className="tourism-mobile-hospitals">
          {hospitalData[activeCountry].map(hospital => (
            <a key={hospital.id} href={`#${hospital.id}-title`} className="tourism-mobile-card">
              <div className="tourism-mobile-thumb">
                <img src={hospital.image} alt={hospital.title} loading="lazy" />
              </div>
              <div className="tourism-mobile-title">{hospital.title}</div>
            </a>
          ))}
        </div>

        <div className="tourism-tab-panel">
          {hospitalData[activeCountry].map(hospital => (
            <div
              key={hospital.id}
              id={hospital.id}
              className={`tourism-split ${hospital.reverse ? "tourism-split-reverse" : ""}`}
            >
              <div className="tourism-image">
                <img src={hospital.image} alt={hospital.title} />
              </div>
              <div className="tourism-copy">
                <h3 id={`${hospital.id}-title`}>{hospital.title}</h3>
                {hospital.description.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tourism-intro split-margin">
          <h2>Ready to plan your visit?</h2>
          <p>
            Share your reports and travel window at{" "}
            <a href="/contact">our contact page</a> and our coordinators will craft a tailored
            itinerary.
          </p>
          <div style={{ marginTop: "12px" }}>
            <a className="tourism-cta-btn" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MedicalTourism;
