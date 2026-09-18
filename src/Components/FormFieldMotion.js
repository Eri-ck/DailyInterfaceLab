import { useState } from "react";
import { motion } from "framer-motion";

// Day 114 - form micro-interactions: floating labels, a focus ring that
// slides between fields (shared layoutId, no per-field state needed for
// the ring itself), and a shake on invalid submit.
const tokens = { orange: "#ff5a1f", blue: "#4c8dff", red: "#ff4d6a", border: "#e2e2e5", textMuted: "#6b6b76" };

function FloatingField({ id, label, value, onChange, onFocus, onBlur, error }) {
  const filled = value.length > 0;
  return (
    <div style={{ position: "relative" }}>
      <motion.label
        htmlFor={id}
        animate={{ top: filled ? "4px" : "50%", fontSize: filled ? "11px" : "14px", y: filled ? 0 : "-50%" }}
        transition={{ duration: 0.15 }}
        style={{ position: "absolute", left: "12px", color: tokens.textMuted, pointerEvents: "none", transformOrigin: "left top" }}
      >
        {label}
      </motion.label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{
          width: "100%",
          padding: filled ? "20px 12px 8px" : "14px 12px",
          borderRadius: "10px",
          border: `1px solid ${error ? tokens.red : tokens.border}`,
          boxSizing: "border-box",
          fontSize: "14px",
        }}
      />
    </div>
  );
}

export default function FormFieldMotion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(null);
  const [shaking, setShaking] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
      return;
    }
    setError(false);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      animate={shaking ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
      transition={{ duration: 0.4 }}
      style={{ maxWidth: "280px", display: "flex", flexDirection: "column", gap: "18px" }}
    >
      <div style={{ position: "relative" }}>
        <FloatingField id="ff-name" label="Full name" value={name} onChange={(e) => setName(e.target.value)} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
        {focused === "name" && (
          <motion.div layoutId="focus-ring" transition={{ type: "spring", stiffness: 500, damping: 35 }} style={{ position: "absolute", inset: 0, borderRadius: "10px", border: `2px solid ${tokens.orange}`, pointerEvents: "none" }} />
        )}
      </div>

      <div style={{ position: "relative" }}>
        <FloatingField id="ff-email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} error={error} />
        {focused === "email" && (
          <motion.div layoutId="focus-ring" transition={{ type: "spring", stiffness: 500, damping: 35 }} style={{ position: "absolute", inset: 0, borderRadius: "10px", border: `2px solid ${tokens.orange}`, pointerEvents: "none" }} />
        )}
      </div>

      {error && <p style={{ color: tokens.red, fontSize: "12px", margin: 0 }}>Enter a valid email.</p>}

      <button type="submit" style={{ padding: "10px 16px", borderRadius: "10px", border: "none", background: tokens.orange, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
        Submit
      </button>
    </motion.form>
  );
}