// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import BusinessButtons from "../components/BusinessButtons";

// HERO IMAGES
import homeBg from "../assets/home_bg.jpg";
import doctorHero from "../assets/hero_diagnostics.jpg";
import diagnosticsHero from "../assets/labcv.jpg";
import techHero from "../assets/hero_tech_healthcare.jpg";

// MINI POSTS
import leftPost from "../assets/lab_bg.jpg";
import rightPost from "../assets/lab_bg2.jpg";
import doctorsImg from "../assets/doctors.png";
import partner01 from "../assets/Partners/1.png";
import partner02 from "../assets/Partners/2.png";
import partner03 from "../assets/Partners/3.png";
import partner04 from "../assets/Partners/4.png";
import partner05 from "../assets/Partners/5.png";
import partner06 from "../assets/Partners/6.png";
import partner07 from "../assets/Partners/7.png";
import partner08 from "../assets/Partners/8.png";
import partner09 from "../assets/Partners/9.png";
import partner10 from "../assets/Partners/10.png";
import partner11 from "../assets/Partners/11.png";
import partner12 from "../assets/Partners/12.png";
import partner13 from "../assets/Partners/13.png";
import partner14 from "../assets/Partners/14.png";
import partner15 from "../assets/Partners/15.png";
import partner16 from "../assets/Partners/16.png";
import partner17 from "../assets/Partners/17.jpeg";
import partner18 from "../assets/Partners/18.jpeg";

import "../styles/Home.css";

// DEFAULT PREVIEW IMAGE
import defaultPreview from "../assets/businessPreview/default.jpg";

/* ---------------------------------
   HERO SLIDES (IMAGE + TEXT)
---------------------------------- */
const HERO_SLIDES = [
  {
    image: homeBg,
    title: "Diagnostics",
    desc: "Advanced laboratory diagnostics with global partner labs",
  },
  {
    image: doctorHero,
    title: "Pharmaceuticals",
    desc: "High-quality medicines and healthcare solutions",
  },
  {
    image: diagnosticsHero,
    title: "Medical Tourism",
    desc: "Access world-class treatment in Singapore & India",
  },
  {
    image: techHero,
    title: "Clinic",
    desc: "Patient-focused clinical care with modern technology",
  },
];

