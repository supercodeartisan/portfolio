import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbExternalLink, TbCheck, TbFolder, TbCalendar } from "react-icons/tb";
import PageSection from "../components/PageSection.jsx";
import TechTag from "../components/TechTag.jsx";
import Modal from "../components/Modal.jsx";
import { featured_projects, collaborative_projects, community_projects, other_projects } from "../data/portfolio.js";
import { useResponsive } from "../lib/hooks.jsx";
import { tightStagger, fadeUpQuick, easings } from "../lib/variants.js";

const T = "#f4f6f7";
const P = "#9ca9b0";
const MUTED = "#76838b";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const PROJECT_ACCENTS = {
  Featured: "#60a5fa",
  Community: "#22c55e",
  Collab: "#38bdf8",
  Others: "#f59e0b",
};

const FILTER_ORDER = ["All", "Featured", "Community", "Collab", "Others"];
const FILTER_LABELS = { All: "All", Featured: "Featured", Community: "Community", Collab: "Collab", Others: "Others" };

const normalizeProject = (p, category) => ({
  ...p,
  category,
  type: p.type ?? (category === "Community" ? "Community Project" : "Project"),
  year: p.year ?? (p.date ? String(p.date).split(" - ")[0] : ""),
  short: p.short ?? p.description ?? "",
  description: p.description ?? "",
  features: p.features ?? [],
  skills: p.skills ?? p.tools_tech ?? [],
  live_link: p.live_link ?? p.live ?? null,
});

const allProjects = [
  ...featured_projects.map((p) => normalizeProject(p, "Featured")),
  ...collaborative_projects.map((p) => normalizeProject(p, "Collab")),
  ...(community_projects ?? []).map((p) => normalizeProject(p, "Community")),
  ...(other_projects ?? []).map((p) => normalizeProject(p, "Others")),
];

function ProjectModal({ project, onClose, isMobile }) {
  const items = project?.features ?? [];
  const skills = project?.skills ?? [];
  const accent = PROJECT_ACCENTS[project?.category] || "#60a5fa";

  return (
    <Modal isOpen={!!project} onClose={onClose} closeLabel="Close project details" titleId="portfolio-modal-title" maxWidth={720}>
      {project && (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <TbFolder size={isMobile ? 16 : 18} style={{ color: accent, flexShrink: 0 }} />
            <h2 id="portfolio-modal-title" style={{ fontSize: isMobile ? 15 : 18, fontWeight: 700, color: T, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: 0 }}>
              {project.title}
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span className="tag tag-cyan" style={{ fontSize: 11, padding: "2px 8px" }}>{project.type}</span>
            {project.year && (
              <span style={{ fontSize: 10, color: MUTED, fontFamily: MONO, padding: "2px 8px", borderRadius: 6, background: "rgba(255,255,255,0.04)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                <TbCalendar size={10} /> {project.year}
              </span>
            )}
            {project.live_link && (
              <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
                <a href={project.live_link} target="_blank" rel="noopener noreferrer" aria-label={`Live link for ${project.title}`} style={{ color: "#9ca9b0", fontSize: 16, display: "inline-flex", transition: "color 0.2s ease" }}>
                  <TbExternalLink />
                </a>
              </div>
            )}
          </div>
          {project.description && (
            <p style={{ color: P, fontSize: 13, lineHeight: 1.8, marginBottom: 16 }}>{project.description}</p>
          )}
          {items.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, marginBottom: 16, display: "flex", flexDirection: "column", gap: 6 }}>
              {items.map((feature) => (
                <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ color: accent, marginTop: 2, flexShrink: 0 }}><TbCheck size={14} /></span>
                  <span style={{ color: P, fontSize: 12.5, lineHeight: 1.7 }}>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          {skills.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {skills.map((s) => (
                <TechTag key={s} label={s} accent={accent} />
              ))}
            </div>
          )}
        </>
      )}
    </Modal>
  );
}

function PortfolioCard({ project, onOpen, isMobile, index }) {
  const accent = PROJECT_ACCENTS[project.category] || "#60a5fa";
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={fadeUpQuick}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: easings.cinematic }}
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: "22px 20px", display: "flex", flexDirection: "column", gap: 12, cursor: "pointer", position: "relative", overflow: "hidden" }}
      onClick={onOpen}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), ${accent}12, transparent 60%)`, pointerEvents: "none", opacity: hovered ? 1 : 0 }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: T, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: 0 }}>
          {project.title}
        </h3>
        <span className="tag" style={{ fontSize: 10, padding: "2px 8px", color: accent, background: `${accent}12`, border: `1px solid ${accent}25`, borderRadius: 6, flexShrink: 0 }}>
          {project.category}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span className="tag tag-cyan" style={{ fontSize: 10, padding: "2px 8px" }}>{project.type}</span>
        {project.year && (
          <span style={{ fontSize: 10, color: MUTED, fontFamily: MONO, display: "inline-flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
            <TbCalendar size={10} /> {project.year}
          </span>
        )}
      </div>
      {project.short && (
        <p style={{ color: P, fontSize: 12.5, lineHeight: 1.7, margin: 0, display: "-webkit-box", WebkitLineClamp: isMobile ? 5 : 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {project.short}
        </p>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto", paddingTop: 4 }}>
        <span style={{ fontSize: 11.5, color: accent, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4, marginRight: "auto" }}>
          View Details
        </span>
        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live link for ${project.title}`}
            onClick={(e) => e.stopPropagation()}
            style={{ color: "#9ca9b0", fontSize: 17, display: "inline-flex", transition: "color 0.2s ease" }}
          >
            <TbExternalLink />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { isMobile } = useResponsive();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered = useMemo(
    () => (activeFilter === "All" ? allProjects : allProjects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  const project = selectedIndex != null ? filtered[selectedIndex] : null;

  const close = () => setSelectedIndex(null);
  return (
    <PageSection id="portfolio" title="Portfolio" maxWidth={1200}>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
        <span style={{ fontSize: 12, color: MUTED }}>
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
        <div
          role="tablist"
          aria-label="Filter projects"
          style={{
            display: "inline-flex",
            gap: 2,
            marginLeft: "auto",
            padding: 4,
            borderRadius: 10,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            flexWrap: "wrap",
          }}
        >
          {FILTER_ORDER.map((f) => {
            const c = f === "All" ? "#f4f6f7" : PROJECT_ACCENTS[f];
            const active = activeFilter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(f)}
                style={{
                  position: "relative",
                  padding: "6px 12px",
                  borderRadius: 7,
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  fontFamily: MONO,
                  fontSize: 12,
                  fontWeight: 600,
                  color: active ? c : MUTED,
                  transition: "color 0.2s ease",
                }}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 7,
                      background: `${c}12`,
                      border: `1px solid ${c}30`,
                    }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{FILTER_LABELS[f]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <PortfolioCard key={p.title} project={p} index={i} isMobile={isMobile} onOpen={() => setSelectedIndex(i)} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal
        project={project}
        onClose={close}
        isMobile={isMobile}
      />
    </PageSection>
  );
}
