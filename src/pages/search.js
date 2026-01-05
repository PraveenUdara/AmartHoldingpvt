import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import searchCover from "../assets/9 pages/search/search.png";
import pharmaImg from "../assets/pharma.jpg";
import diagnosticsImg from "../assets/diagnostics.jpg";
import tourismImg from "../assets/tourism.jpg";
import helayaPharmacyImg from "../assets/helaya_pharmacy.webp";
import helayaInternationalImg from "../assets/helaya_international.jpg";
import brandingImg from "../assets/amart_branding.jpg";
import helayaClinicImg from "../assets/helaya_clinic.jpg";
import expiaImg from "../assets/expia.jpg";
import manufactureImg from "../assets/manufacture.jpg";
import "../styles/search.css";

const SEARCH_INDEX = [
  {
    title: "Home",
    path: "/",
    description: "Overview of A Mart Holdings with highlights across healthcare, branding, and international ventures.",
    keywords: "overview holdings healthcare branding ventures",
  },
  {
    title: "About Us",
    path: "/about",
    description: "Our story, leadership vision, and the values guiding A Mart Holdings.",
    keywords: "leadership vision values responsibility trust purpose",
  },
  {
    title: "Pharmaceuticals",
    path: "/business/pharmaceuticals",
    description: "Pharmaceutical distribution, quality assurance, and supply partnerships.",
    keywords: "medicine pharma distribution supply",
  },
  {
    title: "Diagnostics",
    path: "/business/diagnostics",
    description: "Advanced diagnostic services, genomics, and specialized testing solutions.",
    keywords: "diagnostics testing genomics oncology foundation one",
  },
  {
    title: "Medical Tourism",
    path: "/business/medical-tourism",
    description: "Cross-border medical travel services connecting patients with trusted hospitals.",
    keywords: "medical tourism india singapore hospitals travel care",
  },
  {
    title: "Helaya Pharmacy",
    path: "/business/helaya-pharmacy",
    description: "Retail pharmacy network focused on quality medicines and patient trust.",
    keywords: "pharmacy retail helaya medicine",
  },
  {
    title: "Helaya Diagnostic",
    path: "/business/helaya-diagnostic",
    description: "Diagnostic centers delivering reliable lab results and imaging services.",
    keywords: "diagnostic centers labs imaging helaya",
  },
  {
    title: "Medical Centers",
    path: "/business/medical-centers",
    description: "Community medical centers offering accessible care and clinical services.",
    keywords: "clinics community care medical centers",
  },
  {
    title: "Helaya Health Mart",
    path: "/business/helaya-health-mart",
    description: "Health Mart marketplace for pharmacy, diagnostics, and medical services.",
    keywords: "health mart pharmacy diagnostic marketplace",
  },
  {
    title: "A Mart Branding & Design",
    path: "/business/branding-design",
    description: "Branding, design, and creative solutions to elevate businesses.",
    keywords: "branding design creative studio identity",
  },
  {
    title: "Helaya International",
    path: "/business/helaya-international",
    description: "International trading and sourcing through Helaya International (UAE).",
    keywords: "international trading uae sourcing",
  },
  {
    title: "Manufacture",
    path: "/business/manufacture",
    description: "Manufacturing initiatives focused on quality production and expansion.",
    keywords: "manufacturing production facilities",
  },
  {
    title: "Expia",
    path: "/business/expia",
    description: "Exfea/Expia ventures supporting innovation and market growth.",
    keywords: "expia exfea innovation venture",
  },
  {
    title: "Cosmeceutical",
    path: "/business/cosmeceutical",
    description: "Research-backed cosmeceutical products blending skincare and science.",
    keywords: "cosmeceutical skincare research formulations",
  },
  {
    title: "Events",
    path: "/events",
    description: "Upcoming and recent events across A Mart Holdings.",
    keywords: "events news updates",
  },
  {
    title: "Contact Us",
    path: "/contact",
    description: "Get in touch with A Mart Holdings for inquiries and partnerships.",
    keywords: "contact inquiry partnership support",
  },
];

