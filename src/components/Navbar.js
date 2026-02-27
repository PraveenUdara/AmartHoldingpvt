// src/components/Navbar.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/whiellogo.png";
import "./Navbar.css";

const SEARCH_SUGGESTIONS = [
  { title: "Home", path: "/", keywords: "amart holdings" },
  { title: "About Us", path: "/about", keywords: "company vision mission" },
  { title: "Pharmaceuticals", path: "/business/pharmaceuticals", keywords: "medicine pharma" },
  { title: "Diagnostics", path: "/business/diagnostics", keywords: "lab testing diagnostic" },
  { title: "Medical Tourism", path: "/business/medical-tourism", keywords: "travel treatment hospitals" },
  { title: "Helaya Pharmacy", path: "/business/helaya-pharmacy", keywords: "pharmacy retail" },
  { title: "Helaya Diagnostic", path: "/business/helaya-diagnostic", keywords: "helaya lab center" },
  { title: "Medical Centers", path: "/business/medical-centers", keywords: "clinic clinical" },
  { title: "Helaya Health Mart", path: "/business/helaya-health-mart", keywords: "health mart" },
  { title: "Branding & Design", path: "/business/branding-design-details", keywords: "branding design creative" },
  { title: "AI Solution", path: "/business/ai-solution", keywords: "ai automation" },
  { title: "Events", path: "/events", keywords: "programs activities" },
  { title: "Contact Us", path: "/contact", keywords: "contact support inquiry" },
];

const businessColumns = [
  {
    title: "A Mart Holdings",
    path: "/business/healthcare-services",
    items: [
      { label: "Pharmaceuticals", path: "/business/pharmaceuticals" },
      { label: "Medical Tourism", path: "/business/medical-tourism" },
    ],
  },
  {
    title: "Diagnostics",
    path: "/business/diagnostics",
    items: [
      { label: "Diagnostics", path: "/business/diagnostics" },
    ],
  },
  {
    title: "Helaya Health Mart",
    path: "/business/helaya-health-mart",
    items: [
      { label: "Helaya Pharmacy", path: "/business/helaya-pharmacy" },
      { label: "Helaya Diagnostic", path: "/business/helaya-diagnostic" },
      { label: "Medical Centers", path: "/business/medical-centers" },
    ],
  },
  {
    title: "Energy & Trading",
    path: null,
    items: [
      { label: "Exfea", path: "/business/expia" },
      { label: "Helaya International", path: "/business/helaya-international" },
    ],
  },
  {
    title: "Manufacture",
    path: "/business/manufacture",
    items: [
      { label: "Helaya Biocim (Pvt) Ltd", path: "/business/manufacture#helaya-biocim" },
      { label: "Helaya CosmoDerma Life Sciences (Pvt) Ltd", path: "/business/manufacture#helaya-cosmoderma" },
    ],
  },
  {
    title: "Branding & AI Solution",
    path: "/business/branding-design",
    items: [
      { label: "Branding & Design", path: "/business/branding-design-details" },
      { label: "AI Solution", path: "/business/ai-solution" },
    ],
  },
];

