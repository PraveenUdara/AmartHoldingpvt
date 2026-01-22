// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import BusinessButtons from "../components/BusinessButtons";

// HERO IMAGES (RESPONSIVE)
import homeBg640Jpg from "../assets/hero-optimized/home_bg-640.jpg";
import homeBg1024Jpg from "../assets/hero-optimized/home_bg-1024.jpg";
import homeBg1600Jpg from "../assets/hero-optimized/home_bg-1600.jpg";
import homeBg640Webp from "../assets/hero-optimized/home_bg-640.webp";
import homeBg1024Webp from "../assets/hero-optimized/home_bg-1024.webp";
import homeBg1600Webp from "../assets/hero-optimized/home_bg-1600.webp";

import doctorHero640Jpg from "../assets/hero-optimized/hero_diagnostics-640.jpg";
import doctorHero1024Jpg from "../assets/hero-optimized/hero_diagnostics-1024.jpg";
import doctorHero1536Jpg from "../assets/hero-optimized/hero_diagnostics-1536.jpg";
import doctorHero640Webp from "../assets/hero-optimized/hero_diagnostics-640.webp";
import doctorHero1024Webp from "../assets/hero-optimized/hero_diagnostics-1024.webp";
import doctorHero1536Webp from "../assets/hero-optimized/hero_diagnostics-1536.webp";

import diagnosticsHero640Jpg from "../assets/hero-optimized/labcv-640.jpg";
import diagnosticsHero1024Jpg from "../assets/hero-optimized/labcv-1024.jpg";
import diagnosticsHero1536Jpg from "../assets/hero-optimized/labcv-1536.jpg";
import diagnosticsHero640Webp from "../assets/hero-optimized/labcv-640.webp";
import diagnosticsHero1024Webp from "../assets/hero-optimized/labcv-1024.webp";
import diagnosticsHero1536Webp from "../assets/hero-optimized/labcv-1536.webp";

import techHero640Jpg from "../assets/hero-optimized/hero_tech_healthcare-640.jpg";
import techHero1024Jpg from "../assets/hero-optimized/hero_tech_healthcare-1024.jpg";
import techHero1600Jpg from "../assets/hero-optimized/hero_tech_healthcare-1600.jpg";
import techHero640Webp from "../assets/hero-optimized/hero_tech_healthcare-640.webp";
import techHero1024Webp from "../assets/hero-optimized/hero_tech_healthcare-1024.webp";
import techHero1600Webp from "../assets/hero-optimized/hero_tech_healthcare-1600.webp";

// MINI POSTS
import leftPost from "../assets/lab_bg.jpg";
import rightPost from "../assets/lab_bg2.jpg";
import doctorsImg from "../assets/doctors.png";
import partner01 from "../assets/Partners/1.png";
import partner02 from "../assets/Partners/2.png";
import partner03 from "../assets/Partners/3.png";
import partner04 from "../assets/Partners/4.png";
import partner05 from "../assets/Partners/5.png";
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
import partner19 from "../assets/Partners/19.png";
import partner20 from "../assets/Partners/20.png";
import partner21 from "../assets/Partners/21.png";
import feedbackVideo1 from "../assets/feedbackvideo/Customer Feedback.mp4";
import feedbackVideo2 from "../assets/feedbackvideo/Customer Feedback 2.mp4";

import "../styles/Home.css";

// DEFAULT PREVIEW IMAGE
import defaultPreview from "../assets/businessPreview/default.jpg";

/* ---------------------------------
   HERO SLIDES (IMAGE + TEXT)
---------------------------------- */
const HERO_SLIDES = [
  {
    imageSet: {
      webp: [
        { src: homeBg640Webp, width: 640 },
        { src: homeBg1024Webp, width: 1024 },
        { src: homeBg1600Webp, width: 1600 },
      ],
      jpg: [
        { src: homeBg640Jpg, width: 640 },
        { src: homeBg1024Jpg, width: 1024 },
        { src: homeBg1600Jpg, width: 1600 },
      ],
      fallback: homeBg1600Jpg,
      sample: homeBg640Jpg,
    },
    title: "Diagnostics",
    desc: "Advanced laboratory diagnostics with global partner labs",
  },
  {
    imageSet: {
      webp: [
        { src: doctorHero640Webp, width: 640 },
        { src: doctorHero1024Webp, width: 1024 },
        { src: doctorHero1536Webp, width: 1536 },
      ],
      jpg: [
        { src: doctorHero640Jpg, width: 640 },
        { src: doctorHero1024Jpg, width: 1024 },
        { src: doctorHero1536Jpg, width: 1536 },
      ],
      fallback: doctorHero1536Jpg,
      sample: doctorHero640Jpg,
    },
    title: "Pharmaceuticals",
    desc: "High-quality medicines and healthcare solutions",
  },
  {
    imageSet: {
      webp: [
        { src: diagnosticsHero640Webp, width: 640 },
        { src: diagnosticsHero1024Webp, width: 1024 },
        { src: diagnosticsHero1536Webp, width: 1536 },
      ],
      jpg: [
        { src: diagnosticsHero640Jpg, width: 640 },
        { src: diagnosticsHero1024Jpg, width: 1024 },
        { src: diagnosticsHero1536Jpg, width: 1536 },
      ],
      fallback: diagnosticsHero1536Jpg,
      sample: diagnosticsHero640Jpg,
    },
    title: "Medical Tourism",
    desc: "Access world-class treatment in Singapore & India",
  },
  {
    imageSet: {
      webp: [
        { src: techHero640Webp, width: 640 },
        { src: techHero1024Webp, width: 1024 },
        { src: techHero1600Webp, width: 1600 },
      ],
      jpg: [
        { src: techHero640Jpg, width: 640 },
        { src: techHero1024Jpg, width: 1024 },
        { src: techHero1600Jpg, width: 1600 },
      ],
      fallback: techHero1600Jpg,
      sample: techHero640Jpg,
    },
    title: "Clinic",
    desc: "Patient-focused clinical care with modern technology",
  },
];

