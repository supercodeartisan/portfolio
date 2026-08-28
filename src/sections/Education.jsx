import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbSchool, TbMapPin, TbAward, TbChevronDown, TbFileText } from "react-icons/tb";
import PageSection from "../components/PageSection.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { education } from "../data/portfolio.js";
import { useResponsive, useInViewSimple } from "../lib/hooks.jsx";
import { timelineEven, timelineOdd, fadeUpQuick, easings } from "../lib/variants.js";

const MONO = "'JetBrains Mono', ui-monospace, monospace";
const ACCENT = "#38bdf8";
const T = "#f4f6f7";
const P = "#9ca9b0";
const MUTED = "#8a97a0";
const GREEN = "#22c55e";

function InstitutionHeader({ institution }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 10,
          background: "rgba(56,189,248,0.1)",
          border: "1px solid rgba(56,189,248,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <TbSchool size={14} style={{ color: ACCENT }} />
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: T, lineHeight: 1.2, margin: 0, overflow: "hidden", textOverflow: "ellipsis" }}>{institution}</h3>
    </div>
  );
}

function CgpaBadge({ cgpa, isMobile }) {
  if (!cgpa) return null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 12px",
        borderRadius: 10,
        background: "rgba(34,197,94,0.06)",
        border: "1px solid rgba(34,197,94,0.12)",
        ...(isMobile ? { alignSelf: "flex-start" } : { flexShrink: 0 }),
      }}
    >
      <span style={{ color: GREEN, fontWeight: 700, fontSize: 16, fontFamily: MONO }}>
        <AnimatedCounter value={cgpa} />
      </span>
    </div>
  );
}

function TopRow({ item, isMobile, marginLeft }) {
  if (isMobile) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <InstitutionHeader institution={item.institution} />
        <p style={{ color: "#60a5fa", fontWeight: 600, fontSize: 14, margin: 0 }}>{item.title}</p>
        <CgpaBadge cgpa={item.cgpa} isMobile />
      </div>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        <InstitutionHeader institution={item.institution} />
        <p style={{ color: "#60a5fa", fontWeight: 600, fontSize: 14, marginTop: 4, marginLeft: marginLeft, marginBottom: 0 }}>{item.title}</p>
      </div>
      <CgpaBadge cgpa={item.cgpa} isMobile={false} />
    </div>
  );
}

function Achievements({ item, marginLeft }) {
  const [open, setOpen] = useState(false);
  const achievements = item.achievements ?? [];
  const hasSkills = (item.skills?.length ?? 0) > 0;

  if (!hasSkills && achievements.length === 0) return null;

  return (
    <>
      {hasSkills && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 12, marginLeft }}>
          {item.skills.map((s) => (
            <span key={s} style={{ fontFamily: MONO, fontSize: 11, padding: "3px 8px", borderRadius: 6, background: "rgba(56,189,248,0.08)", color: ACCENT, border: "1px solid rgba(56,189,248,0.15)" }}>
              {s}
            </span>
          ))}
        </div>
      )}
      {achievements.length > 0 && (
        <div style={{ marginLeft, marginTop: 12 }}>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 10,
              background: "rgba(245,158,11,0.05)",
              border: "1px solid rgba(245,158,11,0.12)",
              cursor: "pointer",
              color: MUTED,
              fontSize: 12,
              fontWeight: 500,
              transition: "all 0.2s ease",
              width: "100%",
            }}
          >
            <TbAward size={13} style={{ color: "#f59e0b", flexShrink: 0 }} />
            <span style={{ flex: 1, textAlign: "left" }}>{achievements.length} Achievements</span>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <TbChevronDown size={14} />
            </motion.div>
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: easings.cinematic }}
                style={{ overflow: "hidden" }}
              >
                <ul style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8, listStyle: "none", padding: 0 }}>
                  {achievements.map((a) => (
                    <li key={a} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "rgba(245,158,11,0.5)", marginTop: 8, flexShrink: 0 }} />
                      <span style={{ color: P, fontSize: 12, lineHeight: 1.7 }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

function ItemBody({ item, isMobile }) {
  const marginLeft = isMobile ? 0 : 38;
  return (
    <>
      <TopRow item={item} isMobile={isMobile} marginLeft={marginLeft} />
      {(item.board || item.field || item.department) && (
        <div style={{ marginLeft, marginTop: 4 }}>
          {item.department && (
            <p style={{ color: MUTED, fontSize: 12, display: "flex", alignItems: "center", gap: 4, margin: 0 }}>
              <TbFileText size={12} style={{ flexShrink: 0 }} /> {item.department}
            </p>
          )}
          {item.board && <p style={{ color: MUTED, fontSize: 12, marginTop: 3, margin: 0 }}>{item.board}</p>}
          {item.field && <p style={{ color: MUTED, fontSize: 12, marginTop: 3, margin: 0 }}>{item.field}</p>}
        </div>
      )}
      <Achievements item={item} marginLeft={marginLeft} />
    </>
  );
}

function GrowingDot() {
  const ref = useRef(null);
  const inView = useInViewSimple(ref, { margin: "0px 0px -50px 0px" });
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          border: `2px solid ${ACCENT}`,
          backgroundColor: "rgba(6, 6, 16, 0.6)",
          marginTop: 4,
          position: "relative",
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        <div className="animate-glow-pulse" style={{ position: "absolute", inset: 3, borderRadius: "50%", backgroundColor: ACCENT }} />
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{ width: 2, flex: 1, background: "linear-gradient(to bottom, rgba(56,189,248,0.4), rgba(56,189,248,0.1))", borderRadius: 4, transformOrigin: "top" }}
      />
    </div>
  );
}