const Navbar = () => {
  const [bizOpen, setBizOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [useWhiteLogo, setUseWhiteLogo] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setBizOpen(false);
      closeTimer.current = null;
    }, 120);
  };

  useEffect(() => {
    if (searchOpen) {
      document.body.classList.add("search-active");
    } else {
      document.body.classList.remove("search-active");
    }
    return () => {
      document.body.classList.remove("search-active");
    };
  }, [searchOpen]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateLogoMode = () => {
      const body = document.body;
      const hasBlackTextNav =
        body.classList.contains("nav-darktext") ||
        body.classList.contains("nav-blacktext");
      setUseWhiteLogo(!hasBlackTextNav);
    };

    updateLogoMode();
    const observer = new MutationObserver(updateLogoMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);


  // Close menus when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!navRef.current?.contains(e.target)) {
        setBizOpen(false);
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = searchValue.trim();
    if (!term) return;

    closeMenus();
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  const closeMenus = () => {
    setBizOpen(false);
    setMobileMenu(false);
    setSearchOpen(false);
    setSearchFocused(false);
  };

  const filteredSuggestions = useMemo(() => {
    const term = searchValue.trim().toLowerCase();
    if (!term) return [];
    return SEARCH_SUGGESTIONS.filter((item) => {
      const haystack = `${item.title} ${item.keywords || ""}`.toLowerCase();
      return haystack.includes(term);
    }).slice(0, 7);
  }, [searchValue]);

  const showSuggestions = searchFocused && filteredSuggestions.length > 0;

  const handleSuggestionClick = (item) => {
    setSearchValue("");
    closeMenus();
    navigate(item.path);
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${searchOpen ? "search-open" : ""} ${isScrolled ? "navbar-scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transform: "none",
        zIndex: 3000,
      }}
    >
      <div className="navbar-inner">
        {/* LEFT : LOGO */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenus}>
          <img
            src={isScrolled ? logo : isMobile ? whiteLogo : useWhiteLogo ? whiteLogo : logo}
            className="nav-logo-img"
            alt="A Mart Holdings Logo"
          />
        </NavLink>

        {/* CENTER : NAVIGATION */}
        <div className={`nav-center ${mobileMenu ? "mobile-open" : ""} ${bizOpen ? "biz-open" : ""}`}>
          <NavLink to="/" end className="nav-link" onClick={closeMenus}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={closeMenus}>
            About Us
          </NavLink>

          {/* ===== BUSINESS MEGA MENU ===== */}
          <div
            className="nav-mega"
            onMouseEnter={() => {
              if (mobileMenu) return;
              cancelClose();
              setBizOpen(true);
            }}
            onMouseLeave={() => {
              if (mobileMenu) return;
              scheduleClose();
            }}
          >
            <button
              className="nav-link nav-business-btn"
              onClick={() => {
                cancelClose();
                setBizOpen((v) => !v);
              }}
              type="button"
              aria-expanded={bizOpen}
            >
              Businesses
              <span className={`arrow ${bizOpen ? "up" : ""}`} aria-hidden="true"></span>
            </button>

            <div
              className={`mega-panel ${bizOpen ? "show" : ""}`}
              onMouseEnter={() => {
                if (mobileMenu) return;
                cancelClose();
                setBizOpen(true);
              }}
              onMouseLeave={() => {
                if (mobileMenu) return;
                scheduleClose();
              }}
            >
              <div className="mega-inner">
                <div className="mega-columns">
                  {businessColumns.map(column => (
                    <div className="mega-column" key={column.title}>
                      {column.path ? (
                        <NavLink
                          to={column.path}
                          onClick={closeMenus}
                          className="mega-heading mega-heading-link"
                        >
                          {column.title}
                        </NavLink>
                      ) : (
                        <span className="mega-heading">{column.title}</span>
                      )}
                      {column.items?.length > 0 && (
                        <div className="mega-column-links">
                          {column.items.map(item => (
                            <div className="mega-item" key={item.path}>
                              <NavLink to={item.path} onClick={closeMenus} className="mega-text">
                                {item.label}
                              </NavLink>
                              {item.sublinks && (
                                <div className="mega-sublist">
                                  {item.sublinks.map(sub => (
                                    <Link
                                      key={sub.path}
                                      to={sub.path}
                                      className="mega-subitem"
                                      onClick={closeMenus}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/events" className="nav-link" onClick={closeMenus}>
            Events
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={closeMenus}>
            Contact Us
          </NavLink>
        </div>

        {/* RIGHT : SEARCH */}
        <form className="nav-search nav-search-right" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 120)}
          />
          {showSuggestions && (
            <div className="nav-search-suggestions" role="listbox" aria-label="Search suggestions">
              {filteredSuggestions.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  className="nav-search-suggestion-item"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSuggestionClick(item)}
                >
                  <span className="nav-search-suggestion-title">{item.title}</span>
                  <span className="nav-search-suggestion-path">{item.path}</span>
                </button>
              ))}
            </div>
          )}
        </form>

        {/* MOBILE SEARCH + HAMBURGER */}
        <div className="nav-mobile-actions">
          <button
            className="search-toggle"
            type="button"
            onClick={() => {
              setMobileMenu(false);
              setSearchOpen((v) => !v);
            }}
            aria-label="Toggle search"
          >
            <span className="search-icon" />
          </button>
          <button
            className={`hamburger ${mobileMenu ? "open" : ""}`}
            onClick={() => setMobileMenu((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isMobile && searchOpen && (
        <form className="nav-search nav-search-mobile" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 120)}
            autoFocus
          />
          <button
            type="button"
            className="nav-search-mobile-close"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            ×
          </button>
          {showSuggestions && (
            <div className="nav-search-suggestions" role="listbox" aria-label="Search suggestions">
              {filteredSuggestions.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  className="nav-search-suggestion-item"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSuggestionClick(item)}
                >
                  <span className="nav-search-suggestion-title">{item.title}</span>
                  <span className="nav-search-suggestion-path">{item.path}</span>
                </button>
              ))}
            </div>
          )}
        </form>
      )}
    </nav>
  );
};

export default Navbar;
