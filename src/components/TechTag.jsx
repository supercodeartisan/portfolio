const ACCENT = "#60a5fa";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

export default function TechTag({ label, accent = ACCENT, size = 11 }) {
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: size,
        padding: "3px 8px",
        borderRadius: 6,
        background: `${accent}10`,
        color: accent,
        border: `1px solid ${accent}20`,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}
