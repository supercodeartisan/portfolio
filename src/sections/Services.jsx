import { useCallback, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { TbCode, TbBrain, TbCloud, TbRobot, TbSparkles, TbSettings, TbUsers } from "react-icons/tb";
import PageSection from "../components/PageSection.jsx";
import { services } from "../data/portfolio.js";
import { tightStagger } from "../lib/variants.js";
import { useResponsive } from "../lib/hooks";

const MONO = "'JetBrains Mono', monospace";

const C_WHITE = "#f4f6f7";
const C_AMBER = "#f59e0b";
const C_GREEN = "#22c55e";
const C_BLUE = "#2563eb";
const C_CYAN = "#38bdf8";

const SERVICE_ICONS = {
  "Full-Stack Engineering": TbCode,
  "AI Engineering": TbBrain,
  "Cloud & DevOps": TbCloud,
  "AI Agents & Automation": TbRobot,
  "Machine Learning": TbSparkles,
  "Software Engineering": TbSettings,
  "Open Source & Collaboration": TbUsers,
};

const CARD_COLORS = [
  { iconBg: "rgba(96,165,250,0.1)", icon: "#60a5fa", dot: "#60a5fa", borderHover: "rgba(96,165,250,0.4)" },
  { iconBg: "rgba(56,189,248,0.1)", icon: "#38bdf8", dot: "#38bdf8", borderHover: "rgba(56,189,248,0.4)" },
  { iconBg: "rgba(34,197,94,0.1)", icon: "#22c55e", dot: "#22c55e", borderHover: "rgba(34,197,94,0.4)" },
  { iconBg: "rgba(245,158,11,0.1)", icon: "#f59e0b", dot: "#f59e0b", borderHover: "rgba(245,158,11,0.4)" },
];

function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  return useSyncExternalStore(
    (onChange) => {
      if (globalThis.window == null) return () => {};
      const mql = globalThis.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => (globalThis.window == null ? false : globalThis.matchMedia(query).matches),
    () => false
  );
}

function TiltCard({ children, className = "", style = {}, tilt = true, glow = true, borderGlow = true, ...rest }) {
  const ref = useRef(null);
  const inFlight = useRef(false);
  const reduced = usePrefersReducedMotion();
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = useCallback(
    (e) => {
      if (reduced || !ref.current || inFlight.current) return;
      const cx = e.clientX;
      const cy = e.clientY;
      inFlight.current = true;
      requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setPointer({ x: (cx - rect.left) / rect.width, y: (cy - rect.top) / rect.height });
        }
        inFlight.current = false;
      });
    },
    [reduced]
  );

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => {
    setHovered(false);
    setPointer({ x: 0.5, y: 0.5 });
  }, []);

  const transform = useMemo(
    () =>
      !tilt || !hovered || reduced
        ? "perspective(800px) rotateX(0deg) rotateY(0deg)"
        : `perspective(800px) rotateX(${(pointer.y - 0.5) * -8}deg) rotateY(${(pointer.x - 0.5) * 8}deg)`,
    [tilt, hovered, reduced, pointer]
  );

  const glowStyle = useMemo(
    () =>
      !glow || !hovered || reduced
        ? { opacity: 0 }
        : {
            opacity: 1,
            background: `radial-gradient(350px circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgb(var(--ch-cyan) / 0.08), transparent 60%)`,
          },
    [glow, hovered, reduced, pointer]
  );

  return (
    <motion.div
      ref={ref}
      className={`glass-card ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        transform,
        transition: hovered
          ? "transform 0.15s ease-out, border-color 0.3s ease"
          : "transform 0.4s ease-out, border-color 0.3s ease",
        willChange: hovered ? "transform" : "auto",
        ...(borderGlow && hovered ? { borderColor: "rgb(var(--ch-cyan) / 0.2)" } : {}),
        ...style,
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {glow && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            transition: "opacity 0.3s ease",
            zIndex: 0,
            ...glowStyle,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}

function FullStackGraphic({ color }) {
  return (
    <div style={{ width: 80, height: 80, position: "relative" }}>
      <div style={{ position: "absolute", top: 2, left: 2, width: 36, height: 22, borderRadius: 4, border: "1px solid #60a5fa30", background: "#60a5fa06", overflow: "hidden" }}>
        <div style={{ height: 7, background: "#60a5fa0a", borderBottom: "1px solid #60a5fa18" }} />
        <div style={{ padding: "3px 4px", display: "flex", flexDirection: "column", gap: 2 }}>
          <motion.div animate={{ width: ["0%", "80%", "80%", "0%"] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.8, 1] }} style={{ height: 2, borderRadius: 4, background: "#60a5fa40" }} />
          <motion.div animate={{ width: ["0%", "55%", "55%", "0%"] }} transition={{ duration: 3.5, delay: 0.15, repeat: Infinity, times: [0, 0.2, 0.8, 1] }} style={{ height: 2, borderRadius: 4, background: "#60a5fa25" }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: 30, left: 22, width: 36, height: 16, borderRadius: 4, border: "1px solid #38bdf830", background: "#38bdf806", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 6, fontFamily: MONO, fontWeight: 700, color: C_WHITE }}>{"{ API }"}</span>
      </div>
      <div style={{ position: "absolute", top: 54, left: 38, width: 32, height: 18, borderRadius: "4px 4px 10px 10px", border: "1px solid #22c55e30", background: "#22c55e06", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 6, fontFamily: MONO, fontWeight: 700, color: C_GREEN }}>DB</span>
      </div>
      <motion.div animate={{ left: [18, 28], top: [18, 32] }} transition={{ duration: 0.7, delay: 0.3, repeat: Infinity, repeatDelay: 2.9, ease: "easeInOut" }} style={{ position: "absolute", width: 5, height: 5, borderRadius: "50%", background: color, boxShadow: `0 0 8px ${color}` }} />
      <motion.div animate={{ left: [38, 50], top: [42, 56] }} transition={{ duration: 0.7, delay: 1.1, repeat: Infinity, repeatDelay: 2.9, ease: "easeInOut" }} style={{ position: "absolute", width: 4, height: 4, borderRadius: "50%", background: C_WHITE, boxShadow: "0 0 6px #38bdf880" }} />
      <motion.div animate={{ left: [54, 40, 12], top: [58, 38, 14] }} transition={{ duration: 1, delay: 2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }} style={{ position: "absolute", width: 4, height: 4, borderRadius: "50%", background: C_GREEN, boxShadow: "0 0 6px #22c55e80" }} />
      <motion.div animate={{ opacity: [0, 0, 0, 1, 0], scale: [0.5, 0.5, 0.5, 1, 0.5] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.7, 0.8, 0.88, 1] }} style={{ position: "absolute", top: 4, left: 28, fontSize: 8, color: C_GREEN, fontWeight: 800, fontFamily: MONO }}>
        200
      </motion.div>
    </div>
  );
}

const TERMINAL_LINES = [
  { text: "$ git push", delay: 0, color: "rgba(255,255,255,0.5)" },
  { text: "  building...", delay: 0.8, color: C_AMBER },
  { text: "  testing...", delay: 1.8, color: C_WHITE },
  { text: "  deployed", delay: 2.8, color: C_GREEN },
];
const TERMINAL_DURATION = 5;

function CloudGraphic({ color }) {
  return (
    <div style={{ width: 80, height: 80, borderRadius: 6, border: `1px solid ${color}20`, background: `${color}04`, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 10, background: `${color}08`, borderBottom: `1px solid ${color}15`, display: "flex", alignItems: "center", gap: 3, paddingLeft: 5 }}>
        {[0, 1, 2].map((i) => (
          <div key={`dot-${i}`} style={{ width: 3, height: 3, borderRadius: "50%", background: `${color}30` }} />
        ))}
        <span style={{ marginLeft: 4, fontSize: 5, fontFamily: MONO, fontWeight: 600, color: `${color}50` }}>terminal</span>
      </div>
      <div style={{ flex: 1, padding: "4px 4px", display: "flex", flexDirection: "column", gap: 3, justifyContent: "center" }}>
        {TERMINAL_LINES.map((item) => (
          <motion.div
            key={item.text}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: TERMINAL_DURATION, repeat: Infinity, times: [0, item.delay / TERMINAL_DURATION, (item.delay + 0.3) / TERMINAL_DURATION, 0.85, 0.95] }}
            style={{ display: "flex", alignItems: "center", gap: 3, overflow: "hidden", whiteSpace: "nowrap" }}
          >
            {item.text.includes("deployed") && <span style={{ fontSize: 7, color: "#22c55e" }}>✓</span>}
            <span style={{ fontSize: 7, fontFamily: MONO, fontWeight: 600, color: item.color }}>{item.text}</span>
          </motion.div>
        ))}
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: 5, height: 8, background: `${color}60`, borderRadius: 4, marginTop: 2 }} />
      </div>
    </div>
  );
}

const NETWORK_COLS = [
  [{ x: 12, y: 26 }, { x: 12, y: 50 }],
  [{ x: 36, y: 16 }, { x: 36, y: 38 }, { x: 36, y: 60 }],
  [{ x: 60, y: 26 }, { x: 60, y: 50 }],
];
const DOT_R = 4;

function MLGraphic({ color }) {
  const links = [];
  let delay = 0;
  for (let a = 0; a < NETWORK_COLS.length - 1; a++) {
    for (const from of NETWORK_COLS[a]) {
      for (const to of NETWORK_COLS[a + 1]) {
        links.push({ from, to, delay: delay * 0.1 });
        delay++;
      }
    }
  }
  return (
    <div style={{ width: 80, height: 80, position: "relative" }}>
      {links.map((link) => {
        const dx = link.to.x - link.from.x;
        const dy = link.to.y - link.from.y;
        const len = Math.hypot(dx, dy);
        const ang = Math.atan2(dy, dx) * (180 / Math.PI);
        return (
          <motion.div
            key={`${link.from.x}-${link.from.y}-${link.to.x}-${link.to.y}`}
            animate={{ opacity: [0.06, 0.4, 0.06] }}
            transition={{ duration: 2, delay: link.delay, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", left: link.from.x, top: link.from.y, width: len, height: 1, background: color, transformOrigin: "0 50%", transform: `rotate(${ang}deg)` }}
          />
        );
      })}
      {NETWORK_COLS.flat().map((node, i) => (
        <motion.div
          key={`${node.x}-${node.y}`}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", left: node.x - DOT_R, top: node.y - DOT_R, width: DOT_R * 2, height: DOT_R * 2, borderRadius: "50%", background: `${color}25`, border: `1px solid ${color}` }}
        />
      ))}
    </div>
  );
}

const CHAT_BUBBLE = { padding: "4px 8px", borderRadius: 10, fontSize: 9, fontFamily: MONO, fontWeight: 600, maxWidth: 56, lineHeight: 1.2 };

function AgentsGraphic({ color }) {
  return (
    <div style={{ width: 80, height: 80, display: "flex", flexDirection: "column", justifyContent: "center", gap: 4, padding: "0 4px" }}>
      <motion.div animate={{ x: [-20, 0, 0, 0], opacity: [0.2, 1, 1, 0.2] }} transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.08, 0.65, 0.8], ease: "easeOut" }} style={{ ...CHAT_BUBBLE, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", alignSelf: "flex-start" }}>
        build this
      </motion.div>
      <motion.div animate={{ x: [15, 0, 0, 0], opacity: [0.1, 0.1, 1, 0.2] }} transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.2, 0.3, 0.8], ease: "easeOut" }} style={{ ...CHAT_BUBBLE, background: `${color}10`, border: `1px solid ${color}25`, color, alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 3 }}>
        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }}>on it</motion.span>
        <span style={{ fontSize: 7 }}>✓</span>
      </motion.div>
      <motion.div animate={{ y: [8, 0, 0, 0], opacity: [0.1, 0.1, 1, 0.2] }} transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.8], ease: "easeOut" }} style={{ ...CHAT_BUBBLE, background: `${color}08`, border: `1px solid ${color}15`, color: `${color}cc`, alignSelf: "flex-end", fontSize: 8 }}>
        {"{ done }"}
      </motion.div>
    </div>
  );
}

const AWS_X = 40;
const AWS_Y = 38;
const AWS_R = 24;
const AWS_NODES = [
  { angle: -90, label: "VPC" },
  { angle: 30, label: "ECS" },
  { angle: 150, label: "S3" },
];

function SEGraphic({ color }) {
  return (
    <div style={{ width: 80, height: 80, position: "relative" }}>
      {AWS_NODES.map((n) => {
        const rad = (n.angle * Math.PI) / 180;
        const ex = AWS_X + AWS_R * Math.cos(rad);
        const ey = AWS_Y + AWS_R * Math.sin(rad);
        const dx = ex - AWS_X;
        const dy = ey - AWS_Y;
        const len = Math.hypot(dx, dy);
        const ang = Math.atan2(dy, dx) * (180 / Math.PI);
        return (
          <motion.div
            key={n.label}
            animate={{ opacity: [0.12, 0.5, 0.12] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", left: AWS_X, top: AWS_Y, width: len, height: 1, background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} 3px, transparent 3px, transparent 6px)`, transformOrigin: "0 50%", transform: `rotate(${ang}deg)` }}
          />
        );
      })}
      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", left: AWS_X - 10, top: AWS_Y - 10, width: 20, height: 20, borderRadius: "50%", background: `${color}20`, border: `1.5px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 6, fontFamily: MONO, fontWeight: 700, color }}>
        AWS
      </motion.div>
      {AWS_NODES.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const ox = AWS_X + AWS_R * Math.cos(rad);
        const oy = AWS_Y + AWS_R * Math.sin(rad);
        return (
          <motion.div
            key={n.label}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", left: ox - 8, top: oy - 8, width: 16, height: 16, borderRadius: "50%", background: `${color}12`, border: `1px solid ${color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 5, fontFamily: MONO, fontWeight: 600, color: `${color}cc` }}
          >
            {n.label}
          </motion.div>
        );
      })}
      <motion.div animate={{ scale: [0.5, 2.5], opacity: [0.4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} style={{ position: "absolute", left: AWS_X - 10, top: AWS_Y - 10, width: 20, height: 20, borderRadius: "50%", border: `0.5px solid ${color}`, pointerEvents: "none" }} />
    </div>
  );
}

