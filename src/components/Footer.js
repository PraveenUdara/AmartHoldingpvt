// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-col footer-info">
          <img src={logo} alt="A Mart Holdings" className="footer-logo" />

          <h3 className="footer-heading">A Mart Holdings (Pvt) Ltd</h3>

          <p className="footer-text location">
            #12 City Center,<br />
            Sunethradevi Road,<br />
            10250, Sri Lanka
          </p>

          <p className="footer-text" style={{ marginTop: "12px", fontWeight: 500 }}>
            Follow us on social media
          </p>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/amartholdings"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A Mart Holdings Facebook"
              className="social-icon facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>

          <p className="footer-text">
            Tel / WhatsApp:<br />
            +94 77 7744 816<br />
            +94 77 7648 888
          </p>

          <p className="footer-text">
            Email: info@amartholdings.com
          </p>
        </div>

        <div className="footer-col footer-map-col">
          <h3 className="footer-heading">Our Location</h3>

          <div className="footer-map-card">
            <iframe
              className="footer-map"
              title="A Mart Holdings Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=A%20Mart%20Holdings%20(Pvt)%20Ltd,%20City%20Center,%20Sunethradevi%20Road&output=embed"
            ></iframe>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Our Businesses</h3>

          <div className="footer-business-row">
            <div className="footer-link-group">
              <Link className="footer-main-link" to="/business/healthcare-services">Healthcare Services</Link>
              <div className="footer-sublinks">
                <Link className="footer-link" to="/business/pharmaceuticals">Pharmaceuticals</Link>
                <Link className="footer-link" to="/business/diagnostics">Diagnostics</Link>
                <Link className="footer-link" to="/business/medical-tourism">Medical Tourism</Link>
              </div>
            </div>

            <div className="footer-link-group">
              <Link className="footer-main-link" to="/business/helaya-health-mart">Helaya Health Mart</Link>
              <div className="footer-sublinks">
                <Link className="footer-link" to="/business/helaya-pharmacy">Helaya Pharmacy</Link>
                <Link className="footer-link" to="/business/helaya-diagnostic">Helaya Diagnostic</Link>
                <Link className="footer-link" to="/business/medical-centers">Medical Centers</Link>
              </div>
            </div>

            <div className="footer-link-group footer-brands-block">
              <Link className="footer-main-link" to="/business/helaya-international">Energy & Trading</Link>
              <div className="footer-sublinks">
                <Link className="footer-link" to="/business/expia">Exfea</Link>
                <Link className="footer-link" to="/business/helaya-international">Helaya International</Link>
              </div>
            </div>

            <div className="footer-link-group">
              <Link className="footer-main-link" to="/business/manufacture">Manufacture</Link>
            </div>

            <div className="footer-link-group">
              <Link className="footer-main-link" to="/business/branding-design">A Mart Branding & Solutions</Link>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        Ac {new Date().getFullYear()} A Mart Holdings. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
