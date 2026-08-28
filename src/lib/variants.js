// Animation system — matches the reference site's variant design.

export const durations = { quick: 0.25, default: 0.4, slow: 0.7, ambient: 20 };

export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  cinematic: [0.16, 1, 0.3, 1],
  brisk: [0.25, 0.1, 0.25, 1],
};

export const springs = {
  gentle: { type: "spring", stiffness: 80, damping: 16 },
  default: { type: "spring", stiffness: 100, damping: 15 },
};

const transitionPresets = {
  default: { duration: durations.default, ease: "easeOut" },
  spring: springs.default,
  quick: { duration: durations.quick, ease: "easeInOut" },
};

const _fade = (dir) => ({
  hidden: {
    opacity: 0,
    ...(dir === "up"
      ? { y: 60 }
      : dir === "down"
      ? { y: -60 }
      : dir === "left"
      ? { x: -60 }
      : dir === "right"
      ? { x: 60 }
      : {}),
  },
  visible: { opacity: 1, x: 0, y: 0, transition: transitionPresets.default },
});

export const fadeUp = _fade("up");
export const fadeLeft = _fade("left");
export const fadeRight = _fade("right");
export const fade = _fade("none");

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: transitionPresets.spring },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export const fadeUpQuick = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitionPresets.quick },
};

export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: durations.slow, ease: "easeOut" } },
};

export const revealUp = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easings.smooth } },
};

export const reveal3D = {
  hidden: { opacity: 0, y: 80, rotateX: 12, transformPerspective: 800 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: easings.smooth } },
};

export const slideLeftSkew = {
  hidden: { opacity: 0, x: -120, skewY: 1.5 },
  visible: { opacity: 1, x: 0, skewY: 0, transition: { duration: 0.65, ease: easings.smooth } },
};

export const slideRightSkew = {
  hidden: { opacity: 0, x: 120, skewY: -1.5 },
  visible: { opacity: 1, x: 0, skewY: 0, transition: { duration: 0.65, ease: easings.smooth } },
};

export const tightStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

export const blurIn = {
  hidden: { opacity: 0, y: 30, scale: 0.85, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: easings.brisk },
  },
};

export const clipReveal = {
  hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: durations.default, ease: easings.smooth },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, scale: 0.7, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

// Alternate-row timeline variants
export const timelineEven = fadeLeft;
export const timelineOdd = fadeRight;

export const radii = { sm: 6, md: 10, lg: 12, xl: 16, pill: 9999 };
