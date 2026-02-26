// src/components/ImagePreloader.js
import { useEffect } from "react";

import logoDark from "../assets/logo.png";
import logoWhite from "../assets/whiellogo.png";
import logoLight from "../assets/footerlogo.png";
import amartHomeIcon from "../assets/Home page icon/A Mart Holdings Logo.png";

const CRITICAL_IMAGES = [
  logoDark,
  logoWhite,
  logoLight,
  amartHomeIcon,
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

    // Keep preloading minimal to avoid heavy tab freezes on low-memory devices.
    preloadCritical();
  }, []);

  return null;
};

export default ImagePreloader;
