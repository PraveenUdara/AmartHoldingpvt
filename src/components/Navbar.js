// src/components/Navbar.js
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/whiellogo.png";
import "./Navbar.css";

const businessColumns = [
  {
    title: "Healthcare Services",
    items: [
      { label: "Pharmaceuticals", path: "/business/pharmaceuticals" },
      { label: "Diagnostics", path: "/business/diagnostics" },
      {
        label: "Medical Tourism",
        path: "/business/medical-tourism",
        sublinks: [
          { label: "India", path: "/business/medical-tourism#india" },
          { label: "Singapore", path: "/business/medical-tourism#singapore" },
        ],
      },
      {
        label: "Helaya Health Mart",
        path: "/business/helaya-health-mart",
        sublinks: [
          { label: "Helaya Pharmacy", path: "/business/helaya-pharmacy" },
          { label: "Helaya Diagnostic", path: "/business/helaya-diagnostic" },
          { label: "Medical Centers", path: "/business/medical-centers" },
        ],
      },
    ],
  },
  {
    title: "Brands & Ventures",
    items: [
      { label: "A Mart Branding & Design", path: "/business/branding-design" },
      { label: "Exfea", path: "/business/expia" },
      { label: "Helaya International", path: "/business/helaya-international" },
      { label: "Manufacture", path: "/business/manufacture" },
      { label: "Cosmeceutical", path: "/business/cosmeceutical" },
    ],
  },
];

const Navbar = () => {
  const [bizOpen, setBizOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [shrink, setShrink] = useState(false);

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

  // Sticky shrink on scroll
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    const term = searchValue.trim().toLowerCase();
    if (!term) return;

    // clear previous highlights
    document.querySelectorAll(".search-hit").forEach(el => el.classList.remove("search-hit"));

    // find first matching element in visible page content
    const candidates = document.querySelectorAll("main, section, article, div, p, li, h1, h2, h3, h4, h5, h6, span, a");
    let target = null;
    for (const el of candidates) {
      if (el.innerText && el.innerText.toLowerCase().includes(term)) {
        target = el;
        break;
      }
    }

    if (target) {
      target.classList.add("search-hit");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const closeMenus = () => {
    setBizOpen(false);
    setMobileMenu(false);
  };

  return (
    <nav ref={navRef} className={`navbar ${shrink ? "navbar-shrink" : ""}`}>
      <div className="navbar-inner">
        {/* LEFT : LOGO */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenus}>
          <img
            src={shrink ? logo : whiteLogo}
            className="nav-logo-img"
            alt="A Mart Holdings Logo"
          />
          <span className="nav-logo-text">A Mart Holdings</span>
        </NavLink>

        {/* CENTER : NAVIGATION */}
        <div className={`nav-center ${mobileMenu ? "mobile-open" : ""}`}>
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
              cancelClose();
              setBizOpen(true);
            }}
            onMouseLeave={scheduleClose}
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
                cancelClose();
                setBizOpen(true);
              }}
              onMouseLeave={scheduleClose}
            >
              <div className="mega-inner">
                <div className="mega-columns">
                  {businessColumns.map(column => (
                    <div className="mega-column" key={column.title}>
                      <h4 className="mega-heading">{column.title}</h4>
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
          />
        </form>

        {/* MOBILE HAMBURGER */}
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
    </nav>
  );
};

export default Navbar;
