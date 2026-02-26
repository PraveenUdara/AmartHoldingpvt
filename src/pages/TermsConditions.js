import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import "../styles/TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <Breadcrumbs />
        <div className="terms-hero-inner">
          <h1>Terms & Conditions</h1>
          <p>Last updated: February 24, 2026</p>
        </div>
      </section>

      <section className="terms-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to these Terms & Conditions.
          If you do not agree, please do not use the site.
        </p>

        <h2>2. Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes and in a way that
          does not infringe the rights of others or restrict their use of the site.
        </p>

        <h2>3. Content Accuracy</h2>
        <p>
          We aim to keep information accurate and current, but we do not guarantee
          completeness or fitness for a specific purpose. Content may change without notice.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and graphics,
          is owned by A Mart Holdings or used with permission and protected by applicable laws.
        </p>

        <h2>5. External Links</h2>
        <p>
          This website may include links to third-party sites. We are not responsible
          for the content, availability, or practices of those websites.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          A Mart Holdings is not liable for direct or indirect losses arising from
          your use of this website or reliance on its content.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may revise these Terms & Conditions at any time. Continued use of the
          site after updates means you accept the revised terms.
        </p>
      </section>
    </div>
  );
};

export default TermsConditions;
