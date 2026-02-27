import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/WhatsAppFloat.css";
import whatsappIcon from "../assets/whatapp.png";
import chatbotIcon from "../chatbotlogo/chatbot.jpeg";

const STAFF_CONTACT_MESSAGE =
  "I’m sorry, I can only answer A Mart website topics. Please contact our staff: +94 77 7744 816 / +94 77 7648 888.";

const WEBSITE_KB = [
  {
    keywords: ["about", "a mart", "amart", "company", "who are you"],
    answer:
      "A Mart Holdings is a Sri Lankan group focused on healthcare and innovation across pharmaceuticals, diagnostics, medical tourism, pharmacy, manufacturing, branding, AI solutions, and trading.",
  },
  {
    keywords: ["services", "business", "what you do", "what do you do"],
    answer:
      "Our main areas are: A Mart Holdings services, Diagnostics, Helaya Health Mart, Energy & Trading, Manufacture, Branding & Design, and AI Solution.",
  },
  {
    keywords: ["pharmaceutical", "pharma", "medicine"],
    answer:
      "Our pharmaceuticals business provides high-quality medicines and healthcare solutions through trusted partner networks and local operations.",
  },
  {
    keywords: ["diagnostic", "lab", "test", "oncology"],
    answer:
      "Our diagnostics business offers advanced laboratory and specialized diagnostic services with partner labs and modern testing solutions.",
  },
  {
    keywords: ["medical tourism", "travel", "hospital", "india", "singapore"],
    answer:
      "Medical Tourism supports treatment journeys with accredited hospitals in India and Singapore and experienced patient support.",
  },
  {
    keywords: ["helaya", "pharmacy", "kandy", "kohuwala"],
    answer:
      "Helaya Pharmacy serves communities through outlets including Kandy and Kohuwala with medicines, wellness products, and pharmacist support.",
  },
  {
    keywords: ["ai", "automation", "ai solution"],
    answer:
      "Our AI Solution team provides practical AI tools to improve decision-making, automate routine work, and support measurable business outcomes.",
  },
  {
    keywords: ["branding", "design", "brand"],
    answer:
      "Branding & Design focuses on building strong brand identity, visuals, and messaging that help businesses stand out clearly.",
  },
  {
    keywords: ["manufacture", "biocim", "cosmoderma", "cosmo"],
    answer:
      "Our Manufacture segment includes Helaya Biocim (Pvt) Ltd and Helaya CosmoDerma Life Sciences (Pvt) Ltd for healthcare and cosmeceutical products.",
  },
  {
    keywords: ["energy", "trading", "exfea", "international"],
    answer:
      "Our Energy & Trading segment includes Exfea and Helaya International, supporting expansion in regional and international markets.",
  },
  {
    keywords: ["events", "event"],
    answer:
      "You can view recent company activities, highlights, and updates in the Events page.",
  },
  {
    keywords: ["contact", "phone", "whatsapp", "call", "email", "address"],
    answer:
      "You can contact us via +94 77 7744 816 / +94 77 7648 888, email info@amartholdings.com, and visit No.12, City Center, Sunethradevi Rd, Kohuwala, Sri Lanka.",
  },
];

const resolveWebsiteAnswer = (question) => {
  const normalized = question.toLowerCase();
  if (
    normalized.includes("hello") ||
    normalized.includes("hi") ||
    normalized.includes("hey")
  ) {
    return "Hi! I’m here to help with A Mart website info. You can ask about services, branches, medical tourism, diagnostics, events, or contact details.";
  }

  if (
    normalized.includes("thank") ||
    normalized.includes("thanks")
  ) {
    return "You’re welcome. If you need anything else about A Mart Holdings, I’m happy to help.";
  }

  const match = WEBSITE_KB.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );
  return match ? `Sure. ${match.answer}` : STAFF_CONTACT_MESSAGE;
};

const WhatsAppFloat = () => {
  const [showFacebook, setShowFacebook] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  const [showChatbot, setShowChatbot] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hi! Ask me anything about A Mart Holdings.",
    },
  ]);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("social-float-change", {
        detail: { showFacebook, showWhatsApp, showChatbot },
      })
    );
  }, [showFacebook, showWhatsApp, showChatbot]);

  useEffect(() => {
    if (!chatOpen || !chatBodyRef.current) return;
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }, [chatMessages, chatOpen]);

  const canSend = useMemo(() => chatInput.trim().length > 0, [chatInput]);

  const handleSend = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    const userMessage = { id: Date.now(), from: "user", text: trimmed };
    const botMessage = {
      id: Date.now() + 1,
      from: "bot",
      text: resolveWebsiteAnswer(trimmed),
    };
    setChatMessages((prev) => [...prev, userMessage, botMessage]);
    setChatInput("");
  };

  if (!showFacebook && !showWhatsApp && !showChatbot) {
    return null;
  }

  return (
    <div className="social-float">
      {showChatbot && (
        <div className="social-float-item social-float-item-chatbot">
          <button
            type="button"
            className="social-float-item-close"
            onClick={() => setShowChatbot(false)}
            aria-label="Close chatbot button"
          >
            x
          </button>

          {chatOpen && (
            <div className="chatbot-panel" role="dialog" aria-label="A Mart assistant">
              <div className="chatbot-panel-header">
                <img src={chatbotIcon} alt="" aria-hidden="true" />
                <div>
                  <div className="chatbot-title">A Mart Assistant</div>
                  <div className="chatbot-subtitle">Website guide</div>
                </div>
                <button
                  type="button"
                  className="chatbot-panel-close"
                  onClick={() => setChatOpen(false)}
                  aria-label="Close chat panel"
                >
                  ×
                </button>
              </div>
              <div className="chatbot-panel-body" ref={chatBodyRef}>
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chatbot-message ${
                      msg.from === "user" ? "chatbot-message-user" : "chatbot-message-bot"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="chatbot-panel-input">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder="Type your question..."
                  aria-label="Chat question"
                />
                <button type="button" onClick={handleSend} disabled={!canSend}>
                  Send
                </button>
              </div>
            </div>
          )}

          <button
            type="button"
            className="social-float-btn social-float-chatbot"
            onClick={() => setChatOpen((prev) => !prev)}
            aria-label="Open chatbot"
          >
            <img src={chatbotIcon} alt="" aria-hidden="true" />
          </button>
          <span className="chatbot-ask-label">Ask me anything</span>
        </div>
      )}

      {showFacebook && (
        <div className="social-float-item social-float-item-facebook">
          <button
            type="button"
            className="social-float-item-close"
            onClick={() => setShowFacebook(false)}
            aria-label="Close Facebook button"
          >
            x
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
        </div>
      )}

      {showWhatsApp && (
        <div className="social-float-item social-float-item-whatsapp">
          <button
            type="button"
            className="social-float-item-close"
            onClick={() => setShowWhatsApp(false)}
            aria-label="Close WhatsApp button"
          >
            x
          </button>
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
      )}
    </div>
  );
};

export default WhatsAppFloat;
