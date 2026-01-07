// src/components/Navbar.js
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/whiellogo.png";
import "./Navbar.css";

const businessColumns = [
  {
    title: "Healthcare Services",
    path: "/business/healthcare-services",
    items: [
      { label: "Pharmaceuticals", path: "/business/pharmaceuticals" },
      { label: "Diagnostics", path: "/business/diagnostics" },
      { label: "Medical Tourism", path: "/business/medical-tourism" },
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
      { label: "Helaya Biosim (Pvt) Ltd", path: "/business/manufacture#helaya-biosim" },
      { label: "Helaya CosmoDerma (Pvt) Ltd", path: "/business/manufacture#helaya-cosmoderma" },
    ],
  },
  {
    title: "A Mart Branding & Solutions",
    path: "/business/branding-design",
    items: [
      { label: "A Mart Branding", path: "/business/branding-design" },
      { label: "A.I Solution", path: "/business/ai-solution" },
    ],
  },
];

const Navbar = () => {
  const [bizOpen, setBizOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [shrink, setShrink] = useState(false);
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
    const term = searchValue.trim();
    if (!term) return;

    closeMenus();
    navigate(`/search?q=${encodeURIComponent(term)}`);
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
