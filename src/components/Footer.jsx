import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { footer_links, profile, resume_url, social_profiles } from "../data/portfolio.js";
import { brandIcons, socialIconMap } from "../lib/icons.js";
import { scrollToSection, useResponsive } from "../lib/hooks.jsx";

const labelStyle = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#9ee8f2",
  marginBottom: 12,
};

const linkStyle = {
  display: "block",
  fontSize: 14,
  color: "rgba(244,246,247,0.75)",
  padding: "4px 0",
  cursor: "pointer",
  background: "none",
  border: "none",
  textAlign: "left",
};

function KonamiPanel() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let idx = 0;
    const onKey = (e) => {
      if (e.key === seq[idx]) {
        idx += 1;
        if (idx === seq.length) {
          setShow(true);
          idx = 0;
        }
      } else {
        idx = e.key === seq[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          style={{
            position: "fixed",
            bottom: 88,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 90,
            background: "#0e1417",
            border: "1px solid rgba(96,165,250,0.3)",
            borderRadius: 16,
            padding: "16px 24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 18, margin: 0 }}>ðŸŽ‰</p>
          <p style={{ fontSize: 13, color: "#f4f6f7", marginTop: 4 }}>
            Nice! You found the secret.
          </p>
          <p style={{ fontSize: 12, color: "#9ca9b0", marginTop: 2 }}>
            {profile.name} Â· {profile.title}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const { isMobile } = useResponsive();

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <footer
      className="footer-fade"
      style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "56px 24px 40px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr auto auto",
          gap: isMobile ? 40 : 80,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                fontSize: 18,
                fontWeight: 800,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                color: "#0b1012",
                background: "#67e8f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {initials}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {social_profiles.map((s) => {
              const Icon = brandIcons[s.icon] || socialIconMap[s.name.toLowerCase()];
              if (!Icon) return null;
              return (
                <motion.a
                  key={s.id}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.03)",
                    color: "rgba(244,246,247,0.75)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)";
                    e.currentTarget.style.background = "rgba(96,165,250,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div>
          <p style={labelStyle}>Site</p>
          {footer_links.map((l) => (
            <button key={l.id} style={linkStyle} onClick={() => scrollToSection(document.getElementById(l.id))}>
              {l.label}
            </button>
          ))}
          <a href={resume_url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Download Resume
          </a>
        </div>

        <div>
          <p style={labelStyle}>Social</p>
          {social_profiles.map((s) => (
            <a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {s.name}
            </a>
          ))}
        </div>
      </motion.div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: "rgba(244,246,247,0.5)" }}>Built with</span>
          {profile.site.tech_stack.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 10,
                padding: "2px 8px",
                borderRadius: 4,
                background: "rgba(255,255,255,0.06)",
                color: "rgba(244,246,247,0.6)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        {!isMobile && (
          <span style={{ fontSize: 12, color: "rgba(244,246,247,0.4)" }}>
            Press 0-9 to navigate sections Â· j/k to scroll
          </span>
        )}
      </div>
      <KonamiPanel />
    </footer>
  );
}
