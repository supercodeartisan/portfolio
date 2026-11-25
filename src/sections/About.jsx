import { useMemo, useRef } from "react";
import { motion } from "motion/react";
import {
  TbMapPin, TbUser, TbSchool, TbLanguage, TbBulb, TbCode, TbRocket, TbHeartbeat,
  TbBriefcase, TbStar,
} from "react-icons/tb";
import PageSection from "../components/PageSection.jsx";
import { about, profile, education } from "../data/portfolio.js";
import { useResponsive, useInViewSimple } from "../lib/hooks.jsx";
import { staggerContainer, fadeUpQuick, fadeLeft, fadeRight } from "../lib/variants.js";

const MONO = "'JetBrains Mono', ui-monospace, monospace";
const T = "#f4f6f7";
const P = "#9ca9b0";
const MUTED = "#8a97a0";

// --- Animated orbit logo (matches reference About illustration) ---
const orbitIcons = [
  { Icon: TbStar, color: "#60a5fa", delay: 0, angle: 0 },
  { Icon: TbCode, color: "#22c55e", delay: 0.5, angle: 60 },
  { Icon: TbBulb, color: "#38bdf8", delay: 1, angle: 120 },
  { Icon: TbRocket, color: "#f59e0b", delay: 1.5, angle: 180 },
  { Icon: TbBriefcase, color: "#60a5fa", delay: 2, angle: 240 },
  { Icon: TbHeartbeat, color: "#38bdf8", delay: 2.5, angle: 300 },
];

const bob = (delay) => ({
  animate: { y: [-8, 8, -8], transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } },
});

function LogoCenter() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      style={{
        position: "absolute",
        inset: 34,
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, rgba(18,18,42,0.9), rgba(10,10,20,0.85))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          fontSize: 48,
          fontWeight: 800,
          fontFamily: MONO,
          background: `linear-gradient(135deg, ${P}, #60a5fa)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
        }}
      >
        {initials}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ fontFamily: MONO, fontSize: 11, color: MUTED, letterSpacing: "0.1em" }}
      >
        {"> dev"}
        <span style={{ color: "#60a5fa" }}>_</span>
      </motion.span>
    </div>
  );
}

function OrbitLogo() {
  const { isMobile } = useResponsive();
  return (
    <div style={{ width: 320, height: 320, position: "relative", margin: "0 auto", transform: isMobile ? "scale(0.8)" : undefined }}>
      <motion.div
        style={{
          position: "absolute",
          inset: 10,
          borderRadius: "50%",
          background: "conic-gradient(from 0deg, #60a5fa, #38bdf8, #22c55e, #60a5fa)",
          opacity: 0.15,
          filter: "blur(20px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: "absolute",
          inset: 30,
          borderRadius: "50%",
          padding: 2,
          background: "conic-gradient(from 0deg, #60a5fa, transparent 40%, #38bdf8, transparent 80%, #60a5fa)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "rgba(10, 10, 20, 0.8)" }} />
      </motion.div>
      <LogoCenter />
      <svg style={{ position: "absolute", inset: 0, width: 320, height: 320 }} viewBox="0 0 320 320">
        <circle cx={160} cy={160} r={130} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>
      {orbitIcons.map(({ Icon, color, delay, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const x = 160 + 130 * Math.cos(rad) - 18;
        const y = 160 + 130 * Math.sin(rad) - 18;
        return (
          <motion.div
            key={angle}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 36,
              height: 36,
              borderRadius: 10,
              background: `${color}0d`,
              border: `1px solid ${color}18`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate="animate"
            variants={bob(delay)}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{}}
            transition={{ duration: 0.7, delay: delay * 0.3 }}
          >
            <Icon size={16} style={{ color }} />
          </motion.div>
        );
      })}
    </div>
  );
}

// --- Word-by-word reveal heading ---
const tagMap = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", p: "p", span: "span" };

function WordReveal({ text, as = "span", className, style, stagger = 0.025 }) {
  const ref = useRef(null);
  const inView = useInViewSimple(ref, { margin: "0px 0px -80px 0px", once: true });
  const words = useMemo(() => {
    const counts = {};
    return text.split(" ").map((word) => {
      counts[word] = (counts[word] ?? 0) + 1;
      return {
        id: `${word}-${counts[word]}`,
        chars: word.split("").map((char, i) => ({ char, id: `${word}-${counts[word]}-${i}` })),
      };
    });
  }, [text]);

  const Tag = tagMap[as] || "span";
  let index = 0;

  return (
    <Tag ref={ref} style={{ display: "inline-block", ...style }} aria-label={text}>
      {words.map((word) => (
        <span key={word.id} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.chars.map(({ char, id }) => {
            const delay = index++ * stagger;
            return (
              <motion.span
                key={id}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay }}
              >
                {char}
              </motion.span>
            );
          })}
          {index > 0 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}

// --- Info cards ---
const infoItems = [
  { Icon: TbUser, color: "#60a5fa" },
  { Icon: TbSchool, color: "#22c55e" },
  { Icon: TbBulb, color: "#9ca9b0" },
  { Icon: TbCode, color: "#f59e0b" },
];

function InfoCard({ text, index, isMobile }) {
  const { Icon, color } = infoItems[index % infoItems.length];
  const body = text.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D]+\s*/u, "");
  return (
    <motion.div
      variants={fadeUpQuick}
      style={{
        display: "flex",
        gap: isMobile ? 10 : 14,
        alignItems: "flex-start",
        padding: isMobile ? "12px 14px" : "14px 16px",
        borderRadius: 12,
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 10,
          background: `${color}12`,
          border: `1px solid ${color}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 1,
        }}
      >
        <Icon size={16} style={{ color }} />
      </div>
      <p style={{ color: "#f4f6f7", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, margin: 0 }}>{body}</p>
    </motion.div>
  );
}

