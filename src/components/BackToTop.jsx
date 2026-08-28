import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowUp } from "react-icons/fi";
import { scrollToSection, useResponsive } from "../lib/hooks.jsx";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          whileHover={{
            y: -2,
            borderColor: "rgba(34,211,238,0.3)",
            boxShadow: "0 0 25px rgba(96,165,250,0.15), 0 4px 20px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection(document.getElementById("hero"), 0)}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: isMobile ? 20 : 32,
            right: isMobile ? 20 : 32,
            zIndex: 50,
            width: 44,
            height: 44,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(11,16,18,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "#f4f6f7",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
