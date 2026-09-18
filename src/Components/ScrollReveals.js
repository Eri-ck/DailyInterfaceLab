import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Day 117 - scroll-triggered reveals. Since this lives inside an
// exercise card (not the full page), the scroll container is internal
// (a fixed-height div with overflow-y: auto) so the demo is self-contained.
const tokens = {
  orange: "#ff5a1f",
  blue: "#4c8dff",
  green: "#34d399",
  border: "#e2e2e5",
  surface: "#ffffff",
  textMuted: "#6b6b76",
};

const items = [
  { title: "Discover", color: tokens.orange },
  { title: "Define", color: tokens.blue },
  { title: "Design", color: tokens.green },
  { title: "Deliver", color: tokens.orange },
  { title: "Iterate", color: tokens.blue },
];

function RevealCard({ title, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6, root: undefined }}
      transition={{ duration: 0.4 }}
      style={{
        padding: "14px 16px",
        borderRadius: "10px",
        border: `1px solid ${tokens.border}`,
        background: tokens.surface,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: color,
        }}
      />
      {title}
    </motion.div>
  );
}

export default function ScrollReveals() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const [replayKey, setReplayKey] = useState(0);

  function handleRestart() {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setReplayKey((k) => k + 1);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <motion.div
          style={{
            scale: headerScale,
            opacity: headerOpacity,
            transformOrigin: "left top",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          Scroll inside the box ↓
        </motion.div>
        <button
          onClick={handleRestart}
          style={{
            fontSize: "11px",
            padding: "4px 10px",
            borderRadius: "999px",
            border: `1px solid ${tokens.border}`,
            background: "#fff",
            cursor: "pointer",
            color: tokens.textMuted,
          }}
        >
          ↺ Restart
        </button>
      </div>
      <div
        key={replayKey}
        ref={scrollRef}
        style={{
          height: "180px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "4px",
        }}
      >
        {items.map((item) => (
          <RevealCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
