// src/pages/Home.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/Home.css";
import BusinessButtons from "../components/BusinessButtons";
import Breadcrumbs from "../components/Breadcrumbs";

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
import feedbackThumbnail from "../assets/thumbnial/feedback.png";
import feedbackThumbnail2 from "../assets/thumbnial/feedback2.png";

import "../styles/Home.css";

// DEFAULT PREVIEW IMAGE
import defaultPreview from "../assets/businessPreview/default.jpg";
import holdingPreview from "../assets/businessPreview/AmartHoldings.png";
import aiPreview from "../assets/businessPreview/Diagnostic.png";
import brandingPreview from "../assets/businessPreview/branding and design.png";
import healthMartPreview from "../assets/businessPreview/HealayaHealth Mart.png";
import energyPreview from "../assets/businessPreview/Energey And trading.png";
import manufacturePreview from "../assets/businessPreview/Manufacring.png";

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
    mobilePosition: "100% 30%",
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
    mobilePosition: "center 25%",
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
    mobilePosition: "center 40%",
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
    mobilePosition: "70% 20%",
  },
];

const PARTNER_SLOTS = [
  { slot: 1, logo: partner21 }, // CIM
  { slot: 2, logo: partner16 }, // GP Pharm
  { slot: 3, logo: partner20 }, // ELBI Pharma
  { slot: 4, logo: partner14 }, // S&R
  { slot: 5, logo: partner19 }, // Sayre
  { slot: 6, logo: partner01 }, // Oncotype Dx
  { slot: 7, logo: partner02 }, // Foundation one Dx
  { slot: 8, logo: partner04 }, // Medgenome
  { slot: 9, logo: partner08 }, // Tempus
  { slot: 10, logo: partner07 }, // Oncostem
  { slot: 11, logo: partner03 }, // Centogene
  { slot: 12, logo: partner05 }, // Manipal
  { slot: 13, logo: partner09 }, // Aster
  { slot: 14, logo: partner10 }, // Singapore Hospitals
  { slot: 15, logo: partner17 }, // Rela
  { slot: 16, logo: partner12 }, // Apollo
  { slot: 17, logo: partner11 },
  { slot: 18, logo: partner13 },
  { slot: 19, logo: partner15 },
  { slot: 20, logo: partner18 },
];

