import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Day 118 - page transition, the pattern used between real app screens:
// AnimatePresence handles the exit animation of the leaving screen
// before the next one enters, instead of an abrupt swap.
const tokens = { orange: "#ff5a1f", blue: "#4c8dff", green: "#34d399", border: "#e2e2e5", surface: "#ffffff", textMuted: "#6b6b76" };

const screens = {
  overview: { title: "Overview", color: tokens.orange, body: "High-level summary of the project." },
  details: { title: "Details", color: tokens.blue, body: "Deeper specs and requirements live here." },
  activity: { title: "Activity", color: tokens.green, body: "Recent changes and comments show up here." },
};

export default function PageTransitionDemo() {
  const [screen, setScreen] = useState("overview");
  const order = Object.keys(screens);

  return (
    <div style={{ maxWidth: "280px" }}>
      <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
        {order.map((key) => (
          <button
            key={key}
            onClick={() => setScreen(key)}
            style={{
              padding: "6px 12px",
              borderRadius: "999px",
              border: `1px solid ${screen === key ? screens[key].color : tokens.border}`,
              background: screen === key ? screens[key].color : "transparent",
              color: screen === key ? "#fff" : "#111",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {screens[key].title}
          </button>
        ))}
      </div>

      <div style={{ position: "relative", height: "110px", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0, padding: "14px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surface }}
          >
            <p style={{ margin: "0 0 6px", fontWeight: 700, color: screens[screen].color }}>{screens[screen].title}</p>
            <p style={{ margin: 0, fontSize: "13px", color: tokens.textMuted }}>{screens[screen].body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}