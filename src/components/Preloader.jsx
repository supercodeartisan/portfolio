import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "../data/portfolio.js";

const MONO = "'JetBrains Mono', ui-monospace, monospace";

function PreloaderContent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 800;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 2); // easeOutQuad
      setProgress(Math.min(Math.round(eased * 100), 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      style={{ position: "fixed", inset: 0, zIndex: 202, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, pointerEvents: "none" }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          width: 72,
          height: 72,
          borderRadius: 18,
          fontSize: 28,
          fontWeight: 800,
          fontFamily: MONO,
          color: "#0b1012",
          background: "#67e8f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {initials}
      </motion.div>
      <div style={{ width: 160, height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ height: "100%", background: "#2563eb" }}
        />
      </div>
      <span style={{ fontFamily: MONO, fontSize: 12, color: "#8a97a0", opacity: 0.5 }}>
        {progress}%
      </span>
    </motion.div>
  );
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1000); // 800ms load + 200ms hold
    return () => clearTimeout(t);
  }, []);

  if (removed) return null;

  return (
    <AnimatePresence onExitComplete={() => setRemoved(true)}>
      {visible && (
        <>
          <PreloaderContent />
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            style={{ position: "fixed", top: 0, left: 0, right: 0, height: "50%", zIndex: 201, background: "rgba(6,6,16,0.98)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", borderBottom: "1px solid rgba(96,165,250,0.1)" }}
          />
          <motion.div
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: "50%", zIndex: 201, background: "rgba(6,6,16,0.98)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", borderTop: "1px solid rgba(96,165,250,0.1)" }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
