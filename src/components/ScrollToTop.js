import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route changes (unless navigating to an in-page hash),
 * and shows a back-to-top button after scrolling.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const [visible, setVisible] = useState(false);

  // Prevent browsers from restoring old scroll position on hard reload/direct open.
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  // On first load, ensure page starts at top unless URL intentionally contains a hash.
  useEffect(() => {
    if (hash) return;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [hash]);

  // On route change, jump to top unless going to an anchor/hash
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  // Toggle back-to-top button visibility
  useEffect(() => {
    const toggleVisibility = () => setVisible(window.pageYOffset > 300);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button onClick={handleClick} className="scroll-btn" aria-label="Back to top">
      ↑
    </button>
  );
};

export default ScrollToTop;