const PARTNER_LOGOS = [
  partner01,
  partner02,
  partner03,
  partner04,
  partner05,
  partner06,
  partner07,
  partner08,
  partner09,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
];

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  /* ---------------- HERO SLIDER (OPTION A) ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500); // smooth timing

    return () => clearInterval(interval);
  }, []);

  // Scroll reveal for key sections
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const currentSlide = HERO_SLIDES[heroIndex];

  /* ---------------- BUSINESS PREVIEW ---------------- */
  const defaultHoverData = {
    preview: defaultPreview,
  };

  const [hoverData, setHoverData] = useState(defaultHoverData);

  const STORIES = [
    {
      src: "/feedbackvideo/Customer Feedback.mp4",
      name: "Ms. Nishanthi Ernadima Munasingha",
      label: "Customer Feedback",
    },
    {
      src: "/feedbackvideo/Customer Feedback 2.mp4",
      name: "Mr. W.P.S.T Sadruwan",
      label: "Customer Feedback",
    },
  ];

  return (
    <div className="home">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        {/* HERO IMAGES */}
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            width="1920"
            height="1080"
            className={`home-bg ${index === heroIndex ? "active" : ""}`}
          />
        ))}

        {/* RIGHT-BOTTOM CONTENT */}
        <div className="hero-overlay hero-overlay-right">
          <div className="hero-content hero-content-right">

            {/* MAIN BRAND MESSAGE ƒ?" DO NOT REMOVE */}
            <h1 className="hero-title fade-in delay-1">
              Welcome to A Mart Holdings
            </h1>

            <p className="hero-text hero-text-strong fade-in delay-2">
              One of Sri Lankaƒ?Ts fastest-growing conglomerates, built on
              innovation, leadership, and trust.
            </p>

            <a className="hero-cta fade-in delay-3" href="/contact">
              Contact Us
            </a>

            {/* SLIDE LABEL */}
            <div key={heroIndex} className="hero-slide-info">
              <h3 className="hero-slide-title">
                {currentSlide.title}
              </h3>
              <p className="hero-slide-desc">
                {currentSlide.desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MINI POSTS ================= */}
      <section className="home-post-section reveal">
        <div className="home-post-card">
          <img src={leftPost} alt="Diagnostics" width="640" height="280" className="post-img" />
          <div className="post-overlay">
            <h2>Introducing</h2>
            <h1>Latest Diagnostic Services</h1>
            <p>
              We bring advanced diagnostic services to Sri Lanka through leading labs.
            </p>
          </div>
        </div>

        <div className="home-post-card">
          <img src={rightPost} alt="Technologies" width="640" height="280" className="post-img" />
          <div className="post-overlay">
            <h2>Introducing</h2>
            <h1>Latest Technologies</h1>
            <p>
              We introduce AI-driven technologies for healthcare, retail and finance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT A MART ================= */}
      <section className="about-amart reveal">
        <div className="about-card">
          <h2>About A Mart Holdings</h2>
          <p>
            A Mart is one of Sri Lanka's fastest-growing conglomerates, evolving from humble
            beginnings in 2018 into a dynamic group with diverse operations in Pharmaceuticals,
            Diagnostics, Medical Tourism, Branding & Design, Helaya Pharmacy, International Trading
            (UAE), and Power & Energy.
          </p>
          <p>
            Driven by a bold leadership team and a highly skilled workforce, we continue to expand
            into new markets while strengthening our core businesses. Our commitment to innovation,
            quality, and service excellence has positioned A Mart as a trusted partner in Sri
            Lanka's healthcare and wellness sectors.
          </p>
          <p>
            With cutting-edge technology, strategic foresight, and a passion for progress, we remain
            dedicated to shaping a healthier and more prosperous future for the nation.
          </p>
        </div>
      </section>

      {/* ================= INSPIRING STORIES ================= */}
      <section className="stories-section reveal">
        <div className="stories-header">
          <h2>Inspiring Stories!</h2>
          <p>
            Real voices from our customers, sharing how A Mart Holdings supports their health and wellness.
          </p>
        </div>

        <div className="stories-slider">
          <div className="stories-nav">
            <button
              type="button"
              className="stories-arrow"
              onClick={() => setStoryIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1))}
              aria-label="Previous story"
            >
              ←
            </button>
            <div className="stories-indicator">
              {storyIndex + 1} / {STORIES.length}
            </div>
            <button
              type="button"
              className="stories-arrow"
              onClick={() => setStoryIndex((prev) => (prev + 1) % STORIES.length)}
              aria-label="Next story"
            >
              →
            </button>
          </div>

          <div className="story-card">
            <div className="story-media">
              <video
                key={STORIES[storyIndex].src}
                className="story-video"
                src={STORIES[storyIndex].src}
                width="1980"
                height="1080"
                controls
                preload="metadata"
                playsInline
                title={`Customer Feedback featuring ${STORIES[storyIndex].name}`}
              />
            </div>
            <div className="story-meta">
              <h3>{STORIES[storyIndex].name}</h3>
              <p>{STORIES[storyIndex].label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="home-section-divider reveal" aria-hidden="true"></div>

      {/* ================= BUSINESS SECTION ================= */}
      <section className="business-section-wrapper reveal">
        <div className="business-left-content">
          <img
  src={hoverData?.preview || defaultPreview}
  alt="Preview"
  width="640"
  height="420"
  className="business-preview-image"
/>

            
          
        </div>

        <BusinessButtons
          onHoverChange={setHoverData}
          resetPreview={() => setHoverData(defaultHoverData)}
        />
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="choose-section reveal">
        <div className="choose-content">
          <div className="choose-left">
            <h2>Why Choose Us</h2>

            <p>
              A Mart Holdings is a trusted leader across pharmaceuticals, diagnostics, cosmetics,
              medical tourism, and pharmacy services, delivering integrated healthcare and wellness
              solutions under one group.
            </p>

            <p>
              We are driven by quality, innovation, and ethical business practices, supported by
              advanced technology and strict global standards. Our diversified expertise allows us to
              offer reliable, customer-focused solutions while ensuring affordability and accessibility.
            </p>

            <p>
              At A Mart, every decision is guided by one principle -- putting our customers first.
            </p>
          </div>

          <div className="choose-image-card">
            <img src={doctorsImg} alt="Medical Team" width="600" height="400" />
          </div>
        </div>
      </section>

      {/* ================= GLOBAL PARTNERS ================= */}
      <section className="partners-section reveal">
        <div className="partners-header">
          <h2>Global Partners</h2>
          <p>Trusted collaborations powering our healthcare ecosystem.</p>
        </div>
        <div className="partners-grid">
          {PARTNER_LOGOS.map((logo, index) => (
            <div className="partner-card" key={logo}>
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="partner-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
