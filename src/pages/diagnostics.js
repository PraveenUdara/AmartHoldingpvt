// src/pages/diagnostics.js
import React, { useState } from "react";
import "../styles/diagnostics.css";
import Breadcrumbs from "../components/Breadcrumbs";

// COVER IMAGE
import diagnosticsCover from "../assets/9 pages/diagnostics.jpg";
import medgenomeImg from "../assets/9 pages/diagnostic/Medgenome.webp";
import centogImg from "../assets/9 pages/diagnostic/centog.webp";
import dxImg from "../assets/9 pages/diagnostic/dx.webp";
import foundationImg from "../assets/9 pages/diagnostic/foundati.webp";
import canassistImg from "../assets/9 pages/diagnostic/wrkflow-canassist.webp";
import basecareImg from "../assets/9 pages/diagnostic/Genomic-Data.webp";
import tempusImg from "../assets/9 pages/diagnostic/Tempus.png";
import dataGeneticImg from "../assets/9 pages/diagnostic/datar genatic.webp";

const Diagnostics = () => {
  const [openSections, setOpenSections] = useState({
    oncotype: false,
    basecareSomatic: false,
    basecareHereditary: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const mobileDiagnostics = [
    { id: "medgenome", title: "Medgenome", image: medgenomeImg },
    { id: "oncotype", title: "Oncotype DX", image: dxImg },
    { id: "foundation", title: "FoundationOne CDx", image: foundationImg },
    { id: "tempus", title: "Tempus", image: tempusImg },
    { id: "data-genetic", title: "Datar Genatic", image: dataGeneticImg },
    { id: "canassist", title: "CanAssist-Breast", image: canassistImg },
    { id: "basecare", title: "4baseCare", image: basecareImg },
    { id: "centogene", title: "Centogene", image: centogImg },
  ];

  return (
    <div className="business-page">

      {/* ================= COVER SECTION ================= */}
      <section
        className="business-cover"
        style={{ backgroundImage: `url(${diagnosticsCover})` }}
      >
        <Breadcrumbs variant="hero" />
        <div className="business-cover-overlay">
          <div className="business-cover-content">
            <h1 className="business-cover-title">Diagnostics</h1>
            <p className="business-cover-desc">
              Advanced laboratory diagnostics powered by global partner labs and
              cutting-edge medical technology.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <section className="business-content">
        <h2>World-Class Diagnostic Services</h2>
        <p>
          We provide advanced diagnostic and laboratory services that deliver accurate, timely
          results to support informed healthcare decisions. Using state-of-the-art technology and
          adhering to international quality standards, we offer a comprehensive range of testing
          solutions, including Pathology, Hematology, Oncology, hereditary and rare disease
          testing, screening and carrier testing, and personalized treatment support.
        </p>
        <p>
          Our expert team is committed to precision, efficiency, and reliability, ensuring seamless
          testing experiences for hospitals, clinics, and individual patients. Every test is conducted
          with the highest level of accuracy to support clinicians in diagnosis, early detection, and
          effective treatment planning.
        </p>
        <p>
          By continuously integrating the latest advancements in diagnostic science, we contribute
          to improved health outcomes and enhanced patient care -- helping build a healthier
          community through dependable and high-quality diagnostics.
        </p>
        <div className="diagnostics-cta">
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      <div className="diagnostics-mobile-list">
        {mobileDiagnostics.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="diagnostics-mobile-card">
            <div className="diagnostics-mobile-thumb">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="diagnostics-mobile-title">{item.title}</div>
          </a>
        ))}
      </div>

      {/* ================= MEDGENOME FEATURE ================= */}
      <section className="medgenome-section" id="medgenome">
        <div className="medgenome-image">
          <img src={medgenomeImg} alt="MedGenome" />
        </div>
        <div className="medgenome-copy">
          <h3>Medgenome</h3>
          <p>
            MedGenome is a genomics and clinical data driven genetic testing and drug
            discovery research company and a leader in genetic testing with expertise
            in identifying genetic mutations using simultaneous genome sequencing and
            clinical data analysis.
          </p>
          <p>
            With the state-of-the-art Next Generation Sequencing (NGS) facility,
            MedGenome is one of the highest throughput NGS & CAP accredited lab in
            South Asia. MedGenome offers comprehensive diagnostic solutions to
            researchers, doctors and hospitals.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= ONCOTYPE DX FEATURE ================= */}
      <section className="dx-section" id="oncotype">
        <div className="dx-image">
          <img src={dxImg} alt="Oncotype DX" />
        </div>
        <div className="dx-copy">
          <h3>Oncotype DX</h3>
          <p>
            We joined hands with MediLinks to provide Oncotype DX to Sri Lankans. The Oncotype DX test is a genomic test that analyzes the activity of a group of genes that can affect how a cancer is likely to behave and respond to treatment.
          </p>
          <p>
            The Oncotype DX is used in two ways: (1) Help doctors figure out a woman's risk of early-stage, estrogen-receptor-positive breast cancer coming back (recurrence), as well as how likely she is to benefit from chemotherapy after breast cancer surgery. (2) Help doctors figure out a woman's risk of DCIS (ductal carcinoma in situ) coming back and/or the risk of a new invasive cancer developing in the same breast, as well as how likely she is to benefit from radiation therapy after DCIS surgery.
          </p>
          <p>
            Of all the breast cancer genomic tests, the Oncotype DX test has the strongest research behind it.
          </p>
          <div className="diag-accordion-wrap">
            <button
              type="button"
              className={`diag-accordion ${openSections.oncotype ? "open" : ""}`}
              onClick={() => toggleSection("oncotype")}
            >
              <span>Other Oncotype DX Tests</span>
              <span className="diag-arrow" aria-hidden="true">v</span>
            </button>
            <div className={`diag-panel ${openSections.oncotype ? "show" : ""}`}>
              <ul className="diag-list">
                <li>Oncotype DX Breast Recurrence Score Test</li>
                <li>Oncotype DX DCIS Recurrence Score Test</li>
                <li>Oncotype DX Colon Recurrence Score Test</li>
                <li>Oncotype DX Prostate Recurrence Score Test</li>
                <li>Afirma GEC</li>
              </ul>
            </div>
          </div>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= FOUNDATION ONE CDx ================= */}
      <section className="foundation-section" id="foundation">
        <div className="foundation-image">
          <img src={foundationImg} alt="FoundationOne CDx" />
          <p className="foundation-caption">
            A single test that analyzes all guideline-recommended genes in solid tumors, including companion diagnostic indications with a direct path to therapy.
            Results include MSI and TMB with the option to add PD-L1 testing to help inform immunotherapy decisions.
            Click here to learn more about FoundationOne CDx genomic test.
          </p>
        </div>
        <div className="foundation-copy">
          <h3>FoundationOne CDx</h3>
          <p>
            FoundationOne CDx is a broad companion diagnostic (CDx) that is clinically and analytically validated for solid tumors including: NSCLC, Colorectal, Breast, Ovarian, and Melanoma. The test is designed to provide physicians with clinically actionable information.
          </p>
          <p>
            To consider appropriate therapies for patients and understand results with evidence of resistance. Based on the individual genomic profile of each patient's cancer.
          </p>
          <p>
            Every test result includes microsatellite instability (MSI) and tumor mutational burden (TMB) to help inform immunotherapy decisions.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= TEMPUS ================= */}
      <section className="tempus-section" id="tempus">
        <div className="tempus-image">
          <img src={tempusImg} alt="Tempus" />
        </div>
        <div className="tempus-copy">
          <h3>Tempus</h3>
          <p>
            Tempus delivers data-driven insights that help clinicians personalize care by combining
            advanced diagnostics with real-world evidence.
          </p>
          <p>
            Our team supports tailored testing strategies that enable faster, more informed treatment
            decisions across oncology and complex care pathways.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= DATA GENETIC ================= */}
      <section className="data-genetic-section" id="data-genetic">
        <div className="data-genetic-image">
          <img src={dataGeneticImg} alt="Data Genetic" />
        </div>
        <div className="data-genetic-copy">
          <h3>Datar Genatic</h3>
          <h4>exacta</h4>
          <p>
            Every human being is different and unique, similarly every person’s cancer is unique.
            Therefore, cancer should ideally be treated with a personalised strategy. Conventional
            ‘Standard of Care’ approaches do not take into consideration the molecular-genetic
            architecture of a particular patient‘s tumour. Consequently, patients could suffer due
            to failed therapies or aggressive relapse. It is imperative that the molecular
            architecture of the tumour is studied comprehensively before deciding on the treatment
            plan. The therapy can thus be tailored to the individual patient and their disease. This
            significantly increases the likelihood of successful treatment.
          </p>
        </div>
      </section>

      {/* ================= CANASSIST BREAST ================= */}
      <section className="dx-section" id="canassist">
        <div className="dx-image">
          <img src={canassistImg} alt="CanAssist Breast" />
        </div>
        <div className="dx-copy">
          <h3>CanAssist-Breast Test</h3>
          <p>
            CanAssist-Breast test helps clinicians formulate personalized therapeutic programs for their patients. The result is precision medicine that could shorten recovery time and improve the patient's quality of life.
          </p>
          <p>
            CanAssist-Breast test provides additional information about the cancerous tumor. Along with the existing pathology report, this test result can help identify the likelihood of the cancer returning post-surgery and whether the patient is likely to benefit from adding chemotherapy to her hormone therapy.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= 4BASECARE ================= */}
      <section className="basecare-section" id="basecare">
        <div className="basecare-image">
          <img src={basecareImg} alt="4baseCare Genomic Data" />
        </div>
        <div className="basecare-copy">
          <h3>4baseCare</h3>
          <p>
            4baseCare is a precision oncology company leveraging advanced genomic technologies to provide personalized cancer care.
            4BaseCare performs the DNA and RNA sequencing to generate high-quality somatic and germline molecular data. The results empower physicians to make data-driven personalized treatment decisions.
          </p>
          <div className="basecare-dropdowns">
            <div className="basecare-block">
              <button
                type="button"
                className={`diag-accordion ${openSections.basecareSomatic ? "open" : ""}`}
                onClick={() => toggleSection("basecareSomatic")}
              >
                <span>Somatic Genomics Test</span>
                <span className="diag-arrow" aria-hidden="true">v</span>
              </button>
              <div className={`diag-panel ${openSections.basecareSomatic ? "show" : ""}`}>
                <ul className="diag-list">
                  <li>
                    4BaseCare's target portfolio tests are validated to identify somatic mutations in tumour tissue with high
                    sensitivity and specificity, detecting even low-frequency genomic alterations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="basecare-block">
              <button
                type="button"
                className={`diag-accordion ${openSections.basecareHereditary ? "open" : ""}`}
                onClick={() => toggleSection("basecareHereditary")}
              >
                <span>Hereditary Cancer Test</span>
                <span className="diag-arrow" aria-hidden="true">v</span>
              </button>
              <div className={`diag-panel ${openSections.basecareHereditary ? "show" : ""}`}>
                <ul className="diag-list">
                  <li>
                    The Hereditary Cancer Risk test (Germline+) identifies specific variations in genes known to be associated
                    with cancer.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

      {/* ================= CENTOGENE FEATURE ================= */}
      <section className="centogene-section" id="centogene">
        <div className="centogene-image">
          <img src={centogImg} alt="Centogene" />
        </div>
        <div className="centogene-copy">
          <h3>CENTOGENE</h3>
          <p>
            Centogene is one of the largest genetic biotech companies worldwide, the
            European market leader, and one of the global leaders in genetic
            diagnostic analyses of rare inherited diseases.
          </p>
          <p>
            Centogene is focused on transforming clinical, genetic, and biochemical
            data into medical solutions for patients with a global network of
            partners.
          </p>
          <p>
            Click here to learn more about Centogene's diagnostic services.
          </p>
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
      </section>

    </div>
  );
};

export default Diagnostics;

