import React, { useState } from "react";
import "../styles/WhatsAppFloat.css";
import whatsappIcon from "../assets/whatapp.png";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="social-float">
      <button
        type="button"
        className="social-float-close"
        onClick={() => setIsOpen(false)}
        aria-label="Close social buttons"
      >
        ×
      </button>
      <a
        className="social-float-btn social-float-facebook"
        href="https://www.facebook.com/amartholdings/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="A Mart Holdings Facebook"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
        </svg>
      </a>
      <a
        className="social-float-btn social-float-whatsapp"
        href="https://wa.me/94777648888"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with A Mart Holdings on WhatsApp"
      >
        <img src={whatsappIcon} alt="" aria-hidden="true" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