const BARS = [
  { h: 50, color: C_BLUE },
  { h: 20, color: C_WHITE },
  { h: 40, color: C_GREEN },
  { h: 10, color: C_AMBER },
  { h: 30, color: C_CYAN },
];
const BAR_W = 8;
const BAR_BOTTOM = 72;
const BAR_LEFT = 6;
const BAR_PERMS = [
  [0, 1, 2, 3, 4],
  [1, 0, 2, 3, 4],
  [1, 2, 0, 3, 4],
  [1, 2, 3, 0, 4],
  [1, 2, 3, 4, 0],
  [1, 3, 2, 4, 0],
  [1, 3, 4, 2, 0],
  [3, 1, 4, 2, 0],
];
const barLeft = (i) => BAR_LEFT + i * 14;

function OSGraphic({ color }) {
  return (
    <div style={{ width: 80, height: 80, position: "relative" }}>
      {BARS.map((bar, idx) => {
        const keys = BAR_PERMS.map((perm) => barLeft(perm.indexOf(idx)));
        return (
          <motion.div
            key={`bar-${bar.h}`}
            animate={{ left: keys }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut", times: BAR_PERMS.map((_, s) => s / (BAR_PERMS.length - 1)) }}
            style={{ position: "absolute", top: BAR_BOTTOM - bar.h, width: BAR_W, height: bar.h, borderRadius: 4, background: `${bar.color}35`, borderTop: `2px solid ${bar.color}` }}
          />
        );
      })}
      <div style={{ position: "absolute", left: 4, top: 74, right: 4, height: 1, background: `${color}15` }} />
    </div>
  );
}

const SPEC_FONT = { fontFamily: MONO, fontSize: 6, fontWeight: 700, letterSpacing: 0.6 };
const AGENT_ROWS = [16, 36, 56];
const SPEC_DURATION = 5;

function AIGraphic({ color }) {
  return (
    <div style={{ width: 80, height: 80, position: "relative" }}>
      <div style={{ position: "absolute", top: 4, left: 4, width: 30, height: 22, borderRadius: 4, border: `1px solid ${color}35`, background: `${color}06`, padding: "4px 4px 0" }}>
        <span style={{ ...SPEC_FONT, color: `${color}cc` }}>SPEC</span>
        <motion.div animate={{ width: ["0%", "85%", "85%", "0%"] }} transition={{ duration: SPEC_DURATION, repeat: Infinity, times: [0, 0.18, 0.85, 1] }} style={{ height: 2, marginTop: 2, borderRadius: 2, background: `${color}50` }} />
      </div>
      {AGENT_ROWS.map((row, i) => (
        <motion.span
          key={`pulse-${row}`}
          animate={{ x: [0, 26], y: [0, row - 14], opacity: [0, 1, 0] }}
          transition={{ duration: SPEC_DURATION * 0.3, repeat: Infinity, repeatDelay: SPEC_DURATION * 0.7, delay: SPEC_DURATION * 0.18 + i * 0.15, ease: "easeOut" }}
          style={{ position: "absolute", left: 32, top: 14, width: 3, height: 3, borderRadius: "50%", background: color }}
        />
      ))}
      {AGENT_ROWS.map((row, i) => (
        <motion.div
          key={`agent-${row}`}
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.35 }}
          style={{ position: "absolute", left: 56, top: row - 3, width: 9, height: 9, borderRadius: 3, border: `1px solid ${color}60`, background: `${color}15` }}
        />
      ))}
      <span style={{ ...SPEC_FONT, position: "absolute", left: 50, top: 62, color: `${color}90` }}>AGENTS</span>
      {AGENT_ROWS.map((row, i) => (
        <motion.span
          key={`ship-${row}`}
          animate={{ x: [0, -34], y: [0, 62 - row], opacity: [0, 1, 0] }}
          transition={{ duration: SPEC_DURATION * 0.25, repeat: Infinity, repeatDelay: SPEC_DURATION * 0.75, delay: SPEC_DURATION * 0.6 + i * 0.12, ease: "easeIn" }}
          style={{ position: "absolute", left: 58, top: row, width: 3, height: 3, borderRadius: "50%", background: C_GREEN }}
        />
      ))}
      <motion.div animate={{ opacity: [0.35, 0.35, 1, 1, 0.35], scale: [1, 1, 1.15, 1, 1] }} transition={{ duration: SPEC_DURATION, repeat: Infinity, times: [0, 0.72, 0.78, 0.9, 1] }} style={{ position: "absolute", left: 6, top: 56, display: "flex", alignItems: "center", gap: 3, padding: "2px 5px", borderRadius: 4, border: `1px solid ${C_GREEN}40`, background: `${C_GREEN}0a` }}>
        <span style={{ ...SPEC_FONT, color: C_GREEN }}>✓ SHIP</span>
      </motion.div>
    </div>
  );
}

