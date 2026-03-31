// src/components/ImagePreloader.js
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import aboutUsImg from "../assets/mian pages/AboutUs page/about_bg.jpg";
import contactCover from "../assets/mian pages/contact us page/contact_cover.jpg";
import eventsCover from "../assets/mian pages/Event/events_cover.jpg";
import searchCover from "../assets/subpage/search/search.png";
import pharmaCover from "../assets/subpage/pharmaceuticals.jpg";
import diagnosticsCover from "../assets/subpage/diagnostics.jpg";
import tourismCover from "../assets/subpage/medicaltcover.jpg";
import helayaCover from "../assets/subpage/helaya paharmcey.png";
import helayaHealthMartCover from "../assets/HelayaHealthmart.png";
import diagnosticCover from "../assets/diagnostic2.jpg";
import clinicCover from "../assets/subpage/medical/clinic.png";
import brandingCover from "../assets/subpage/design/branding.png";
import aiHeroImg from "../assets/subpage/Ai solution/AI_solution_hero.png";
import intlCover from "../assets/subpage/international/international.png";
import manufactureImg from "../assets/subpage/manufacture/manufatcure.png";
import cosmeceuticalCover from "../assets/subpage/brand/consumetic.png";
import exfeaCover from "../assets/energy.png";
import healthcareHero from "../assets/subpage/healthservice/healthcareservice.png";
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
import homePageHeroMobile from "../assets/mian pages/homepage/60ecfeb6-a91f-467e-a752-4f7f131cf499.png";
import logoDark from "../assets/logo.png";
import logoWhite from "../assets/whiellogo.png";
import logoLight from "../assets/footerlogo.png";
import amartHomeIcon from "../assets/mian pages/homepage/A Mart Holdings Logo.png";
import homeBg640Jpg from "../assets/mian pages/homepage/home_bg-640.jpg";
import homeBg1024Jpg from "../assets/mian pages/homepage/home_bg-1024.jpg";
import homeBg1600Jpg from "../assets/mian pages/homepage/home_bg-1600.jpg";
import homeBg640Webp from "../assets/mian pages/homepage/home_bg-640.webp";
import homeBg1024Webp from "../assets/mian pages/homepage/home_bg-1024.webp";
import homeBg1600Webp from "../assets/mian pages/homepage/home_bg-1600.webp";
import doctorHero640Jpg from "../assets/mian pages/homepage/hero_diagnostics-640.jpg";
import doctorHero1024Jpg from "../assets/mian pages/homepage/hero_diagnostics-1024.jpg";
import doctorHero1536Jpg from "../assets/mian pages/homepage/hero_diagnostics-1536.jpg";
import doctorHero640Webp from "../assets/mian pages/homepage/hero_diagnostics-640.webp";
import doctorHero1024Webp from "../assets/mian pages/homepage/hero_diagnostics-1024.webp";
import doctorHero1536Webp from "../assets/mian pages/homepage/hero_diagnostics-1536.webp";
import diagnosticsHero640Jpg from "../assets/mian pages/homepage/labcv-640.jpg";
import diagnosticsHero1024Jpg from "../assets/mian pages/homepage/labcv-1024.jpg";
import diagnosticsHero1536Jpg from "../assets/mian pages/homepage/labcv-1536.jpg";
import diagnosticsHero640Webp from "../assets/mian pages/homepage/labcv-640.webp";
import diagnosticsHero1024Webp from "../assets/mian pages/homepage/labcv-1024.webp";
import diagnosticsHero1536Webp from "../assets/mian pages/homepage/labcv-1536.webp";
import techHero640Jpg from "../assets/mian pages/homepage/hero_tech_healthcare-640.jpg";
import techHero1024Jpg from "../assets/mian pages/homepage/hero_tech_healthcare-1024.jpg";
import techHero1600Jpg from "../assets/mian pages/homepage/hero_tech_healthcare-1600.jpg";
import techHero640Webp from "../assets/mian pages/homepage/hero_tech_healthcare-640.webp";
import techHero1024Webp from "../assets/mian pages/homepage/hero_tech_healthcare-1024.webp";
import techHero1600Webp from "../assets/mian pages/homepage/hero_tech_healthcare-1600.webp";
import defaultPreview from "../assets/mian pages/homepage/default.jpg";
import holdingPreview from "../assets/mian pages/homepage/AmartHoldings.png";
import aiPreview from "../assets/mian pages/homepage/Diagnostic.png";
import brandingPreview from "../assets/mian pages/homepage/branding and design.png";
import healthMartPreview from "../assets/mian pages/homepage/HealayaHealth Mart.png";
import energyPreview from "../assets/mian pages/homepage/Energey And trading.png";
import manufacturePreview from "../assets/mian pages/homepage/Manufacring.png";

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
  homePageHeroMobile,
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
  defaultPreview,
  holdingPreview,
  aiPreview,
  brandingPreview,
  healthMartPreview,
  energyPreview,
  manufacturePreview,
];

const HERO_PRELOADS_BY_ROUTE = {
  "/": {
    desktop: [homeBg1600Webp, homeBg1600Jpg],
    mobile: [homePageHeroMobile],
  },
  "/about": {
    desktop: [aboutUsImg],
  },
  "/contact": {
    desktop: [contactCover],
  },
  "/events": {
    desktop: [eventsCover],
  },
  "/search": {
    desktop: [searchCover],
  },
  "/business/pharmaceuticals": {
    desktop: [pharmaCover],
  },
  "/business/diagnostics": {
    desktop: [diagnosticsCover],
    mobile: [diagnosticsMobile],
  },
  "/business/medical-tourism": {
    desktop: [tourismCover],
    mobile: [medicalTourismMobile],
  },
  "/business/helaya-pharmacy": {
    desktop: [helayaCover],
  },
  "/business/helaya-health-mart": {
    desktop: [helayaHealthMartCover],
    mobile: [helayaHealthMartMobile],
  },
  "/business/helaya-diagnostic": {
    desktop: [diagnosticCover],
    mobile: [diagnosticsMobile],
  },
  "/business/medical-centers": {
    desktop: [clinicCover],
    mobile: [medicalCenterMobile],
  },
  "/business/branding-design": {
    desktop: [brandingCover],
    mobile: [brandingMobile],
  },
  "/business/branding-design-details": {
    desktop: [brandingCover],
    mobile: [brandingMobile],
  },
  "/business/ai-solution": {
    desktop: [aiHeroImg],
    mobile: [aiHeroMobile],
  },
  "/business/helaya-international": {
    desktop: [intlCover],
    mobile: [internationalMobile],
  },
  "/business/manufacture": {
    desktop: [manufactureImg],
    mobile: [manufactureMobile],
  },
  "/business/expia": {
    desktop: [exfeaCover],
    mobile: [exfeaMobile],
  },
  "/business/cosmeceutical": {
    desktop: [cosmeceuticalCover],
  },
  "/business/healthcare-services": {
    desktop: [healthcareHero],
    mobile: [amartHoldingMobile],
  },
};

const ImagePreloader = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const routePreloads = HERO_PRELOADS_BY_ROUTE[location.pathname];
    if (!routePreloads) return undefined;

    const head = document.head;
    const links = [];
    const addLink = (href, media) => {
      if (!href) return;
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      if (media) {
        link.media = media;
      }
      head.appendChild(link);
      links.push(link);
    };

    routePreloads.desktop?.forEach((src) => addLink(src, "(min-width: 769px)"));
    routePreloads.mobile?.forEach((src) => addLink(src, "(max-width: 768px)"));

    return () => {
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [location.pathname]);

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
