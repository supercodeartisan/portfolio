import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowDown } from "react-icons/fi";
import { profile, roles, statistics, statistics_labels, social_profiles, resume_url } from "../data/portfolio.js";
import { brandIcons, socialIconMap } from "../lib/icons.js";
import { scrollToSection } from "../lib/hooks.jsx";
import { staggerContainer, fadeUpQuick } from "../lib/variants.js";
import AnimatedCounter from "./AnimatedCounter.jsx";
import Modal from "./Modal.jsx";

const T = "#f4f6f7";
const P = "#9ca9b0";
const GREEN = "#22c55e";

function Typewriter() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ color: P, fontSize: 20, margin: 0 }}
        >
          {roles[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Stats() {
  const labels = statistics_labels;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px 48px", marginTop: 8 }}>
      {Object.entries(statistics).map(([key, value]) => (
        <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <AnimatedCounter value={value} />
          <span
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#76838b",
              fontWeight: 600,
            }}
          >
            {labels[key] ?? key}
          </span>
        </div>
      ))}
    </div>
  );
}

function Socials() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
            whileHover={{
              scale: 1.1,
              y: -3,
              color: T,
              borderColor: "rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              color: P,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={18} />
          </motion.a>
        );
      })}
    </div>
  );
}

function CVModal({ isOpen, onClose }) {
  const src = useMemo(() => {
    try {
      return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(resume_url)}`;
    } catch {
      return "";
    }
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeLabel="Close resume" titleId="cv-modal-title" maxWidth={720}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <FiArrowDown size={18} style={{ color: "#60a5fa" }} />
        <h2 id="cv-modal-title" style={{ fontSize: 18, fontWeight: 700, color: T, margin: 0 }}>
          Curriculum Vitae
        </h2>
      </div>
      <div style={{ height: "70vh", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
        <iframe
          title="Resume"
          src={src}
          style={{ width: "100%", height: "100%", border: "none", background: "#fff" }}
        />
      </div>
      <p style={{ fontSize: 12, color: P, marginTop: 12, textAlign: "center" }}>
        If the preview doesn't load,{" "}
        <a href={resume_url} target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa", textDecoration: "underline" }}>
          open the resume directly
        </a>
        .
      </p>
    </Modal>
  );
}

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "112px 24px 144px", gap: 24, maxWidth: 896, margin: "0 auto" }}
      >

        <motion.h1
          variants={fadeUpQuick}
          style={{ fontSize: 80, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.025em", color: T, margin: 0, padding: "0 8px" }}
        >
          {"Hi, I'm " + profile.name + "."}
        </motion.h1>

        <motion.div variants={fadeUpQuick}>
          <Typewriter />
        </motion.div>

        <motion.div variants={fadeUpQuick} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <motion.button
            className="btn-outline text-sm font-semibold"
            style={{ fontSize: 14 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection(document.getElementById("projects"))}
          >
            Explore Projects
          </motion.button>
          <motion.button
            className="btn-outline text-sm font-semibold"
            style={{ fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-haspopup="dialog"
            onClick={() => setCvOpen(true)}
          >
            <FiArrowDown size={15} /> View Resume
          </motion.button>
          <motion.a
            href={resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            style={{ fontSize: 14 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUpQuick}>
          <Stats />
        </motion.div>
      </motion.div>

      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
