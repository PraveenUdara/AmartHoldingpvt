// src/pages/AboutUs.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import aboutUsImg from "../assets/about_bg.jpg";
import "../styles/AboutUs.css";

import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import valuesImg from "../assets/values.jpg";
import chairmanImg from "../assets/chairman.jpg";

const AboutUs = () => {
  const sections = {
    mission: {
      key: "mission",
      label: "Our Mission",
      title: "Our Mission",
      image: missionImg,
      text: `To be a leading integrated healthcare and wellness provider, delivering innovative solutions across pharmaceuticals, diagnostics, medical tourism, cosmeceuticals, and pharmacy services, while ensuring sustainable practices in our petroleum operations.`,
    },
    vision: {
      key: "vision",
      label: "Our Vision",
      title: "Our Vision",
      image: visionImg,
      text: `To be a leading integrated healthcare and wellness provider, delivering innovative solutions across pharmaceuticals, diagnostics, medical tourism, cosmeceuticals, and pharmacy services, while ensuring sustainable practices in our petroleum operations.`,
    },
    values: {
      key: "values",
      label: "Our Ethic",
      title: "Our Ethic",
      image: valuesImg,
      text: `At A Mart Holdings, we strive to build strong, enduring relationships with our stakeholders by effectively satisfying our customer requirements and driving profitable outcomes. We confidently stand by our commitment to uphold our core ethical standards.`,
    },
  };

  const [activeKey, setActiveKey] = useState("mission");
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, transform: "translateX(0px)" });
  const tabRefs = useRef({});
  const tabsWrapRef = useRef(null);
  const tabKeys = useMemo(() => ["mission", "vision", "values"], []);
  const activeSection = sections[activeKey];

  useEffect(() => {
    const updateUnderline = () => {
      const activeTab = tabRefs.current[activeKey];
      const wrap = tabsWrapRef.current;
      if (!activeTab || !wrap) return;
      const left = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;
      setUnderlineStyle({ width, transform: `translateX(${left}px)` });
    };
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey((prevKey) => {
        const index = tabKeys.indexOf(prevKey);
        const nextIndex = (index + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [tabKeys]);

  const handlePrev = () => {
    const index = tabKeys.indexOf(activeKey);
    const nextIndex = (index - 1 + tabKeys.length) % tabKeys.length;
    setActiveKey(tabKeys[nextIndex]);
  };

  const handleNext = () => {
    const index = tabKeys.indexOf(activeKey);
    const nextIndex = (index + 1) % tabKeys.length;
    setActiveKey(tabKeys[nextIndex]);
  };

  return (
    <div className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <img src={aboutUsImg} alt="About Us" className="about-hero-bg" width="1600" height="800" />

        <div className="about-hero-overlay">
          <div className="about-hero-inner">
            <h1 className="about-hero-title fade-in-up">About A Mart Holdings</h1>
            <p className="about-hero-subtitle fade-in-up delay-1">
              Connecting Sri Lanka to world-class healthcare, diagnostics and technology.
            </p>
          </div>
        </div>
      </div>

      {/* HIGHLIGHT CARDS */}
      <div className="about-highlight">
        <div className="highlight-card fade-up">
          <span className="highlight-label">Founded</span>
          <span className="highlight-value">2018</span>
          <span className="highlight-note">Built on ambition, resilience, and innovation.</span>
        </div>
        <div className="highlight-card fade-up delay-1">
          <span className="highlight-label">Business Verticals</span>
          <span className="highlight-value">7+</span>
          <span className="highlight-note">Pharma, diagnostics, medical tourism, design and more.</span>
        </div>
        <div className="highlight-card fade-up delay-2">
          <span className="highlight-label">Global Network</span>
          <span className="highlight-value">Worldwide</span>
          <span className="highlight-note">Trusted partnerships and international certifications.</span>
        </div>
      </div>

      {/* MAIN ABOUT */}
      <section className="about-card fade-up">
        <h2 className="about-card-title">About A Mart Holdings</h2>
        <p>
          A Mart is one of Sri Lanka's fastest growing companies, built on a foundation
          of ambition, resilience, and innovation. From humble beginnings in 2018, the
          company rapidly diversified into Pharmaceuticals, Diagnostics, Medical Tourism,
          Branding & Design, Helaya Pharmacy, Helaya International (Dubai), and Power & Energy.
        </p>

        <p>
          Our strategic objective is reinforcing core strengths while exploring emerging markets.
          Guided by an energetic leadership team, A Mart consistently enters and excels in
          challenging environments, becoming one of the most respected business entities in the country.
        </p>

        <p>
          At the heart of our success is our greatest asset — our people. Loyal, committed, and
          highly skilled professionals fuel our growth with passion and expertise. Their dedication
          empowers us to stay ahead, embrace innovation, and expand into new industries with confidence.
        </p>

        <p>
          We operate with a purpose-driven mindset, leveraging technology and adaptive thinking to
          redefine standards and create impact across every sector we serve.
        </p>

        <p>
          Our commitment to quality, innovation, and customer satisfaction remains central to everything we do.
          At A Mart, we shape the future alongside our partners, employees, and community.
        </p>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="mv-modern fade-up">
        <div className="mv-tabs-modern" ref={tabsWrapRef}>
          {Object.values(sections).map((sec) => (
            <button
              key={sec.key}
              className={
                "mv-tab-modern-btn" +
                (activeKey === sec.key ? " mv-tab-modern-active" : "")
              }
              onClick={() => setActiveKey(sec.key)}
              ref={(node) => {
                tabRefs.current[sec.key] = node;
              }}
            >
              {sec.label}
            </button>
          ))}

          <div className="mv-tab-underline" style={underlineStyle}></div>
        </div>

        <div className="mv-cards-container">
          <button type="button" className="mv-side-arrow mv-side-arrow-left" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>

          <div key={activeKey} className="mv-card-image fade-up">
            <img
              src={activeSection.image}
              alt={activeSection.title}
              width="640"
              height="400"
              className="mv-modern-img"
            />
          </div>

          <div key={`${activeKey}-text`} className="mv-card-text fade-up delay-1">
            <h3 className="mv-title-modern">{activeSection.title}</h3>

            <p className="mv-modern-text">
              {activeSection.text}
            </p>
          </div>

          <button type="button" className="mv-side-arrow mv-side-arrow-right" onClick={handleNext} aria-label="Next">
            ›
          </button>
        </div>
      </section>

      {/* CHAIRMAN MESSAGE */}
      <section className="chairman-section fade-up">
        <div className="chairman-content">
          <h2 className="chairman-title">Chairman's Message</h2>
          <p className="chairman-text">
            Our journey is guided by a bold vision: to elevate Sri Lanka's healthcare landscape
            through innovation, global partnerships, and unwavering commitment to excellence.
            Together, we are shaping a healthier and more prosperous future for our nation.
          </p>
          <p className="chairman-text chairman-text-long">
            When A Mart Holdings was founded in 2018, it began with a simple belief — that meaningful businesses are built not only on ambition, but on responsibility, trust, and purpose. Watching the Group evolve from those early days into a diversified and respected conglomerate has been one of the most rewarding journeys of my professional life. Today, A Mart operates across key sectors including Pharmaceuticals, Diagnostics, Medical Tourism, Helaya Pharmacy, Helaya International Trading (UAE), and Power & Energy. Each venture reflects our commitment to quality, innovation, and long-term value creation rather than short-term success.
          </p>
          <p className="chairman-text chairman-text-long">
            What truly defines A Mart, however, is not the scale of our operations, but the people behind them. Our teams bring dedication, expertise, and resilience to everything they do. Their passion drives our ability to adapt, innovate, and move confidently through complex and competitive environments. As Chairman and Managing Director, my focus remains on building strong foundations — strengthening our core businesses, nurturing leadership, and carefully expanding into new markets with sustainable potential. We believe growth must be responsible, inclusive, and aligned with the well-being of our economy, environment, and society.
          </p>
          <p className="chairman-text chairman-text-long">
            At A Mart, business is not an end in itself. It is a platform to empower people, strengthen industries, and contribute meaningfully to the nation’s progress. With a clear vision and a committed team, we move forward with confidence, purpose, and a deep sense of responsibility for the future we are helping to shape.
          </p>
          <p className="chairman-text chairman-text-long signature">
            Anjana Athukorala<br />
            Chairman / Managing Director
          </p>
        </div>

        <div className="chairman-image-wrapper fade-up delay-1">
          <img
            src={chairmanImg}
            alt="Chairman - A Mart Holdings"
            className="chairman-image"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

