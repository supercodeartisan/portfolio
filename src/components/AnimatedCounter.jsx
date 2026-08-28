import { useEffect, useRef, useState } from "react";
import { useInViewSimple } from "../lib/hooks";

// Counts up from 0 to the numeric value of `value` (e.g. "1500+") over `duration` seconds.
export default function AnimatedCounter({ value, duration = 2 }) {
  const match = /^([0-9]+)([.,](\d+))?(.*)$/.exec(String(value).trim());
  const target = match ? parseInt(match[1], 10) : 0;
  const decimals = match && match[3] ? Math.min(match[3].length, 2) : 0;
  const suffix = match ? (match[4] ?? "") : "";

  const ref = useRef(null);
  const inView = useInViewSimple(ref, { threshold: 0.5, amount: "some", once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span
      ref={ref}
      className="font-mono text-3xl font-bold text-accent-cyan tabular-nums"
      style={{ color: "#60a5fa", fontWeight: 700, fontSize: 30, fontVariantNumeric: "tabular-nums" }}
    >
      {display.toFixed(decimals)}
      {suffix && (
        <span
          style={{
            color: "rgba(96, 165, 250, 0.7)",
            fontSize: suffix.length > 1 ? "0.5em" : "0.7em",
            fontWeight: 600,
          }}
        >
          {suffix}
        </span>
      )}
    </span>
  );
}
