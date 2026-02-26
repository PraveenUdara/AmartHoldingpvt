// src/pages/Events.js
import React, { useEffect, useRef, useState } from "react";
import "../styles/Events.css";
import Breadcrumbs from "../components/Breadcrumbs";

// 🔹 EVENTS COVER IMAGE
import eventsCover from "../assets/events_cover.jpg";
import helayaVideoThumb from "../assets/thumbnial/helayapharmacey.webp";

/* AUTO IMPORT ALL IMAGES FROM FOLDERS */
const importAll = (r) => r.keys().map(r);

const oncologistImages = importAll(
  require.context(
    "../assets/Events/oncologists-academic-session-2024",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const stemCellImages = importAll(
  require.context(
    "../assets/Events/stem-cell-masterclass-2024",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const cmeImages = importAll(
  require.context(
    "../assets/Events/thromboembolism-cme-2024",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const kandyHelayaImages = importAll(
  require.context(
    "../assets/Events/Kandy Helaya Pharamcey opens",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const kandyHelayaVideos = importAll(
  require.context(
    "../assets/Events/Kandy Helaya Pharamcey opens",
    false,
    /\.(mp4|webm|mov)$/
  )
);

const kandyHelayaPosters = importAll(
  require.context(
    "../assets/Events/Kandy Helaya Pharamcey opens",
    false,
    /_poster\.(jpg|jpeg|png)$/
  )
);

const kandyHelayaPosterMap = kandyHelayaPosters.reduce((acc, src) => {
  const match = src.match(/\/([^/]+)_poster\.(jpg|jpeg|png)$/i);
  if (match) {
    acc[match[1]] = src;
  }
  return acc;
}, {});

const kandyHelayaVideoItems = kandyHelayaVideos.map((src) => {
  const match = src.match(/\/([^/]+)\.(mp4|webm|mov)$/i);
  const baseName = match ? match[1] : "";
  return {
    src,
    poster: kandyHelayaPosterMap[baseName] || helayaVideoThumb,
  };
});

const kduChemoImages = importAll(
  require.context(
    "../assets/Events/KDU hospital chemotherapy unit opens",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const manipalEventImages = importAll(
  require.context(
    "../assets/Events/Manipal Hospital Event",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [playingMap, setPlayingMap] = useState({});
  const videoRefs = useRef({});
  const getCover = (images) => (images && images.length ? images[0] : eventsCover);
  const mobileEventCards = [
    {
      id: "event-oncologists",
      title: "1st Annual Academic Session",
      subtitle: "Sri Lanka College of Oncologists",
      cover: getCover(oncologistImages),
    },
    {
      id: "event-stem-cell",
      title: "Stem Cell Master Class",
      subtitle: "Hotel Galadari, Colombo",
      cover: getCover(stemCellImages),
    },
    {
      id: "event-cme",
      title: "Thromboembolism CME",
      subtitle: "Grand Monarch, Thalawathugoda",
      cover: getCover(cmeImages),
    },
    {
      id: "event-kandy",
      title: "Kandy Helaya Pharmacy",
      subtitle: "Opening Event",
      cover: getCover(kandyHelayaImages),
    },
    {
      id: "event-kdu",
      title: "KDU Chemotherapy Unit",
      subtitle: "Opening Event",
      cover: getCover(kduChemoImages),
    },
    {
      id: "event-manipal",
      title: "Manipal Hospital Event",
      subtitle: "Special Program",
      cover: getCover(manipalEventImages),
    },
  ];

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".events-page .event-reveal"));
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

  const handleVideoToggle = (idx) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="events-page">

      {/* ================= EVENTS COVER ================= */}
      <section className="events-hero">
        <img
          src={eventsCover}
          alt="Events Cover"
          className="events-hero-img"
        />
        <Breadcrumbs variant="hero" />

        <div className="events-hero-overlay">
          <h1 className="events-hero-title fade-in-up">
            Our Events
          </h1>
          <p className="events-hero-sub fade-in-up delay-1">
            Academic sessions, master classes & professional medical programs
          </p>
        </div>
      </section>

      {/* ================= EVENTS CONTENT ================= */}
      <div className="events-mobile-nav">
        {mobileEventCards.map((event) => (
          <a key={event.id} href={`#${event.id}`} className="events-mobile-card">
            <div className="events-mobile-thumb">
              <img src={event.cover} alt={event.title} loading="lazy" />
            </div>
            <div className="events-mobile-info">
              <h3>{event.title}</h3>
              <p>{event.subtitle}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="events-container">

        {/* EVENT 01 */}
        <div className="event-section fade-up" id="event-kdu">
          <h2>1st Annual Academic Session</h2>
          <h4>Sri Lanka College of Oncologists</h4>
          <p><strong>Date:</strong> Oct 11 – Oct 13, 2024</p>
          <p><strong>Venue:</strong> Hotel Galadari, Colombo</p>

          <div className="event-gallery">
            {oncologistImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Academic Session"
                className={`event-reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* EVENT 02 */}
        <div className="event-section fade-up delay-1" id="event-kandy">
          <h2>Hematopoietic Stem Cell Transplantation Master Class</h2>
          <p><strong>Date:</strong> Oct 10, 2024</p>
          <p><strong>Venue:</strong> Hotel Galadari, Colombo</p>

          <div className="event-gallery">
            {stemCellImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Stem Cell Master Class"
                className={`event-reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* EVENT 03 */}
        <div className="event-section fade-up delay-2" id="event-manipal">
          <h2>
            CME on “The Management of Thromboembolism in Cancer Patients”
          </h2>
          <h4>Sri Lanka College of Oncologists</h4>
          <p><strong>Date:</strong> June 29, 2024</p>
          <p><strong>Venue:</strong> Grand Monarch, Thalawathugoda</p>

          <div className="event-gallery">
            {cmeImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="CME Event"
                className={`event-reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* EVENT 04 */}
        <div className="event-section fade-up delay-1" id="event-stem-cell">
          <h2>Kandy Helaya Pharmacy opens</h2>
          <div className="event-gallery">
            {kandyHelayaImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Kandy Helaya Pharmacy"
                className={`event-reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          {kandyHelayaVideos.length > 0 && (
            <div className="event-video-section">
              <h4>Event Videos</h4>
              <div className="event-video-grid">
                {kandyHelayaVideoItems.map((video, i) => (
                  <div
                    key={i}
                    className={`event-video-wrap event-reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                  >
                    <button
                      type="button"
                      className={`event-video-center-toggle ${playingMap[i] ? "is-playing" : ""}`}
                      onClick={() => handleVideoToggle(i)}
                      aria-label={playingMap[i] ? "Pause event video" : "Play event video"}
                    >
                      {playingMap[i] ? (
                        <span className="event-toggle-icon event-toggle-icon-pause" aria-hidden="true">
                          <span></span>
                          <span></span>
                        </span>
                      ) : (
                        <span className="event-toggle-icon event-toggle-icon-play" aria-hidden="true"></span>
                      )}
                    </button>
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[i] = el;
                      }}
                      src={video.src}
                      poster={video.poster || helayaVideoThumb}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      preload="none"
                      onContextMenu={(e) => e.preventDefault()}
                      onPlay={() => setPlayingMap((prev) => ({ ...prev, [i]: true }))}
                      onPause={() => setPlayingMap((prev) => ({ ...prev, [i]: false }))}
                      onEnded={() => setPlayingMap((prev) => ({ ...prev, [i]: false }))}
                      className="event-video"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* EVENT 05 */}
        <div className="event-section fade-up" id="event-oncologists">
          <h2>KDU hospital chemotherapy unit opens</h2>
          <div className="event-gallery">
            {kduChemoImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="KDU chemotherapy unit"
                className={`event-reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* EVENT 06 */}
        <div className="event-section fade-up delay-2" id="event-cme">
          <h2>Manipal Hospital Event</h2>
          <div className="event-gallery">
            {manipalEventImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Manipal Hospital Event"
                className={`event-reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ================= IMAGE LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img src={selectedImage} alt="Event Large View" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;