function EducationItem({ item, index, isMobile }) {
  if (isMobile) {
    return (
      <motion.div
        variants={fadeUpQuick}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        style={{ marginBottom: 20 }}
      >
        <div className="glass-card" style={{ padding: "20px 16px", borderLeft: `3px solid ${ACCENT}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontFamily: MONO, fontSize: 12, fontWeight: 600, color: ACCENT }}>{item.date.split(" - ")[0]}</span>
            {item.date.includes(" - ") && (
              <span style={{ fontFamily: MONO, fontSize: 11, color: MUTED }}>â€” {item.date.split(" - ")[1]}</span>
            )}
            {item.location && (
              <span style={{ color: MUTED, fontSize: 12, display: "flex", alignItems: "center", gap: 4, marginLeft: "auto" }}>
                <TbMapPin size={11} style={{ flexShrink: 0 }} /> {item.location}
              </span>
            )}
          </div>
          <ItemBody item={item} isMobile />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ display: "grid", gridTemplateColumns: "240px 40px 1fr", gap: 0 }}
      variants={index % 2 === 0 ? timelineEven : timelineOdd}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    >
      <div style={{ paddingTop: 4, textAlign: "right", paddingRight: 20 }}>
        <span style={{ fontFamily: MONO, fontSize: 12, fontWeight: 600, color: ACCENT }}>{item.date.split(" - ")[0]}</span>
        <span style={{ display: "block", fontFamily: MONO, fontSize: 11, color: "#76838b", marginTop: 2 }}>
          {item.date.includes(" - ") ? item.date.split(" - ")[1] : ""}
        </span>
        {item.location && (
          <p style={{ color: MUTED, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 4, marginTop: 12, marginBottom: 0 }}>
            <TbMapPin size={11} style={{ flexShrink: 0 }} /> {item.location}
          </p>
        )}
      </div>
      <GrowingDot />
      <div className="glass-card" style={{ padding: "24px 24px", marginBottom: 20 }}>
        <ItemBody item={item} isMobile={false} />
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  const { isMobile } = useResponsive();
  return (
    <PageSection id="education" title="Education" maxWidth={960}>
      <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -60px 0px" }}>
        {education.map((item, i) => (
          <EducationItem key={item.id} item={item} index={i} isMobile={isMobile} />
        ))}
      </motion.div>
    </PageSection>
  );
}
