import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { navigation, profile } from "../data/portfolio.js";
import { scrollToSection, useResponsive, useFocusTrap } from "../lib/hooks.jsx";

const T = "#f4f6f7";
const P = "#9ca9b0";

function NavLink({ label, active, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      aria-label={`Navigate to ${label}`}
      style={{
        padding: "6px 12px",
        fontSize: 13,
        fontWeight: 500,
        borderRadius: 8,
        cursor: "pointer",
        border: "none",
        background: active ? "rgba(255,255,255,0.08)" : "transparent",
        color: active ? T : "rgba(156,169,176,0.9)",
        transition: "color 0.2s",
      }}
      onHoverStart={(e) => (e.target.style.color = T)}
      onHoverEnd={(e) => {
        if (!active) e.target.style.color = P;
      }}
    >
      {label}
    </motion.button>
  );
}

function DesktopNav({ active, scrolled }) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        backgroundColor: scrolled ? "rgba(11,16,18,0.92)" : "rgba(11,16,18,0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        transition: "background-color 0.3s, border-color 0.3s",
      }}
    >
      <button
        onClick={() => scrollToSection(document.getElementById("hero"))}
        aria-label="Go to top"
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: T,
          fontSize: 16,
          fontWeight: 800,
          cursor: "pointer",
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        }}
      >
        {profile.name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {navigation.map((n) => (
          <NavLink
            key={n.id}
            label={n.label}
            active={active === n.id}
            onClick={() => scrollToSection(document.getElementById(n.id))}
          />
        ))}
      </div>
    </motion.nav>
  );
}

function MobileMenu({ open, active, onClose }) {
  const panelRef = useRef(null);
  useFocusTrap(open, panelRef);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(0,0,0,0.55)" }}
          />
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: 64,
              right: 0,
              bottom: 0,
              width: "min(288px, 85vw)",
              background: "rgba(11,16,18,0.97)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "-10px 0 40px rgba(0,0,0,0.3)",
              zIndex: 61,
              padding: "12px 16px",
              overflowY: "auto",
            }}
          >
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              onClick={() => {
                scrollToSection(document.getElementById("hero"));
                onClose();
              }}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                minHeight: 44,
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 500,
                color: T,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Home
            </motion.button>
            {navigation.map((n, i) => (
              <motion.button
                key={n.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => {
                  scrollToSection(document.getElementById(n.id));
                  onClose();
                }}
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  minHeight: 44,
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 500,
                  color: active === n.id ? T : P,
                  background: active === n.id ? "rgba(255,255,255,0.08)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                {n.label}
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileNav({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        background: "rgba(11,16,18,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={() => scrollToSection(document.getElementById("hero"))}
        aria-label="Go to top"
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: T,
          fontSize: 16,
          fontWeight: 800,
          cursor: "pointer",
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        }}
      >
        {profile.name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </button>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
          color: open ? T : "#9ca9b0",
          cursor: "pointer",
        }}
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <MobileMenu open={open} active={active} onClose={() => setOpen(false)} />
    </motion.nav>
  );
}

export default function Navbar() {
  const { isMobile } = useResponsive();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...navigation.map((n) => n.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  if (isMobile) return <MobileNav active={active} />;
  return <DesktopNav active={active} scrolled={scrolled} />;
}
