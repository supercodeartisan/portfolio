import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";
import { FiX } from "react-icons/fi";
import { useFocusTrap, useResponsive } from "../lib/hooks.jsx";
import { easings } from "../lib/variants.js";

export default function Modal({
  isOpen,
  onClose,
  closeLabel = "Close",
  titleId,
  children,
  maxWidth = 720,
}) {
  const { isMobile } = useResponsive();
  const panelRef = useRef(null);
  const lenis = useLenis();
  useFocusTrap(isOpen, panelRef);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      if (lenis) lenis.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, lenis, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          />
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 201,
              display: "flex",
              alignItems: isMobile ? "flex-end" : "center",
              justifyContent: "center",
              padding: isMobile ? 0 : 24,
              pointerEvents: "none",
            }}
          >
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, y: isMobile ? 80 : 50, scale: isMobile ? 1 : 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isMobile ? 80 : 50, scale: isMobile ? 1 : 0.95 }}
              transition={{ duration: 0.4, ease: easings.cinematic }}
              style={{
                pointerEvents: "auto",
                width: "100%",
                maxWidth: isMobile ? "100%" : `min(${maxWidth}px, calc(100vw - 48px))`,
                maxHeight: isMobile ? "92dvh" : "85vh",
                minWidth: 0,
                background: "#0e1417",
                borderRadius: isMobile ? "20px 20px 0 0" : 20,
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                overflowY: "auto",
                overflowX: "hidden",
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
                position: "relative",
                paddingBottom: isMobile ? "env(safe-area-inset-bottom)" : 0,
              }}
            >
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 5,
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: isMobile ? "10px 10px 0" : "12px 12px 0",
                  background: "linear-gradient(to bottom, rgba(14,20,23,0.98), rgba(14,20,23,0))",
                }}
              >
                <button
                  onClick={onClose}
                  aria-label={closeLabel}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: isMobile ? 44 : 36,
                    height: isMobile ? 44 : 36,
                    borderRadius: isMobile ? 12 : 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(14,20,23,0.92)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    color: "#f4f6f7",
                    cursor: "pointer",
                    touchAction: "manipulation",
                  }}
                >
                  <FiX size={isMobile ? 18 : 16} />
                </button>
              </div>
              <div style={{ padding: isMobile ? "0 16px 24px" : "0 20px 24px", minWidth: 0 }}>{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
