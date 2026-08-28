import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { profile } from "../data/portfolio.js";
import { useResponsive } from "../lib/hooks.jsx";

export default function VisitsBadge() {
  const { isMobile } = useResponsive();
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (isMobile) return;
    let cancelled = false;
    fetch(`https://api.counterapi.dev/v1/${profile.site.counter_namespace}/visits/up`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data && typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 2.5 }}
      whileHover={{ y: -2, borderColor: "rgba(34,197,94,0.3)" }}
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 50,
        borderRadius: 9999,
        background: "rgba(15,15,35,0.7)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#22c55e",
          animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 11,
          color: "rgba(244,246,247,0.85)",
          letterSpacing: "0.05em",
        }}
      >
        {count !== null ? `${count} visits` : "ALL SYSTEMS NOMINAL"}
      </span>
    </motion.div>
  );
}
