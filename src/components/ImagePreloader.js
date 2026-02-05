// src/components/ImagePreloader.js
import { useEffect } from "react";

import aboutUsImg from "../assets/about_bg.jpg";
import contactCover from "../assets/contact_cover.jpg";
import eventsCover from "../assets/events_cover.jpg";
import searchCover from "../assets/9 pages/search/search.png";
import pharmaCover from "../assets/9 pages/pharmaceuticals.jpg";
import diagnosticsCover from "../assets/9 pages/diagnostics.jpg";
import tourismCover from "../assets/9 pages/medicaltcover.jpg";
import helayaCover from "../assets/9 pages/helaya paharmcey.png";
import helayaHealthMartCover from "../assets/HelayaHealthmart.png";
import diagnosticCover from "../assets/diagnostic2.jpg";
import clinicCover from "../assets/9 pages/medical/clinic.png";
import brandingCover from "../assets/9 pages/design/branding.png";
import aiHeroImg from "../assets/9 pages/Ai solution/AI_solution_hero.png";
import intlCover from "../assets/9 pages/international/international.png";
import manufactureImg from "../assets/9 pages/manufacture/manufatcure.png";
import cosmeceuticalCover from "../assets/9 pages/brand/consumetic.png";
import exfeaCover from "../assets/energy.png";
import healthcareHero from "../assets/9 pages/healthservice/healthcareservice.png";
import aiHeroMobile from "../assets/mobileimage/ai/Ai_hero.png";
import amartHoldingMobile from "../assets/mobileimage/amart holding/amrtmobilehero.png";
import brandingMobile from "../assets/mobileimage/brandinganddesign/branding.png";
import diagnosticsMobile from "../assets/mobileimage/diagnostic/diagnostics_mobile hero.png";
import exfeaMobile from "../assets/mobileimage/exfea/exfea-hero-mobile.png";
import healthcareMobile from "../assets/mobileimage/exfea/healthcare.mobile.png";
import helayaHealthMartMobile from "../assets/mobileimage/helayahealthmart/helayahealthmart.png";
import internationalMobile from "../assets/mobileimage/international/internationalmobile.png";
import manufactureMobile from "../assets/mobileimage/manufacture/manufacturemobilehero.png";
import medicalCenterMobile from "../assets/mobileimage/medical center/medical_centermobile.png";
import medicalTourismMobile from "../assets/mobileimage/medicaltourisam/medical_travel_.png";
import logoDark from "../assets/logo.png";
import logoWhite from "../assets/whiellogo.png";
import logoLight from "../assets/footerlogo.png";

const HERO_IMAGES = [
  aboutUsImg,
  contactCover,
  eventsCover,
  searchCover,
  pharmaCover,
  diagnosticsCover,
  tourismCover,
  helayaCover,
  helayaHealthMartCover,
  diagnosticCover,
  clinicCover,
  brandingCover,
  aiHeroImg,
  intlCover,
  manufactureImg,
  cosmeceuticalCover,
  exfeaCover,
  healthcareHero,
  aiHeroMobile,
  amartHoldingMobile,
  brandingMobile,
  diagnosticsMobile,
  exfeaMobile,
  healthcareMobile,
  helayaHealthMartMobile,
  internationalMobile,
  manufactureMobile,
  medicalCenterMobile,
  medicalTourismMobile,
  logoDark,
  logoWhite,
  logoLight,
];

const ImagePreloader = () => {
  useEffect(() => {
    const preload = () => {
      HERO_IMAGES.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload);
    } else {
      setTimeout(preload, 0);
    }
  }, []);

  return null;
};

export default ImagePreloader;