const SERVICE_GRAPHICS = {
  "Full-Stack Engineering": FullStackGraphic,
  "Cloud & DevOps": CloudGraphic,
  "AI Engineering": AIGraphic,
  "AI Agents & Automation": AgentsGraphic,
  "Machine Learning": MLGraphic,
  "Software Engineering": SEGraphic,
  "Open Source & Collaboration": OSGraphic,
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30, rotate: -1 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function ServiceCard({ service, index }) {
  const [hover, setHover] = useState(false);
  const { isMobile } = useResponsive();
  const colors = CARD_COLORS[index % CARD_COLORS.length];
  const Icon = SERVICE_ICONS[service.title] ?? TbCode;
  const Graphic = SERVICE_GRAPHICS[service.title];

  return (
    <TiltCard
      style={{ padding: 0, overflow: "hidden" }}
      variants={CARD_VARIANTS}
      whileHover={{ y: -6, boxShadow: `0 12px 40px ${colors.borderHover}`, transition: { duration: 0.4 } }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <div
          style={{
            width: isMobile ? "100%" : 150,
            minHeight: isMobile ? 100 : "auto",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `${colors.icon}06`,
            borderRight: isMobile ? "none" : `1px solid ${colors.icon}12`,
            borderBottom: isMobile ? `1px solid ${colors.icon}12` : "none",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 50% 50%, ${colors.iconBg}, transparent 70%)`,
              opacity: hover ? 0.5 : 0.2,
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            }}
          />
          {Graphic ? (
            <div style={{ transform: "scale(1.8)", transformOrigin: "center" }}>
              <Graphic color={colors.icon} />
            </div>
          ) : null}
        </div>
        <div style={{ flex: 1, padding: "16px 20px" }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: C_WHITE, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
            <Icon style={{ width: 16, height: 16, color: colors.icon, flexShrink: 0 }} />
            {service.title}
          </h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {(service.list ?? []).map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#9ca9b0", fontSize: 12, lineHeight: 1.5 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", marginTop: 8, flexShrink: 0, backgroundColor: colors.dot }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TiltCard>
  );
}

export default function Services() {
  const { isMobile } = useResponsive();
  return (
    <PageSection id="services" title="Services" maxWidth={1200}>
      <motion.div
        style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 20, gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)" }}
        variants={tightStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </motion.div>
    </PageSection>
  );
}