const PARTNER_LOGOS = [
  partner21,
  partner16,
  partner20,
  partner14,
  partner19,
  partner01,
  partner05,
  partner04,
  partner08,
  partner07,
  partner03,
  partner09,
  partner10,
  partner11,
  partner17,
  partner12,
  partner02,
  partner13,
  partner15,
  partner18,
];

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [isHeroLight, setIsHeroLight] = useState(false);

  /* ---------------- HERO SLIDER (OPTION A) ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // match zoom duration before switching

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
  const buildSrcSet = (sources) =>
    sources.map((item) => `${item.src} ${item.width}w`).join(", ");

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = currentSlide.imageSet.sample;
    img.onload = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      const size = 64;
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;
      let total = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        total += 0.2126 * r + 0.7152 * g + 0.0722 * b;
      }
      const avg = total / (data.length / 4);
      setIsHeroLight(avg > 175);
    };
    return () => {
      cancelled = true;
    };
  }, [currentSlide.imageSet.sample]);

  useEffect(() => {
    document.body.classList.toggle("home-hero-light", isHeroLight);
    return () => {
      document.body.classList.remove("home-hero-light");
    };
  }, [isHeroLight]);

  /* ---------------- BUSINESS PREVIEW ---------------- */
  const defaultHoverData = {
    title: "Our Services",
    desc: "",
    preview: defaultPreview,
    services: [
      "A Mart Holdings",
      "AI Solution",
      "Branding & Design",
      "Helaya Health Mart",
      "Energy & Trading",
      "Manufacture",
    ],
  };

  const [hoverData, setHoverData] = useState(defaultHoverData);

  const STORIES = [
    {
      src: feedbackVideo1,
      name: "Ms. Nishanthi Ernadima Munasingha",
      label: "Customer Feedback",
    },
    {
      src: feedbackVideo2,
      name: "Mr. W.P.S.T Sadruwan",
      label: "Customer Feedback",
    },
  ];

  return (
    <div className="home">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        <div className="hero-media">
          {/* HERO IMAGES */}
          {HERO_SLIDES.map((slide, index) => (
            <picture key={index}>
              <source
                type="image/webp"
                srcSet={buildSrcSet(slide.imageSet.webp)}
                sizes="100vw"
              />
              <source
                type="image/jpeg"
                srcSet={buildSrcSet(slide.imageSet.jpg)}
                sizes="100vw"
              />
              <img
                src={slide.imageSet.fallback}
                alt={slide.title}
                width="1920"
                height="1080"
                className={`home-bg ${index === heroIndex ? "active" : ""}`}
                loading={index === heroIndex ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </picture>
          ))}
        </div>

        {/* RIGHT-BOTTOM CONTENT */}
        <div className="hero-overlay hero-overlay-right">
          <div className="hero-content hero-content-right">

            {/* MAIN BRAND MESSAGE ’'?" DO NOT REMOVE */}
            <h1 className="hero-title fade-in delay-1">
              Welcome to A Mart Holdings
            </h1>

            <p className="hero-text hero-text-strong fade-in delay-2">
              One of Sri Lanka's fastest-growing conglomerates, built on
              innovation, leadership, and trust.
            </p>

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

      {/* ================= ABOUT A MART ================= */}
      <section className="about-amart reveal">
        <div className="about-card">
          <h2>About A Mart Holdings</h2>
          <p>
            A Mart is one of Sri Lanka's fastest growing companies, established in 2018 with a strong
            focus on healthcare and innovation. Over the years, the company has successfully diversified
            into multiple sectors, building a strong presence in Pharmaceuticals, Diagnostics, Medical
            Tourism, Branding & Design, Helaya Pharmacy Chain, Helaya Health Centers, Helaya International
            Trading (UAE), Helaya Pharmaceutical, Cosmeceutical and dermatology manufacturing facilities,
            and Power & Energy Solutions.
          </p>
          <p>
            By strengthening its core businesses while exploring new opportunities and emerging markets,
            A Mart continues to expand its footprint locally and internationally. With cutting-edge
            technology, strategic foresight, and an energetic management team, we are committed to shaping
            a healthier and more prosperous future for the nation.
          </p>
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

      {/* ================= BUSINESS SECTION ================= */}
      <section className="business-section-wrapper reveal">
        <div className="business-left-content">
          <div className="business-preview-wrapper">
            <img
              src={hoverData?.preview || defaultPreview}
              alt="Preview"
              width="640"
              height="420"
              className="business-preview-image"
            />
            {(hoverData?.desc || hoverData?.services) && (
              <div className="business-preview-overlay">
                {hoverData?.title && (
                  <div className="business-preview-overlay-title">
                    {hoverData.title}
                  </div>
                )}
                {hoverData?.desc && (
                  <p className="business-preview-overlay-desc">{hoverData.desc}</p>
                )}
                {hoverData?.services && (
                  <>
                    <div className="business-preview-overlay-sub">What we do</div>
                    <ul>
                      {hoverData.services.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
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
              ‹
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
              ›
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
