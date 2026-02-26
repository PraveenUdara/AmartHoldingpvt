import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <Breadcrumbs />
        <div className="privacy-hero-inner">
          <h1>Privacy Policy</h1>
          <p>Last updated: February 24, 2026</p>
        </div>
      </section>

      <section className="privacy-content">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect information you submit through forms, such as name, email,
          phone number, and message details.
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          We use collected information to respond to inquiries, improve services,
          and maintain website operations.
        </p>

        <h2>3. Data Sharing</h2>
        <p>
          We do not sell personal data. We may share limited information with trusted
          service providers where necessary to operate this website and related services.
        </p>

        <h2>4. Cookies and Analytics</h2>
        <p>
          This website may use cookies or analytics tools to understand usage patterns
          and improve user experience.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We apply reasonable technical and organizational safeguards to protect
          personal information against unauthorized access.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal information
          by contacting us through the official contact channels.
        </p>

        <h2>7. Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be reflected
          on this page with the latest revision date.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