// --- Facts grid ---
function FactsGrid() {
  const { isMobile } = useResponsive();
  const facts = useMemo(() => {
    const title = profile.title;
    const edu = education[0]?.institution ?? "";
    return [
      { Icon: TbMapPin, label: "Based in", value: profile.location },
      { Icon: TbUser, label: "Role", value: title },
      { Icon: TbSchool, label: "Education", value: `${edu}` },
      { Icon: TbLanguage, label: "Languages", value: (profile.languages ?? []).map((l) => l.name).join(", ") },
    ];
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(4, 1fr)",
        gap: isMobile ? 16 : 24,
        marginTop: isMobile ? 40 : 56,
        paddingTop: isMobile ? 24 : 32,
        borderTop: "1px dashed rgba(255,255,255,0.12)",
      }}
    >
      {facts.map(({ Icon, label, value }) => (
        <motion.div
          key={label}
          variants={fadeUpQuick}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 6, minWidth: 0 }}
        >
          <Icon size={18} style={{ color: "#60a5fa" }} />
          <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#76838b" }}>
            {label}
          </span>
          <span style={{ fontSize: isMobile ? 13 : 14, fontWeight: 600, color: "#f4f6f7", lineHeight: 1.4 }}>{value}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function About() {
  const { isMobile } = useResponsive();
  const heading = about.greeting.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D]+\s*/u, "");

  return (
    <PageSection id="about" title="About Me">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 32 : 56,
            alignItems: "center",
          }}
        >
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -80px 0px" }} style={{ display: "flex", justifyContent: "center" }}>
            <OrbitLogo />
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -80px 0px" }}>
            <WordReveal
              as="h3"
              text={heading}
              style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: T, marginBottom: 16, lineHeight: 1.2 }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[about.current_role, about.education, about.specialization, about.competitive_programming].map((text, i) => (
                <InfoCard key={i} text={text} index={i} isMobile={isMobile} />
              ))}
            </div>
          </motion.div>
        </div>
        <FactsGrid />
      </div>
    </PageSection>
  );
}
