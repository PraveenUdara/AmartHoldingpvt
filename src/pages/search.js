import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import searchCover from "../assets/9 pages/search/search.png";
import searchCoverMobile from "../assets/mobileimage/serach/search.png";
import "../styles/search.css";
import Breadcrumbs from "../components/Breadcrumbs";

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

const normalize = (value) => value.toLowerCase();

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const initialQuery = useMemo(() => new URLSearchParams(location.search).get("q") || "", [location.search]);
  const [input, setInput] = useState(initialQuery);

  useEffect(() => {
    document.body.classList.add("nav-darktext");
    return () => document.body.classList.remove("nav-darktext");
  }, []);

  useEffect(() => {
    setInput(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(media.matches);
    updateMobile();
    if (media.addEventListener) {
      media.addEventListener("change", updateMobile);
    } else {
      media.addListener(updateMobile);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", updateMobile);
      } else {
        media.removeListener(updateMobile);
      }
    };
  }, []);

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

  const handleBlur = () => {
    if (!input.trim()) return;
    setInput("");
    navigate("/search", { replace: true });
  };


  return (
    <div className="search-page">
      <div
        className="search-hero"
        style={{
          backgroundImage: `url(${isMobile ? searchCoverMobile : searchCover})`,
        }}
      >
        <Breadcrumbs variant="hero" />
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
              onBlur={handleBlur}
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
              No matches found for "${searchTerm}". Please try another keyword.
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

        </div>
      </section>
    </div>
  );
};

export default SearchPage;

