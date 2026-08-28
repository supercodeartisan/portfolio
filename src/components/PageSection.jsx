import { motion } from "motion/react";
import { useResponsive } from "../lib/hooks";

function SectionHeader({ title }) {
  const { isMobile } = useResponsive();
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        marginBottom: 56,
        textAlign: "center",
        padding: isMobile ? "0 8px" : 0,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          color: "var(--color-text-primary)",
          maxWidth: 640,
        }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default function PageSection({ id, title, children, maxWidth }) {
  const { isMobile } = useResponsive();
  return (
    <motion.section
      id={id}
      className="py-24 px-6"
      style={{
        padding: isMobile ? "16px 16px 32px" : "0px 24px 60px",
        scrollMarginTop: 64,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <div style={maxWidth ? { maxWidth, margin: "0 auto" } : undefined}>
        <SectionHeader title={title} />
        {children}
      </div>
    </motion.section>
  );
}
