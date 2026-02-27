// src/pages/helaya-pharmacy.js
import React, { useRef, useState, useEffect } from "react";
import "../styles/helayapharmacy.css";
import Breadcrumbs from "../components/Breadcrumbs";
import helayaCover from "../assets/9 pages/helaya paharmcey.png";
import helayaLogo from "../assets/Helaya Logo.png";

const kandyBranchContext = require.context(
  "../assets/9 pages/helaya kandy",
  false,
  /\.(webp|jpg|jpeg|png)$/i
);

const kohuwalaBranchContext = require.context(
  "../assets/9 pages/helaya kohuwala",
  false,
  /\.(webp|jpg|jpeg|png)$/i
);

const kandyBranchImageKeys = kandyBranchContext.keys().sort();
const kohuwalaBranchImageKeys = kohuwalaBranchContext.keys().sort();

const HelayaPharmacy = () => {
  const [activeBranch, setActiveBranch] = useState("kandy");
  const [branchSlideDirection, setBranchSlideDirection] = useState("next");
  const [branchImageIndex, setBranchImageIndex] = useState(0);
  const branchTouchStartX = useRef(0);

  // Sync tab with hash from navbar sublinks
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("kohuwala")) {
        setActiveBranch("kohuwala");
      } else if (hash.includes("kandy")) {
        setActiveBranch("kandy");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    setBranchImageIndex(0);
    setBranchSlideDirection("next");
  }, [activeBranch]);

  const branchContent = {
    kandy: {
      title: "Kandy Outlet",
      address: "No.10, T.B.Thennakoon Mw, Suduhunpola, Kandy",
      phone: "0812201777",
      description: [
        "Serving central Sri Lanka with a full range of prescriptions, OTC essentials, and wellness products.",
        "Ask our pharmacists for medication guidance and personalized support for you and your family.",
      ],
      imageKeys: kandyBranchImageKeys,
      resolveImage: (key) => kandyBranchContext(key),
      alt: "Helaya Pharmacy Kandy",
    },
    kohuwala: {
      title: "Kohuwala Outlet",
      address: "No.14/A, Sunethradevi rd, Kohuwala",
      phone: "0740102333",
      description: [
        "Supporting the Colombo suburb with quick access to prescriptions and attentive pharmacist advice.",
        "Drop in for wellness products, medication reviews, and caring service close to home.",
      ],
      imageKeys: kohuwalaBranchImageKeys,
      resolveImage: (key) => kohuwalaBranchContext(key),
      alt: "Helaya Pharmacy Kohuwala",
    },
  };

  const current = branchContent[activeBranch];
  const currentBranchImageKeys = current.imageKeys && current.imageKeys.length > 0 ? current.imageKeys : [];
  const hasImageCarousel = currentBranchImageKeys.length > 1;
  const safeImageIndex =
    currentBranchImageKeys.length > 0
      ? Math.min(branchImageIndex, currentBranchImageKeys.length - 1)
      : 0;
  const mainImageKey = currentBranchImageKeys[safeImageIndex];
  const prevImageKey =
    hasImageCarousel
      ? currentBranchImageKeys[
        (safeImageIndex - 1 + currentBranchImageKeys.length) % currentBranchImageKeys.length
      ]
      : null;
  const nextImageKey =
    hasImageCarousel
      ? currentBranchImageKeys[(safeImageIndex + 1) % currentBranchImageKeys.length]
      : null;
  const mainImage = mainImageKey ? current.resolveImage(mainImageKey) : null;
  const prevImage = prevImageKey ? current.resolveImage(prevImageKey) : null;
  const nextImage = nextImageKey ? current.resolveImage(nextImageKey) : null;

  const goBranchImagePrev = () => {
    if (!hasImageCarousel) return;
    setBranchSlideDirection("prev");
    setBranchImageIndex((prev) =>
      prev === 0 ? currentBranchImageKeys.length - 1 : prev - 1
    );
  };

  const goBranchImageNext = () => {
    if (!hasImageCarousel) return;
    setBranchSlideDirection("next");
    setBranchImageIndex((prev) => (prev + 1) % currentBranchImageKeys.length);
  };

  const handleBranchTouchStart = (event) => {
    branchTouchStartX.current = event.changedTouches[0].clientX;
  };

  const handleBranchTouchEnd = (event) => {
    if (!hasImageCarousel) return;
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - branchTouchStartX.current;
    const threshold = 36;
    if (deltaX <= -threshold) {
      goBranchImageNext();
    } else if (deltaX >= threshold) {
      goBranchImagePrev();
    }
  };

  return (
    <div className="helaya-page">
      <section
        className="helaya-cover"
      >
        <img src={helayaCover} alt="Helaya Pharmacy" className="helaya-cover-img" />
        <Breadcrumbs variant="hero" />
        <div className="helaya-cover-overlay">
          <div className="helaya-cover-content">
            <h1>Helaya Pharmacy</h1>
            <p>
              Trusted pharmacy services delivering quality medicines and care.
            </p>
          </div>
        </div>
      </section>

      <section className="helaya-body">
        <div id="kandy"></div>
        <div id="kohuwala"></div>
        <h2 className="helaya-section-title">About Helaya Pharmacy</h2>
        <div className="helaya-brand-logo">
          <img src={helayaLogo} alt="Helaya Pharmacy Logo" />
        </div>
        <p>
          Helaya Health Mart Pharmacy is a trusted pharmaceutical retail chain committed to
          delivering high-quality medicines, healthcare products, and reliable patient care. With a
          growing network of conveniently located outlets, we ensure easy access to essential
          medications, wellness products, and professional healthcare advice.
        </p>
        <p>
          We go beyond dispensing medicines by placing personalized patient care at the heart of
          our services. Our qualified pharmacists provide expert guidance to support safe, effective
          medication use and informed health decisions. Backed by a streamlined and compliant
          supply chain, we maintain product authenticity, proper storage conditions, and strict
          regulatory standards.
        </p>
        <p>
          Driven by innovation and a patient-first approach, Helaya Health Mart Pharmacy
          continues to expand its reach, connecting healthcare providers with communities across
          the nation. Through both in-store services and digital platforms, we remain committed to
          enhancing healthcare accessibility, affordability, and reliability for all.
        </p>
        <div className="helaya-locations">
          <button
            className={`helaya-btn ${activeBranch === "kandy" ? "active" : ""}`}
            onClick={() => setActiveBranch("kandy")}
            type="button"
          >
            Kandy
          </button>
          <button
            className={`helaya-btn ${activeBranch === "kohuwala" ? "active" : ""}`}
            onClick={() => setActiveBranch("kohuwala")}
            type="button"
          >
            Kohuwala
          </button>
        </div>
      </section>

      <section className="branch-feature">
        <div className="branch-image-carousel" key={`${activeBranch}-image`}>
          {hasImageCarousel && (
            <button
              type="button"
              className="branch-image-arrow branch-image-arrow-left"
              onClick={goBranchImagePrev}
              aria-label="Previous branch image"
            >
              &lt;
            </button>
          )}

          <div
            className="branch-image-stage"
            onTouchStart={handleBranchTouchStart}
            onTouchEnd={handleBranchTouchEnd}
          >
            {hasImageCarousel && prevImage && (
              <div
                key={`branch-prev-${activeBranch}-${safeImageIndex}-${branchSlideDirection}`}
                className={`branch-image-card branch-image-card-prev ${branchSlideDirection === "next" ? "branch-image-switch-next" : "branch-image-switch-prev"}`}
                aria-hidden="true"
              >
                <img src={prevImage} alt={`${current.alt} previous`} />
              </div>
            )}

            {hasImageCarousel && nextImage && (
              <div
                key={`branch-next-${activeBranch}-${safeImageIndex}-${branchSlideDirection}`}
                className={`branch-image-card branch-image-card-next ${branchSlideDirection === "next" ? "branch-image-switch-next" : "branch-image-switch-prev"}`}
                aria-hidden="true"
              >
                <img src={nextImage} alt={`${current.alt} preview`} />
              </div>
            )}

            {mainImage && (
              <div
                key={`branch-main-${activeBranch}-${safeImageIndex}-${branchSlideDirection}`}
                className={`branch-image-card branch-image-card-main ${branchSlideDirection === "next" ? "branch-image-switch-next" : "branch-image-switch-prev"}`}
              >
                <img src={mainImage} alt={current.alt} />
              </div>
            )}
          </div>

          {hasImageCarousel && (
            <button
              type="button"
              className="branch-image-arrow branch-image-arrow-right"
              onClick={goBranchImageNext}
              aria-label="Next branch image"
            >
              &gt;
            </button>
          )}
        </div>
        <div className="branch-text" key={`${activeBranch}-text`}>
          <h3>{current.title}</h3>
          {current.address && <p><strong>Address:</strong> {current.address}</p>}
          {current.phone && <p><strong>Phone:</strong> {current.phone}</p>}
          {current.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelayaPharmacy;
