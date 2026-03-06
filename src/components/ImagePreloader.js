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
import amartHomeIcon from "../assets/Home page icon/A Mart Holdings Logo.png";
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

const CRITICAL_IMAGES = [
  logoDark,
  logoWhite,
  logoLight,
  amartHomeIcon,
];

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
  homeBg640Jpg,
  homeBg1024Jpg,
  homeBg1600Jpg,
  homeBg640Webp,
  homeBg1024Webp,
  homeBg1600Webp,
  doctorHero640Jpg,
  doctorHero1024Jpg,
  doctorHero1536Jpg,
  doctorHero640Webp,
  doctorHero1024Webp,
  doctorHero1536Webp,
  diagnosticsHero640Jpg,
  diagnosticsHero1024Jpg,
  diagnosticsHero1536Jpg,
  diagnosticsHero640Webp,
  diagnosticsHero1024Webp,
  diagnosticsHero1536Webp,
  techHero640Jpg,
  techHero1024Jpg,
  techHero1600Jpg,
  techHero640Webp,
  techHero1024Webp,
  techHero1600Webp,
];

const ImagePreloader = () => {
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    const preloadCritical = () => {
      CRITICAL_IMAGES.forEach(preloadImage);
    };

    const preloadDeferred = () => {
      HERO_IMAGES.forEach(preloadImage);
    };

    preloadCritical();
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preloadDeferred);
    } else {
      setTimeout(preloadDeferred, 0);
    }
  }, []);

  return null;
};

export default ImagePreloader;
