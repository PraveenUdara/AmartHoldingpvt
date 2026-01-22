// src/pages/AiSolution.js
import React from "react";
import "../styles/AiSolution.css";
import aiHeroImg from "../assets/9 pages/Ai solution/AI_solution_hero.png";

const AiSolution = () => {
  return (
    <div className="ai-page">
      <section className="ai-hero">
        <img
          src={aiHeroImg}
          alt="AI Solution"
          className="ai-hero-img"
          loading="eager"
          decoding="async"
        />
        <div className="ai-hero-inner">
          <p className="ai-eyebrow">A Mart Branding & Solutions</p>
          <h1>A.I Solution</h1>
          <p className="ai-hero-text">
            Practical AI tools designed to improve decision-making, automate routine work,
            and deliver measurable outcomes for teams.
          </p>
        </div>
      </section>

      <section className="ai-content">
        <div className="ai-grid">
          <div className="ai-card">
            <h2>What We Deliver</h2>
            <p>
              We build tailored AI solutions that fit real business workflows, from data
              pipelines and model deployment to dashboards and support.
            </p>
          </div>

          <div className="ai-card ai-values">
            <h2>Our Values</h2>
            <ul>
              <li>Accuracy-first modeling and clear benchmarks.</li>
              <li>Automation that reduces manual effort and errors.</li>
              <li>Insightful reporting for faster decisions.</li>
              <li>Secure handling of data and compliant processes.</li>
            </ul>
          </div>
        </div>

        <div className="ai-highlight">
          <h3>Ready to start?</h3>
          <p>
            Share your goals and data availability. We will map a quick pilot and timeline.
          </p>
          <a className="ai-cta" href="/contact">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default AiSolution;
