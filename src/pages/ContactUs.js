// src/pages/ContactUs.js
import React, { useEffect, useState } from "react";
import "../index.css";
import "../styles/ContactUs.css";
import contactCover from "../assets/mian pages/contact us page/contact_cover.jpg";
import Breadcrumbs from "../components/Breadcrumbs";

const ContactUs = () => {
  const whatsappNumber = "94777648888";
  // ================= FORM STATE =================
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".contact-page .contact-reveal"));
    if (!items.length) return undefined;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ================= SUBMIT HANDLER =================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = [
      "Hello A Mart Holdings,",
      "",
      "I would like to send an inquiry.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setLoading(false);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">

      {/* COVER */}
      <section className="contact-hero">
        <img
          src={contactCover}
          alt="Contact Us Cover"
          className="contact-hero-img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <Breadcrumbs variant="hero" />

        <div className="contact-hero-overlay">
          <div className="contact-hero-inner">
            <h1 className="contact-hero-title fade-in-up">Contact Us</h1>
            <p className="contact-hero-sub fade-in-up delay-1">
              We're here to help. Reach out to A Mart Holdings anytime.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <div className="contact-highlight">
        <div className="highlight-card contact-reveal reveal-left">
          <span className="highlight-label">Call / WhatsApp</span>
          <span className="highlight-value">+94 77 7744 816</span>
          <span className="highlight-value">+94 77 7648 888</span>
        </div>
        <div className="highlight-card contact-reveal reveal-right">
          <span className="highlight-label">Email</span>
          <span className="highlight-value">info@amartholdings.com</span>
        </div>
        <div className="highlight-card contact-reveal reveal-left">
          <span className="highlight-label">Visit</span>
          <span className="highlight-value">Address: No.12, City Center, Sunethradevi Rd, Kohuwala, Sri Lanka</span>
        </div>
      </div>

      {/* MESSAGE + FORM */}
      <div className="contact-top-section">

        <div className="help-text contact-reveal reveal-left">
          <h2>We are here to help!</h2>
          <p>
            Let us know how we can best serve you. Use the contact form to email us,
            and we will reply as soon as possible.
          </p>
          <p>
            It's our honor to support you on your journey toward better health
            and wellbeing.
          </p>
        </div>

        <div className="form-wrapper contact-reveal reveal-right">
          <div className="contact-container">
            <h1 className="contact-title">Send Us a Message</h1>
            <p className="contact-subtitle">
              Our team will respond as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="two-column">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="07X XXX XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button className="btn-submit btn-submit-whatsapp" type="submit" disabled={loading}>
                <span className="btn-submit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.33-1.65a11.82 11.82 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.17-1.23-6.14-3.44-8.44zM12.07 21.8h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.89-9.87 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.88 9.89zm5.42-7.41c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.19.3-.77.98-.94 1.18-.17.2-.35.23-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.03 1-1.03 2.44s1.06 2.82 1.21 3.02c.15.2 2.08 3.18 5.03 4.45.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.08-.12-.27-.2-.57-.35z" />
                  </svg>
                </span>
                <span>{loading ? "OPENING WHATSAPP..." : "CONFIRM & SEND VIA WHATSAPP"}</span>
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* SECTION DIVIDER */}
      <div className="contact-section-divider" aria-hidden="true"></div>

      {/* MAP + INFO */}
      <section className="contact-location-section">
        <div className="contact-location-shell">

          <div className="contact-location-header contact-reveal reveal-left">
            <h2>Visit Us</h2>
            <p>Find us easily and reach out with any questions.</p>
          </div>

          <div className="map-info-section">
            <div className="map-container contact-reveal reveal-left">
              <iframe
                title="A Mart Location"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=A%20Mart%20Holdings%20(Pvt)%20Ltd,%20City%20Center,%20Sunethradevi%20Rd,%20Kohuwala&output=embed"
              ></iframe>
            </div>

            <div className="info-panel contact-reveal reveal-right">
              <div className="info-block">
              <h3 className="info-title">Address</h3>
              <p className="info-text">
                A Mart Holdings (Pvt) Ltd<br />
                Address: No.12, City Center, Sunethradevi Rd, Kohuwala, Sri Lanka
              </p>
              </div>

              <div className="info-block">
                <h3 className="info-title">Contact Numbers</h3>
                <p className="info-text">
                  Tel / WhatsApp:<br />
                  +94 77 7744 816<br />
                  +94 77 7648 888
                </p>
              </div>

              <div className="info-block">
                <h3 className="info-title">Email</h3>
                <p className="info-text">info@amartholdings.com</p>
              </div>
            </div>
          </div>

          {/* BOTTOM BOXES */}
          <div className="bottom-boxes">
            <div className="box get-direction-box contact-reveal reveal-left">
              <span className="box-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </span>
              <h3>Get Directions</h3>
              <a
                href="https://www.google.com/maps?q=A%20Mart%20Holdings%20(Pvt)%20Ltd,%20City%20Center,%20Sunethradevi%20Rd,%20Kohuwala"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="box open-hours-box contact-reveal reveal-right">
              <span className="box-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 11h5v-2h-4V6h-2v7z" />
                </svg>
              </span>
              <h3>Open Hours</h3>
              <p>Mon - Fri: 8.30 am - 6.00 pm</p>
              <p>Sat - Sun: Closed</p>
              <p>Poya Day: Closed</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
