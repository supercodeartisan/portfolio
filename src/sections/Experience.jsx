import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbMapPin, TbFolder, TbSpeakerphone, TbAward, TbBriefcase } from "react-icons/tb";
import PageSection from "../components/PageSection.jsx";
import TechTag from "../components/TechTag.jsx";
import Modal from "../components/Modal.jsx";
import { professional_experience, positions_of_responsibility } from "../data/portfolio.js";
import { useResponsive } from "../lib/hooks.jsx";
import { timelineEven, timelineOdd, tightStagger, fadeUpQuick, slideLeftSkew, slideRightSkew } from "../lib/variants.js";
import { easings } from "../lib/variants.js";

const MONO = "'JetBrains Mono', ui-monospace, monospace";
const ACCENT = "#60a5fa";
const PRESENT = "#22c55e";
const T = "#f4f6f7";
const P = "#9ca9b0";
const MUTED = "#8a97a0";

const parseDate = (date) => {
  const [start, end] = String(date).split(" - ");
  return { start, end };
};
const isPresent = (date) => /present/i.test(String(date)) || !String(date).split(" - ")[1];

function CompanyHeader({ item, accentColor, isMobile, marginLeft }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 10,
            background: `${accentColor}12`,
            border: `1px solid ${accentColor}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <TbBriefcase size={14} style={{ color: accentColor }} />
        </div>
        <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: T, lineHeight: 1.2, margin: 0 }}>{item.company}</h3>
      </div>
      <p style={{ color: "#60a5fa", fontWeight: 600, fontSize: isMobile ? 14 : 15, marginTop: 4, marginLeft: marginLeft, marginBottom: 0 }}>
        {item.title}
        {item.position && (
          <span className="tag tag-purple" style={{ marginLeft: 8, verticalAlign: "middle", fontSize: 11, padding: "2px 8px" }}>
            {item.position}
          </span>
        )}
      </p>
      {item.summary && (
        <p style={{ color: P, fontSize: 12, lineHeight: 1.7, marginTop: 8, marginLeft: marginLeft, marginBottom: 0 }}>{item.summary}</p>
      )}
    </>
  );
}

function PresentDot({ dotOnly = false }) {
  const dot = (
    <span
      className="animate-glow-pulse"
      aria-hidden="true"
      style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: PRESENT, boxShadow: `0 0 6px ${PRESENT}99`, flexShrink: 0, display: "inline-block" }}
    />
  );
  return dotOnly ? dot : (
    <>
      {dot}
      <span>Present</span>
    </>
  );
}

function ExperienceModal({ experience, onClose, isMobile }) {
  const projects = experience?.projects ?? [];
  const contributions = experience?.internal_contributions ?? [];
  const achievements = experience?.internal_achievements ?? [];

  return (
    <Modal isOpen={!!experience} onClose={onClose} closeLabel="Close experience details" titleId="experience-modal-title">
      {experience && (
        <>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
            <span style={{ flexShrink: 0, display: "inline-flex", marginTop: 2 }}>
              <TbBriefcase size={isMobile ? 16 : 18} style={{ color: ACCENT }} />
            </span>
            <h2 id="experience-modal-title" style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: T, flex: 1, minWidth: 0, overflowWrap: "anywhere", margin: 0, lineHeight: 1.3 }}>
              {experience.company}
            </h2>
          </div>
          <p style={{ fontSize: isMobile ? 12 : 13, color: "#60a5fa", fontFamily: MONO, margin: 0, lineHeight: 1.5, overflowWrap: "anywhere" }}>
            {experience.title} | {experience.date}
          </p>
          <div style={{ padding: isMobile ? "16px 0 24px" : "20px 0 28px" }}>
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.4, ease: easings.cinematic }}
                style={{ marginBottom: 20, padding: isMobile ? "14px 14px" : "16px 16px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                  <TbFolder size={14} style={{ color: ACCENT, flexShrink: 0, marginTop: 3 }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: T, flex: 1, minWidth: 0, overflowWrap: "anywhere", lineHeight: 1.4 }}>{project.name}</span>
                  {project.date && (
                    <span style={{ fontSize: 10, color: MUTED, fontFamily: MONO, padding: "2px 8px", borderRadius: 6, background: "rgba(255,255,255,0.04)", flexShrink: 0, whiteSpace: isMobile ? "normal" : "nowrap" }}>
                      {project.date}
                    </span>
                  )}
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 8, listStyle: "none", padding: 0 }}>
                  {Object.entries(project.description ?? {})
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([, text]) => (
                      <li key={text} style={{ color: P, fontSize: isMobile ? 12.5 : 12, lineHeight: 1.7, display: "flex", alignItems: "flex-start", gap: 8, overflowWrap: "anywhere" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: `${ACCENT}80`, marginTop: 8, flexShrink: 0 }} />
                        {text}
                      </li>
                    ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {(project.skills ?? []).map((s) => (
                    <TechTag key={s} label={s} accent={ACCENT} size={10} />
                  ))}
                </div>
              </motion.div>
            ))}
            {contributions.length > 0 && (
              <SubList title="Internal Contributions" items={contributions} baseDelay={0.2 + projects.length * 0.12 + 0.12} accent="#60a5fa" />
            )}
            {achievements.length > 0 && (
              <SubList title="Internal Achievements" items={achievements} baseDelay={0.2 + projects.length * 0.12 + 0.24} accent="#f59e0b" award />
            )}
          </div>
        </>
      )}
    </Modal>
  );
}

function SubList({ title, items, baseDelay, accent, award }) {
  if (items.length === 0) return null;
  const iconMap = { talk: TbSpeakerphone, publication: TbFolder, program: TbAward };
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: baseDelay, duration: 0.4, ease: easings.cinematic }}
      style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <p style={{ fontSize: 11, color: MUTED, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>{title}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item) => {
          const Icon = iconMap[item.type] || TbAward;
          const color = award ? "#f59e0b" : accent;
          return (
            <div
              key={item.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 10,
                background: award ? "rgba(245,158,11,0.03)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${award ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.04)"}`,
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: 10, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={14} style={{ color }} />
              </div>
              <span style={{ fontSize: 12, color: P, flex: 1 }}>{item.title}</span>
              {item.year && <span style={{ fontSize: 10, color: MUTED, fontFamily: MONO, flexShrink: 0 }}>{item.year}</span>}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function TimelineItem({ item, index, accentColor = ACCENT, isMobile, isTablet, onClick }) {
  const { start, end } = parseDate(item.date);
  const present = isPresent(item.date);

  const hasDetails =
    (item.projects?.length ?? 0) > 0 || (item.internal_contributions?.length ?? 0) > 0;

  const body = (
    <>
      <CompanyHeader item={item} accentColor={accentColor} isMobile={isMobile} marginLeft={isMobile ? 0 : 38} />
      {hasDetails && (
        <p style={{ color: accentColor, fontSize: 12, fontWeight: 500, marginTop: 12, marginLeft: isMobile ? 0 : 38, opacity: 0.7, marginBottom: 0 }}>
          Click to view details
        </p>
      )}
    </>
  );

  const content = hasDetails ? (
    <button
      onClick={onClick}
      aria-label={`View details for ${item.company}`}
      style={{ cursor: "pointer", background: "none", border: "none", padding: 0, textAlign: "left", width: "100%", color: "inherit" }}
    >
      {body}
    </button>
  ) : (
    <div>{body}</div>
  );

  if (isMobile) {
    return (
      <motion.div
        variants={fadeUpQuick}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        style={{ marginBottom: 16 }}
      >
        <div className="glass-card" style={{ padding: "20px 16px", borderLeft: `3px solid ${present ? PRESENT : accentColor}`, borderRadius: "0 12px 12px 0" }}>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: MONO, fontSize: 12, fontWeight: 600, color: accentColor }}>
              {present ? (
                <>
                  {start} - <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: PRESENT }} aria-label="Currently active role"><PresentDot /></span>
                </>
              ) : (
                <>{start}{end ? ` - ${end}` : ""}</>
              )}
            </span>
            {item.location && (
              <span style={{ color: MUTED, fontSize: 11, display: "flex", alignItems: "center", gap: 3 }}>
                <TbMapPin size={10} style={{ flexShrink: 0 }} /> {item.location}
              </span>
            )}
          </div>
          {content}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout="position"
      style={{ display: "grid", gridTemplateColumns: isTablet ? "150px 34px 1fr" : "240px 40px 1fr", gap: 0 }}
      variants={index % 2 === 0 ? timelineEven : timelineOdd}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
    >
      <div style={{ paddingTop: 4, textAlign: "right", paddingRight: isTablet ? 12 : 20 }}>
        <span style={{ fontFamily: MONO, fontSize: isTablet ? 11 : 12, fontWeight: 600, color: accentColor }}>{start}</span>
        {present ? (
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: 5, width: "100%", marginTop: 2, fontFamily: MONO, fontSize: 11, fontWeight: 600, color: PRESENT, letterSpacing: "0.02em" }} aria-label="Currently active role">
            <PresentDot />
          </span>
        ) : (
          <span style={{ display: "block", fontFamily: MONO, fontSize: 11, color: "#76838b", marginTop: 2 }}>{end ?? ""}</span>
        )}
        {item.location && (
          <p style={{ color: MUTED, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 4, marginTop: 12, marginBottom: 0 }}>
            <TbMapPin size={11} style={{ flexShrink: 0 }} /> {item.location}
          </p>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            border: `2px solid ${present ? PRESENT : accentColor}`,
            backgroundColor: "rgba(6, 6, 16, 0.6)",
            marginTop: 4,
            position: "relative",
            zIndex: 2,
            flexShrink: 0,
            boxShadow: present ? `0 0 0 4px ${PRESENT}22` : undefined,
          }}
        >
          <div className="animate-glow-pulse" style={{ position: "absolute", inset: 3, borderRadius: "50%", backgroundColor: present ? PRESENT : accentColor }} />
        </div>
        <div style={{ width: 2, flex: 1, background: `linear-gradient(to bottom, ${accentColor}40, ${accentColor}10)`, borderRadius: 4 }} />
      </div>
      <div className="glass-card" style={{ padding: isTablet ? "20px 20px" : "24px 24px", marginBottom: 20 }}>
        {content}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { isMobile, isTablet } = useResponsive();
  const [selected, setSelected] = useState(null);

  return (
    <PageSection id="experience" title="Experience" maxWidth={960}>
      <motion.div variants={tightStagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -60px 0px" }}>
        {professional_experience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} isMobile={isMobile} isTablet={isTablet} onClick={() => setSelected(item)} />
        ))}
      </motion.div>
      {positions_of_responsibility.length > 0 && (
        <>
          <motion.h3
            variants={slideLeftSkew}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="dashed-rule"
            style={{ marginTop: 48, marginBottom: 32, justifyContent: "center" }}
          >
            Positions of Responsibility
          </motion.h3>
          <motion.div variants={tightStagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -60px 0px" }}>
            {positions_of_responsibility.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} accentColor="#38bdf8" isMobile={isMobile} isTablet={isTablet} />
            ))}
          </motion.div>
        </>
      )}
      <ExperienceModal experience={selected} onClose={() => setSelected(null)} isMobile={isMobile} />
    </PageSection>
  );
}
