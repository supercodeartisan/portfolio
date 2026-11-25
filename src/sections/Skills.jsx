import { motion } from "motion/react";
import { TbBriefcase2, TbDeviceDesktop, TbDatabase, TbCloud, TbTool, TbCode, TbUsers, TbBulb, TbStack2 } from "react-icons/tb";
import PageSection from "../components/PageSection.jsx";
import { skills } from "../data/portfolio.js";
import { skillIconMap, getSkillIcon } from "../lib/icons.js";
import { tightStagger, fadeUpQuick } from "../lib/variants.js";

const T = "#f4f6f7";
const P = "#9ca9b0";

const SKILL_CATEGORY_LABELS = {
  ai_agents: "AI Agents & Technical Reasoning",
  llm_integration_rag: "LLM Integration & RAG",
  ai_training_evaluation: "AI Training, Annotation & Evaluation",
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  integration: "Integration / Enterprise Systems",
  cloud_devops: "Cloud & DevOps",
  engineering: "Engineering Practices",
  ai_ml: "ML & AI",
  tools_platforms: "Tools & Platforms",
  cs_fundamentals: "CS Fundamentals",
  soft_skills: "Soft Skills",
  areas_of_interest: "Areas of Interest",
};

const categoryList = Object.entries(skills)
  .filter(([, list]) => Array.isArray(list) && list.length > 0)
  .map(([key, list]) => ({
    category: SKILL_CATEGORY_LABELS[key] ?? key.replace(/_/g, " "),
    skills: list,
  }));

const SKILL_ICONS = {
  "AI Agents & Technical Reasoning": TbBulb,
  "LLM Integration & RAG": TbBulb,
  "AI Training, Annotation & Evaluation": TbBulb,
  Languages: TbCode,
  Frontend: TbDeviceDesktop,
  Backend: TbStack2,
  Database: TbDatabase,
  "Integration / Enterprise Systems": TbTool,
  "Cloud & DevOps": TbCloud,
  "Engineering Practices": TbUsers,
  Frameworks: TbStack2,
  "Frameworks & Libraries": TbStack2,
  Databases: TbDatabase,
  "Tools & DevOps": TbTool,
  "Cloud & Platforms": TbCloud,
  "ML & AI": TbBulb,
  "Soft Skills": TbUsers,
  Tools: TbTool,
  Platforms: TbCloud,
};

const CATEGORY_ACCENTS = {
  "AI Agents & Technical Reasoning": "#22d3ee",
  "LLM Integration & RAG": "#38bdf8",
  "AI Training, Annotation & Evaluation": "#60a5fa",
  Languages: "#38bdf8",
  Frontend: "#60a5fa",
  Backend: "#a78bfa",
  Database: "#34d399",
  "Integration / Enterprise Systems": "#f59e0b",
  "Cloud & DevOps": "#a78bfa",
  "Engineering Practices": "#fb7185",
  Frameworks: "#60a5fa",
  "Frameworks & Libraries": "#60a5fa",
  Databases: "#34d399",
  "Tools & DevOps": "#f59e0b",
  "Cloud & Platforms": "#a78bfa",
  "ML & AI": "#22d3ee",
  "Soft Skills": "#fb7185",
  Tools: "#f59e0b",
  Platforms: "#a78bfa",
};

export default function Skills() {
  return (
    <PageSection id="skills" title="Skills" maxWidth={960}>
      <motion.div variants={tightStagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -60px 0px" }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
        {categoryList.map((category) => {
          const Icon = SKILL_ICONS[category.category] || TbBriefcase2;
          const accent = CATEGORY_ACCENTS[category.category] || "#38bdf8";
          return (
            <motion.div
              key={category.category}
              variants={fadeUpQuick}
              className="glass-card"
              style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: `${accent}12`, border: `1px solid ${accent}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={16} style={{ color: accent }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: T, margin: 0 }}>{category.category}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {(category.skills ?? []).map((skill) => {
                  const entry = getSkillIcon(skill);
                  const SkillIcon = entry?.Icon;
                  return (
                    <span key={skill} className="skill-tag" title={skill} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      {SkillIcon && <SkillIcon size={11} style={{ flexShrink: 0 }} />}
                      <span style={{ fontSize: 11, color: P, fontWeight: 500 }}>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </PageSection>
  );
}
