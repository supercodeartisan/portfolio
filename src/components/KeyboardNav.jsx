import { useEffect } from "react";
import { navigation } from "../data/portfolio.js";
import { scrollToSection } from "../lib/hooks.jsx";

const ORDER = ["hero", ...navigation.map((n) => n.id)];

function isEditable(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

export default function KeyboardNav() {
  useEffect(() => {
    const onKeyDown = (e) => {
      const active = document.activeElement;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (isEditable(active)) return;

      const getCurrentIndex = () => {
        const y = window.scrollY + window.innerHeight * 0.35;
        let index = 0;
        ORDER.forEach((id, i) => {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top + window.scrollY < y) index = i;
        });
        return index;
      };

      const go = (i) => {
        if (i < 0) i = 0;
        if (i >= ORDER.length) i = ORDER.length - 1;
        const el = document.getElementById(ORDER[i]);
        if (el) scrollToSection(el);
      };

      if (e.key === "0" || e.key === "t" || e.key === "T") {
        go(0);
      } else if (/^[1-9]$/.test(e.key)) {
        const idx = Number(e.key);
        if (idx < ORDER.length) go(idx);
      } else if (e.key === "j" || e.key === "J") {
        go(getCurrentIndex() + 1);
      } else if (e.key === "k" || e.key === "K") {
        go(getCurrentIndex() - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
