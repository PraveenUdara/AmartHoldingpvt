import React, { useEffect, useState } from "react";
import "../styles/ScrollTopButton.css";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);
  const [socialState, setSocialState] = useState({
    showFacebook: true,
    showWhatsApp: true,
    showChatbot: true,
  });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onSocialChange = (event) => {
      const detail = event.detail || {};
      setSocialState({
        showFacebook: detail.showFacebook !== false,
        showWhatsApp: detail.showWhatsApp !== false,
        showChatbot: detail.showChatbot !== false,
      });
    };

    window.addEventListener("social-float-change", onSocialChange);
    return () => window.removeEventListener("social-float-change", onSocialChange);
  }, []);

  if (!show) return null;

  const allSocialClosed =
    !socialState.showFacebook &&
    !socialState.showWhatsApp &&
    !socialState.showChatbot;

  const placementClass = allSocialClosed ? "slot-whatsapp" : "slot-left";

  return (
    <button
      type="button"
      className={`scroll-top-btn ${placementClass}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ▲
    </button>
  );
};

export default ScrollTopButton;
