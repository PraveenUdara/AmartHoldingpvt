// src/components/Breadcrumbs.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Breadcrumbs.css";

const routeLabels = {
  "/": "Home",
  "/about": "About Us",
  "/events": "Events",
  "/contact": "Contact Us",
  "/terms-and-conditions": "Terms & Conditions",
  "/privacy-policy": "Privacy Policy",
  "/search": "Search",
  "/business/healthcare-services": "A Mart Holdings",
  "/business/pharmaceuticals": "Pharmaceuticals",
  "/business/diagnostics": "Diagnostics",
  "/business/medical-tourism": "Medical Tourism",
  "/business/helaya-pharmacy": "Helaya Pharmacy",
  "/business/helaya-health-mart": "Helaya Health Mart",
  "/business/helaya-diagnostic": "Helaya Diagnostic",
  "/business/medical-centers": "Medical Centers",
  "/business/branding-design": "Branding & Design",
  "/business/ai-solution": "AI Solution",
  "/business/helaya-international": "Helaya International",
  "/business/manufacture": "Manufacture",
  "/business/expia": "Exfea",
  "/business/cosmeceutical": "Cosmeceutical",
};

const getLabelFromPath = (path) => {
  if (routeLabels[path]) return routeLabels[path];
  const segment = path.split("/").filter(Boolean).slice(-1)[0] || "";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Breadcrumbs = ({ variant = "default" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHero = variant === "hero";
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  const crumbs = [{ label: "Home", path: "/" }];

  if (pathname.startsWith("/business")) {
    const parentPath = "/business/healthcare-services";
    if (pathname !== parentPath) {
      crumbs.push({ label: getLabelFromPath(parentPath), path: parentPath });
    } else {
      crumbs.push({ label: getLabelFromPath(parentPath), path: parentPath, current: true });
      return (
        <div className={`breadcrumbs ${isHero ? "breadcrumbs-hero" : ""}`}>
          <div className="breadcrumbs-inner">
            {crumbs.map((crumb, index) => (
              <span key={crumb.path}>
                {index > 0 && <span className="breadcrumb-separator">/</span>}
                {crumb.current ? (
                  <span className="breadcrumb-current" aria-current="page">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="breadcrumb-link">{crumb.label}</Link>
                )}
              </span>
            ))}
          </div>
        </div>
      );
    }
  }

  if (pathname !== "/" && !pathname.startsWith("/business")) {
    crumbs.push({ label: getLabelFromPath(pathname), path: pathname, current: true });
  } else if (!pathname.startsWith("/business")) {
    crumbs[0].current = true;
  }

  if (pathname.startsWith("/business") && pathname !== "/business/healthcare-services") {
    crumbs.push({ label: getLabelFromPath(pathname), path: pathname, current: true });
  }

  return (
    <div className={`breadcrumbs ${isHero ? "breadcrumbs-hero" : ""}`}>
      {isHero && (
        <button
          type="button"
          className="breadcrumb-back breadcrumb-back-hero"
          onClick={handleBack}
          aria-label="Go back"
        >
          <span aria-hidden="true">←</span>
        </button>
      )}
      <div className="breadcrumbs-inner">
        {crumbs.map((crumb, index) => (
          <span key={crumb.path}>
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {crumb.current ? (
              <span className="breadcrumb-current" aria-current="page">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="breadcrumb-link">{crumb.label}</Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
