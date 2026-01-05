// src/pages/ContactUs.js
import React, { useState } from "react";
import "../index.css";
import "../styles/ContactUs.css";
import contactCover from "../assets/contact_cover.jpg";

const ContactUs = () => {
  // ================= FORM STATE =================
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= SUBMIT HANDLER =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* COVER */}
      <section className="contact-hero">
        <img
          src={contactCover}
          alt="Contact Us Cover"
          className="contact-hero-img"
        />

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
        <div className="highlight-card fade-up">
          <span className="highlight-label">Call / WhatsApp</span>
          <span className="highlight-value">+94 77 7744 816</span>
          <span className="highlight-value">+94 77 7648 888</span>
        </div>
        <div className="highlight-card fade-up delay-1">
          <span className="highlight-label">Email</span>
          <span className="highlight-value">info@amartholdings.com</span>
        </div>
        <div className="highlight-card fade-up delay-2">
          <span className="highlight-label">Visit</span>
          <span className="highlight-value">City Center, Sunethradevi Rd</span>
          <span className="highlight-value">Kohuwala, Sri Lanka</span>
        </div>
      </div>

      {/* MESSAGE + FORM */}
      <div className="contact-top-section">

        <div className="help-text fade-up">
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

        <div className="form-wrapper fade-up delay-1">
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

              <button className="btn-submit" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
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

          <div className="contact-location-header fade-up">
            <h2>Visit Us</h2>
            <p>Find us easily and reach out with any questions.</p>
          </div>

          <div className="map-info-section">
            <div className="map-container fade-up">
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

            <div className="info-panel fade-up delay-1">
              <div className="info-block">
                <h3 className="info-title">Address</h3>
                <p className="info-text">
                  A Mart Holdings (Pvt) Ltd <br />
                  City Center, No.12,<br />
                  Sunethradevi Road, Kohuwala,<br />
                  Sri Lanka.
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
            <div className="box get-direction-box fade-up">
              <h3>Get Directions</h3>
              <a
                href="https://www.google.com/maps?q=A%20Mart%20Holdings%20(Pvt)%20Ltd,%20City%20Center,%20Sunethradevi%20Rd,%20Kohuwala"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="box open-hours-box fade-up delay-1">
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
