// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ImagePreloader from "./components/ImagePreloader";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollTopButton from "./components/ScrollTopButton";

// Main Pages (lazy-loaded)
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Events = lazy(() => import("./pages/Events"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Search = lazy(() => import("./pages/search"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Business Pages (lazy-loaded)
const Pharmaceuticals = lazy(() => import("./pages/pharma"));
const Diagnostics = lazy(() => import("./pages/diagnostics"));
const MedicalTourism = lazy(() => import("./pages/medical-tourism"));
const HelayaPharmacy = lazy(() => import("./pages/helaya-pharmacy"));
const HelayaHeatlthMart = lazy(() => import("./pages/HelayaHeatlthMart"));
const HelayaDiagnostic = lazy(() => import("./pages/HelayaDiagnostic"));
const MedicalCenters = lazy(() => import("./pages/clinic"));
const BrandingDesign = lazy(() => import("./pages/amart-design"));
const AiSolution = lazy(() => import("./pages/AiSolution"));
const BarandingAndAiSolution = lazy(() => import("./pages/barandingandAisolution"));
const HelayaInternational = lazy(() => import("./pages/helaya-international"));
const Manufacture = lazy(() => import("./pages/manufacture"));
const Expia = lazy(() => import("./pages/exfea"));
const Cosmoceutical = lazy(() => import("./pages/cosmoceutical"));
const HealthcareService = lazy(() => import("./pages/HealthcareService"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page-fade" key={location.pathname}>
      <Suspense fallback={<div style={{ minHeight: "40vh" }} />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Business Pages */}
          <Route path="/business/pharmaceuticals" element={<Pharmaceuticals />} />
          <Route path="/business/diagnostics" element={<Diagnostics />} />
          <Route path="/business/medical-tourism" element={<MedicalTourism />} />
          <Route path="/business/helaya-pharmacy" element={<HelayaPharmacy />} />
          <Route path="/business/helaya-health-mart" element={<HelayaHeatlthMart />} />
          <Route path="/business/helaya-diagnostic" element={<HelayaDiagnostic />} />
          <Route path="/business/medical-centers" element={<MedicalCenters />} />
          <Route path="/business/branding-design" element={<BarandingAndAiSolution />} />
          <Route path="/business/branding-design-details" element={<BrandingDesign />} />
          <Route path="/business/ai-solution" element={<AiSolution />} />
          <Route path="/business/helaya-international" element={<HelayaInternational />} />
          <Route path="/business/manufacture" element={<Manufacture />} />
          <Route path="/business/expia" element={<Expia />} />
          <Route path="/business/cosmeceutical" element={<Cosmoceutical />} />
          <Route path="/business/healthcare-services" element={<HealthcareService />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  const Layout = () => {
    const location = useLocation();
    const hideNavbar =
      location.pathname === "/terms-and-conditions" ||
      location.pathname === "/privacy-policy";

    return (
      <>
        {!hideNavbar && <Navbar />}
        <WhatsAppFloat />
        <ScrollTopButton />

        <main className="main-content">
          <AnimatedRoutes />
        </main>

        <Footer />
      </>
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <ImagePreloader />
      <Layout />
    </Router>
  );
}

export default App;
