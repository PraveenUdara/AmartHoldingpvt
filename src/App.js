// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ImagePreloader from "./components/ImagePreloader";

// Main Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Search from "./pages/search";

// Business Pages
import Pharmaceuticals from "./pages/pharma";
import Diagnostics from "./pages/diagnostics";
import MedicalTourism from "./pages/medical-tourism";
import HelayaPharmacy from "./pages/helaya-pharmacy";
import HelayaHeatlthMart from "./pages/HelayaHeatlthMart";
import HelayaDiagnostic from "./pages/HelayaDiagnostic";
import MedicalCenters from "./pages/clinic";
import BrandingDesign from "./pages/amart-design";
import AiSolution from "./pages/AiSolution";
import HelayaInternational from "./pages/helaya-international";
import Manufacture from "./pages/manufacture";
import Expia from "./pages/exfea";
import Cosmoceutical from "./pages/cosmoceutical";
import HealthcareService from "./pages/HealthcareService";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section"));
    const targets = sections
      .slice(1)
      .filter((el) => {
        return !el.classList.contains("reveal")
          && !el.classList.contains("fade-up")
          && !el.classList.contains("fade-in-up")
          && !el.classList.contains("scroll-reveal");
      });

    targets.forEach((el) => el.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="page-fade" key={location.pathname}>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/search" element={<Search />} />

        {/* Business Pages */}
        <Route path="/business/pharmaceuticals" element={<Pharmaceuticals />} />
        <Route path="/business/diagnostics" element={<Diagnostics />} />
        <Route path="/business/medical-tourism" element={<MedicalTourism />} />
        <Route path="/business/helaya-pharmacy" element={<HelayaPharmacy />} />
        <Route path="/business/helaya-health-mart" element={<HelayaHeatlthMart />} />
        <Route path="/business/helaya-diagnostic" element={<HelayaDiagnostic />} />
        <Route path="/business/medical-centers" element={<MedicalCenters />} />
        <Route path="/business/branding-design" element={<BrandingDesign />} />
        <Route path="/business/ai-solution" element={<AiSolution />} />
        <Route path="/business/helaya-international" element={<HelayaInternational />} />
        <Route path="/business/manufacture" element={<Manufacture />} />
        <Route path="/business/expia" element={<Expia />} />
        <Route path="/business/cosmeceutical" element={<Cosmoceutical />} />
        <Route path="/business/healthcare-services" element={<HealthcareService />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ImagePreloader />

      <Navbar />

      <main className="main-content">
        <AnimatedRoutes />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
