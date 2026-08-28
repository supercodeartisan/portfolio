import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbSend, TbCheck, TbAlertCircle, TbInfoCircle, TbExternalLink } from "react-icons/tb";
import emailjs from "@emailjs/browser";
import PageSection from "../components/PageSection.jsx";
import { contact_options, email_config } from "../data/portfolio.js";
import { useResponsive } from "../lib/hooks.jsx";
import { getContactIcon } from "../lib/icons.js";
import { tightStagger, fadeUpQuick, easings } from "../lib/variants.js";

const T = "#f4f6f7";
const P = "#9ca9b0";
const MUTED = "#76838b";
const ACCENT = "#60a5fa";
const GREEN = "#22c55e";

function Toast({ toast, onDismiss }) {
  const colors = { success: "#22c55e", error: "#f87171", info: "#60a5fa" };
  const Icons = { success: TbCheck, error: TbAlertCircle, info: TbInfoCircle };
  const Icon = Icons[toast.type] ?? TbInfoCircle;
  const color = colors[toast.type] ?? "#60a5fa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={onDismiss}
      role="status"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        borderRadius: 12,
        background: "rgba(11,16,18,0.95)",
        border: `1px solid ${color}35`,
        boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
        cursor: "pointer",
        minWidth: 260,
        maxWidth: 340,
      }}
    >
      <span style={{ color, display: "inline-flex", flexShrink: 0 }}><Icon size={16} /></span>
      <span style={{ color: T, fontSize: 12.5, lineHeight: 1.5 }}>{toast.message}</span>
    </motion.div>
  );
}

function ToastStack({ toasts, dismiss }) {
  return (
    <div role="region" aria-live="polite" style={{ position: "fixed", bottom: 32, right: 32, zIndex: 2000, display: "flex", flexDirection: "column", gap: 10 }}>
      <AnimatePresence>
        {toasts.map((t) => (
          <Toast key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toasts, setToasts] = useState([]);
  const toastsRef = useRef([]);

  const pushToast = (toast) => {
    const id = Date.now() + Math.random();
    toastsRef.current = [...toastsRef.current, { ...toast, id }];
    setToasts(toastsRef.current);
    setTimeout(() => {
      toastsRef.current = toastsRef.current.filter((t) => t.id !== id);
      setToasts(toastsRef.current);
    }, 4000);
  };

  const dismissToast = (id) => {
    toastsRef.current = toastsRef.current.filter((t) => t.id !== id);
    setToasts(toastsRef.current);
  };

  const validate = (next) => {
    const errs = {};
    if (!next.name.trim()) errs.name = "Name is required.";
    if (!next.email.trim()) errs.email = "Email is required.";
    else if (!new RegExp(email_config.validation_pattern).test(next.email.trim())) errs.email = "Please enter a valid email address.";
    if (!next.message.trim()) errs.message = "Message is required.";
    else if (next.message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      pushToast({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    const keysConfigured = Boolean(
      email_config.service_id &&
      email_config.template_id &&
      email_config.public_key
    );

    if (!keysConfigured) {
      const recipient = contact_options.find((option) => option.title === "Email Me")?.value;
      const subject = encodeURIComponent(`Portfolio inquiry from ${values.name.trim()}`);
      const body = encodeURIComponent(`Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`);
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      pushToast({ type: "info", message: "Opening your email app to send this message." });
      setValues({ name: "", email: "", message: "" });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        email_config.service_id,
        email_config.template_id,
        {
          from_name: values.name.trim(),
          reply_to: values.email.trim(),
          message: values.message.trim(),
        },
        { publicKey: email_config.public_key }
      );
      pushToast({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setValues({ name: "", email: "", message: "" });
    } catch {
      pushToast({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setSending(false);
    }
  };

  const fieldStyle = (hasError) => ({
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${hasError ? "rgba(248,113,113,0.45)" : "rgba(255,255,255,0.09)"}`,
    color: T,
    fontSize: 13.5,
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    resize: "vertical",
  });

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <label htmlFor="contact-name" style={{ fontSize: 11.5, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6, letterSpacing: "0.02em" }}>Your Name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="John Doe"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          style={fieldStyle(errors.name)}
        />
        {errors.name && <p style={{ color: "#f87171", fontSize: 11, marginTop: 5, marginBottom: 0 }}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" style={{ fontSize: 11.5, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6, letterSpacing: "0.02em" }}>Your Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="john@example.com"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          style={fieldStyle(errors.email)}
        />
        {errors.email && <p style={{ color: "#f87171", fontSize: 11, marginTop: 5, marginBottom: 0 }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" style={{ fontSize: 11.5, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6, letterSpacing: "0.02em" }}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          style={fieldStyle(errors.message)}
        />
        {errors.message && <p style={{ color: "#f87171", fontSize: 11, marginTop: 5, marginBottom: 0 }}>{errors.message}</p>}
      </div>
      <button type="submit" disabled={sending} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, alignSelf: "flex-start", opacity: sending ? 0.6 : 1, cursor: sending ? "not-allowed" : "pointer" }}>
        {sending ? <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", display: "inline-block", animation: "spin 0.8s linear infinite" }} /> : <TbSend size={15} />}
        {sending ? "Sending..." : "Send Message"}
      </button>
      <ToastStack toasts={toasts} dismiss={dismissToast} />
    </form>
  );
}

function ContactOptionCard({ option, index }) {
  const Icon = getContactIcon(option.icon);
  return (
    <motion.a
      variants={fadeUpQuick}
      custom={index}
      href={option.link}
      target={option.link?.startsWith("http") ? "_blank" : undefined}
      rel={option.link?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="glass-card"
      style={{ padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={18} style={{ color: ACCENT }} />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: T, margin: 0 }}>{option.title}</p>
        <p style={{ fontSize: 12, color: MUTED, margin: "3px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{option.value}</p>
      </div>
      <span style={{ color: ACCENT, display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11.5, fontWeight: 600, flexShrink: 0 }}>
        {option.message}
        <TbExternalLink size={11} />
      </span>
    </motion.a>
  );
}

export default function Contact() {
  const { isMobile } = useResponsive();

  return (
    <PageSection id="contact" title="Contact" maxWidth={960}>
      <motion.div
        variants={tightStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr", gap: 24, alignItems: "start" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {contact_options.map((option, i) => (
            <ContactOptionCard key={option.id} option={option} index={i} />
          ))}
        </div>
        <div className="glass-card" style={{ padding: "24px 22px" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: T, margin: "0 0 4px" }}>Send a Message</h3>
          <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.6, margin: "0 0 20px" }}>
            Fill out the form and I'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </motion.div>
    </PageSection>
  );
}