const MOBILE_PREVIEW_ROTATION = [
  {
    title: "A Mart Holdings",
    preview: holdingPreview,
    desc: "Pharmaceuticals, diagnostics, and medical tourism under one group.",
    services: ["Pharmaceuticals", "Medical Tourism"],
  },
  {
    title: "A Mart Diagnostic",
    preview: aiPreview,
    desc: "Advanced testing and lab services with fast turnaround and quality assurance.",
    services: ["Advanced Lab Diagnostics", "Quality-Assured Testing"],
    textTone: "light",
  },
  {
    title: "Branding & Design + AI Solution",
    preview: brandingPreview,
    desc: "Creative brand building and practical AI solutions in one integrated team.",
    services: ["Brand Identity & Design", "AI Workflow Automation"],
  },
  {
    title: "Helaya Health Mart",
    preview: healthMartPreview,
    desc: "Helaya Pharmacy, Helaya Diagnostic, and Medical Centers",
    services: ["Helaya Pharmacy", "Helaya Diagnostic", "Medical Centers"],
  },
  {
    title: "Energy & Trading",
    preview: energyPreview,
    desc: "Exfea and Helaya International",
    services: ["Exfea", "Helaya International"],
  },
  {
    title: "Manufacture",
    preview: manufacturePreview,
    desc: "Helaya Biocim (Pvt) Ltd and Helaya CosmoDerma (Pvt) Ltd",
    services: ["Helaya Biocim (Pvt) Ltd", "Helaya CosmoDerma (Pvt) Ltd"],
  },
];

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

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

  useEffect(() => {
    document.body.classList.remove("home-hero-light");
    document.body.classList.remove("home-hero-clinic-dark-desktop");
  }, []);

  const currentSlide = HERO_SLIDES[heroIndex];
  const buildSrcSet = (sources) =>
    sources.map((item) => `${item.src} ${item.width}w`).join(", ");

  /* ---------------- BUSINESS PREVIEW ---------------- */
  const defaultHoverData = useMemo(
    () => ({
      title: "Our Services",
      desc: "",
      preview: defaultPreview,
      textTone: "dark",
      services: [
        "A Mart Holdings",
        "AI Solution",
        "Branding & Design",
        "Helaya Health Mart",
        "Energy & Trading",
        "Manufacture",
      ],
    }),
    []
  );

  const [hoverData, setHoverData] = useState(defaultHoverData);
  const [previewAnimKey, setPreviewAnimKey] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [mobilePreviewIndex, setMobilePreviewIndex] = useState(0);
  const [activePartner, setActivePartner] = useState(null);
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [isStoryHover, setIsStoryHover] = useState(false);
  const [storySlideDirection, setStorySlideDirection] = useState("next");
  const storyVideoRef = useRef(null);
  const storyTouchStartX = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateView = () => setIsMobileView(media.matches);
    updateView();
    if (media.addEventListener) {
      media.addEventListener("change", updateView);
    } else {
      media.addListener(updateView);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", updateView);
      } else {
        media.removeListener(updateView);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      setHoverData(defaultHoverData);
      return;
    }
    setHoverData(MOBILE_PREVIEW_ROTATION[mobilePreviewIndex]);
    setPreviewAnimKey((prev) => prev + 1);
  }, [defaultHoverData, isMobileView, mobilePreviewIndex]);

  useEffect(() => {
    if (!isMobileView) {
      return;
    }
    const timer = setInterval(() => {
      setMobilePreviewIndex((prev) => (prev + 1) % MOBILE_PREVIEW_ROTATION.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobileView]);

  useEffect(() => {
    setIsStoryPlaying(false);
    setIsStoryHover(false);
  }, [storyIndex]);

  const handleStoryToggle = () => {
    const video = storyVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      return;
    }
    video.pause();
  };

  const STORIES = [
    {
      src: feedbackVideo1,
      poster: feedbackThumbnail,
      name: "Ms. Nishanthi Ernadima Munasingha",
      label: "Customer Feedback",
    },
    {
      src: feedbackVideo2,
      poster: feedbackThumbnail2,
      name: "Mr. W.P.S.T Sadruwan",
      label: "Customer Feedback",
    },
  ];

  const nextStoryIndex = (storyIndex + 1) % STORIES.length;
  const prevStory = () => {
    setStorySlideDirection("prev");
    setStoryIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setStorySlideDirection("next");
    setStoryIndex((prev) => (prev + 1) % STORIES.length);
  };

  const handleStoryTouchStart = (event) => {
    storyTouchStartX.current = event.changedTouches[0].clientX;
  };

  const handleStoryTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - storyTouchStartX.current;
    const threshold = 36;
    if (deltaX <= -threshold) {
      nextStory();
    } else if (deltaX >= threshold) {
      prevStory();
    }
  };

  return (
    <div className="home">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section h-hero-mobile min-h-hero-mobile xs:h-hero-tablet xs:min-h-hero-tablet lg:h-hero-desktop lg:min-h-hero-desktop">
        <Breadcrumbs variant="hero" />

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
              style={{ "--mobile-position": slide.mobilePosition }}
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
            <div className="hero-brand-copy">
              <h1 className="hero-title fade-in delay-1">
                <span className="hero-title-line">Welcome to</span>
                <span className="hero-title-line">A Mart Holdings</span>
              </h1>

              <p className="hero-text hero-text-strong fade-in delay-2">
                One of Sri Lanka's fastest-growing healthcare and enterprise groups,
                driven by innovation, guided by integrity, and built on trust.
              </p>
            </div>

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
          <h2>A Mart Holdings</h2>
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
        
            <h1>Latest Diagnostic Services</h1>
            <p>
              We bring advanced diagnostic services to Sri Lanka through leading labs.
            </p>
          </div>
        </div>

        <div className="home-post-card">
          <img src={rightPost} alt="Technologies" width="640" height="280" className="post-img" />
          <div className="post-overlay">
            
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
              key={`${hoverData?.preview}-${previewAnimKey}`}
              src={hoverData?.preview || defaultPreview}
              alt="Preview"
              width="640"
              height="420"
              className="business-preview-image"
            />
            {(hoverData?.desc || hoverData?.services) && (
              <div
                className={`business-preview-overlay ${
                  hoverData?.textTone === "blue" ? "business-preview-overlay-blue" : ""
                }`}
              >
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
          currentPreviewData={hoverData}
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
              At A Mart, every decision is guided by one principle putting our customers first.
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
          <div className="stories-carousel">
            {!isMobileView && (
              <button
                type="button"
                className="story-side-arrow story-side-arrow-left"
                onClick={prevStory}
                aria-label="Previous story"
              >
                &lt;
              </button>
            )}

            <div className="story-stack">
              <div
                key={`next-${nextStoryIndex}-${storySlideDirection}`}
                className={`story-card story-card-next ${storySlideDirection === "next" ? "story-switch-next" : "story-switch-prev"}`}
                aria-hidden="true"
              >
                <div className="story-media">
                  <img
                    className="story-video story-video-preview"
                    src={STORIES[nextStoryIndex].poster}
                    alt={`${STORIES[nextStoryIndex].name} preview`}
                    width="1980"
                    height="1080"
                  />
                </div>
                <div className="story-meta">
                  <h3>{STORIES[nextStoryIndex].name}</h3>
                  <p>Up next</p>
                </div>
              </div>

              <div
                key={`main-${storyIndex}-${storySlideDirection}`}
                className={`story-card story-card-main ${storySlideDirection === "next" ? "story-switch-next" : "story-switch-prev"}`}
                onTouchStart={handleStoryTouchStart}
                onTouchEnd={handleStoryTouchEnd}
              >
                <div
                  className="story-media"
                  onMouseEnter={() => setIsStoryHover(true)}
                  onMouseLeave={() => setIsStoryHover(false)}
                >
                  <button
                    type="button"
                    className={`story-center-toggle ${isStoryPlaying ? "is-playing" : ""} ${!isStoryPlaying || isStoryHover ? "is-visible" : ""}`}
                    onClick={handleStoryToggle}
                    aria-label={isStoryPlaying ? "Pause feedback video" : "Play feedback video"}
                  >
                    {isStoryPlaying ? (
                      <span className="story-toggle-icon story-toggle-icon-pause" aria-hidden="true">
                        <span></span>
                        <span></span>
                      </span>
                    ) : (
                      <span className="story-toggle-icon story-toggle-icon-play" aria-hidden="true"></span>
                    )}
                  </button>
                  <video
                    key={STORIES[storyIndex].src}
                    ref={storyVideoRef}
                    className="story-video"
                    src={STORIES[storyIndex].src}
                    poster={STORIES[storyIndex].poster}
                    width="1980"
                    height="1080"
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    preload="metadata"
                    playsInline
                    onContextMenu={(e) => e.preventDefault()}
                    onPlay={() => setIsStoryPlaying(true)}
                    onPause={() => setIsStoryPlaying(false)}
                    onEnded={() => setIsStoryPlaying(false)}
                    title={`Customer Feedback featuring ${STORIES[storyIndex].name}`}
                  />
                </div>
                <div className="story-meta">
                  <h3>{STORIES[storyIndex].name}</h3>
                  <p>{STORIES[storyIndex].label}</p>
                </div>
              </div>
            </div>

            {!isMobileView && (
              <button
                type="button"
                className="story-side-arrow story-side-arrow-right"
                onClick={nextStory}
                aria-label="Next story"
              >
                &gt;
              </button>
            )}
          </div>

          {isMobileView && (
            <div className="stories-swipe-hint">Swipe right or left to view more videos</div>
          )}

          <div className="stories-light-line" aria-hidden="true"></div>
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
        <div className={`partners-grid ${activePartner !== null ? "has-active" : ""}`}>
          {PARTNER_SLOTS.map((item, index) => (
            <div
              className={`partner-card ${activePartner === index ? "is-active" : ""}`}
              key={item.slot}
              onClick={() => setActivePartner(activePartner === index ? null : index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePartner(activePartner === index ? null : index);
                }
              }}
            >
              <img
                src={item.logo}
                alt={`Partner ${item.slot}`}
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

