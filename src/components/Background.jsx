import { motion } from "motion/react";

export default function Background() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "var(--color-bg-primary)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 80%)",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "-30%",
          left: "50%",
          width: 1100,
          height: 800,
          marginLeft: -550,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgb(37 99 235 / 0.14), rgb(34 211 238 / 0.05) 45%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
        animate={{ y: [0, 40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