const BUSINESSES = [
  { title: "Pharmaceuticals", path: "/business/pharmaceuticals", icon: pharmaImg },
  { title: "Diagnostics", path: "/business/diagnostics", icon: diagnosticsImg },
  { title: "Medical Tourism", path: "/business/medical-tourism", icon: tourismImg },
  { title: "Helaya Pharmacy", path: "/business/helaya-pharmacy", icon: helayaPharmacyImg },
  { title: "Helaya Diagnostic", path: "/business/helaya-diagnostic", icon: diagnosticsImg },
  { title: "Medical Centers", path: "/business/medical-centers", icon: helayaClinicImg },
  { title: "Helaya Health Mart", path: "/business/helaya-health-mart", icon: helayaPharmacyImg },
  { title: "A Mart Branding & Design", path: "/business/branding-design", icon: brandingImg },
  { title: "Helaya International", path: "/business/helaya-international", icon: helayaInternationalImg },
  { title: "Exfea", path: "/business/expia", icon: expiaImg },
  { title: "Manufacture", path: "/business/manufacture", icon: manufactureImg },
];

const normalize = (value) => value.toLowerCase();

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialQuery = useMemo(() => new URLSearchParams(location.search).get("q") || "", [location.search]);
  const [input, setInput] = useState(initialQuery);
  const [businessIndex, setBusinessIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add("nav-darktext");
    return () => document.body.classList.remove("nav-darktext");
  }, []);

  useEffect(() => {
    setInput(initialQuery);
  }, [initialQuery]);

  const searchTerm = initialQuery.trim();

  const results = useMemo(() => {
    const term = searchTerm.toLowerCase();
    if (!term) return [];
    return SEARCH_INDEX.filter((item) => {
      const haystack = normalize(`${item.title} ${item.description} ${item.keywords || ""}`);
      return haystack.includes(term);
    });
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = input.trim();
    if (!next) return;
    navigate(`/search?q=${encodeURIComponent(next)}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessIndex((prev) => (prev + 3) % BUSINESSES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleBusinesses = [0, 1, 2].map(
    (offset) => BUSINESSES[(businessIndex + offset) % BUSINESSES.length]
  );

  return (
    <div className="search-page">
      <div
        className="search-hero"
        style={{
          backgroundImage: `url(${searchCover})`,
        }}
      >
      </div>

      <div className="search-body">
        <div className="search-body-header">
          <h1>Search</h1>
          <p>Look up pages and services across A Mart Holdings.</p>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for services, pages, or products..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="search-results">
          {!searchTerm && <div className="search-hint">Type a keyword to see matching pages.</div>}

          {searchTerm && (
            <div className="search-query-title">
              Search Result For "{searchTerm}"
            </div>
          )}

          {searchTerm && results.length > 0 && (
            <div className="search-list">
              {results.map((item) => (
                <div className="search-card" key={item.path}>
                  <div className="search-card-header">
                    <h3>{item.title}</h3>
                    <Link to={item.path} className="search-view">
                      View details
                    </Link>
                  </div>
                  <p className="search-desc">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {searchTerm && results.length === 0 && (
            <div className="search-empty">
              Something went wrong — no matches found for “{searchTerm}”. Please try another keyword.
            </div>
          )}
        </div>
      </div>

      <section className="search-footer">
        <div className="search-footer-inner">
          <div className="search-footer-copy">
            <h2>About A Mart Holdings</h2>
            <p>
              A Mart Holdings is a fast-growing Sri Lankan group delivering trusted healthcare,
              diagnostics, pharmacy services, and international partnerships that improve lives.
            </p>
          </div>

          <div className="search-footer-business">
            <h3>Our Businesses</h3>
            <div className="search-business-grid">
              {visibleBusinesses.map((biz) => (
                <Link
                  key={biz.path}
                  to={biz.path}
                  className="search-business-btn"
                  aria-label={biz.title}
                  title={biz.title}
                >
                  <img src={biz.icon} alt="" className="search-business-icon" width="84" height="84" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
