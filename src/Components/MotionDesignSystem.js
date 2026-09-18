import { useState } from "react";
import { motion } from "framer-motion";

// Day 119 - capstone. Reordered so cause and effect sit close together:
// pick a duration first, see a live preview react immediately, then
// explore how each easing curve feels at that same speed.
const tokens = {
  orange: "#ff5a1f",
  blue: "#4c8dff",
  green: "#34d399",
  border: "#e2e2e5",
  surface: "#ffffff",
  textMuted: "#6b6b76",
};

const easings = [
  {
    name: "linear",
    value: "linear",
    feel: "constant speed, no acceleration — feels robotic, rarely the right choice for UI",
  },
  {
    name: "easeIn",
    value: "easeIn",
    feel: "starts slow, ends fast — good for things leaving the screen",
  },
  {
    name: "easeOut",
    value: "easeOut",
    feel: "starts fast, ends slow — good for things entering the screen (most common)",
  },
  {
    name: "easeInOut",
    value: "easeInOut",
    feel: "slow-fast-slow — good for things that move and stay on screen",
  },
  {
    name: "backOut",
    value: "backOut",
    feel: "overshoots past the target then settles back — playful, draws attention",
  },
  {
    name: "anticipate",
    value: "anticipate",
    feel: "pulls back before moving forward — like winding up before a throw",
  },
  {
    name: "spring (bouncy)",
    value: { type: "spring", stiffness: 300, damping: 10 },
    feel: "physics-based, keeps oscillating — feels alive, not scripted",
  },
];

const initialDurations = [
  { label: "instant", value: 80, use: "toggles, checkboxes" },
  { label: "fast", value: 150, use: "hover, tap feedback" },
  { label: "base", value: 250, use: "most transitions" },
  { label: "slow", value: 400, use: "page/section changes" },
  { label: "deliberate", value: 600, use: "onboarding, emphasis" },
];

function LivePreview({ durationMs }) {
  const durationSec = durationMs / 1000;
  return (
    <div>
      <p
        style={{ fontSize: "11px", color: tokens.textMuted, margin: "0 0 6px" }}
      >
        Live preview — reacts the moment you change a duration below
      </p>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "28px",
          background: "#f4f4f4",
          borderRadius: "999px",
        }}
      >
        <motion.div
          key={durationSec}
          initial={{ left: "0%" }}
          animate={{ left: "calc(100% - 22px)" }}
          transition={{
            duration: durationSec,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.3,
          }}
          style={{
            position: "absolute",
            top: "3px",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: tokens.orange,
          }}
        />
      </div>
      <p
        style={{
          fontSize: "11px",
          color: tokens.textMuted,
          margin: "6px 0 0",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        {durationMs}ms, easeOut, looping
      </p>
    </div>
  );
}

function EasingRow({ name, value, feel, durationMs }) {
  const [replayKey, setReplayKey] = useState(0);
  const durationSec = durationMs / 1000;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={() => setReplayKey((k) => k + 1)}
          style={{
            width: "110px",
            fontSize: "11px",
            fontFamily: "ui-monospace, monospace",
            background: "none",
            border: "none",
            color: tokens.textMuted,
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          ▶ {name}
        </button>
        <div
          style={{
            position: "relative",
            flex: 1,
            height: "24px",
            background: "#f4f4f4",
            borderRadius: "999px",
          }}
        >
          <motion.div
            key={`${replayKey}-${durationSec}`}
            initial={{ left: "0%" }}
            animate={{ left: "calc(100% - 20px)" }}
            transition={{
              duration: typeof value === "object" ? undefined : durationSec,
              ease: typeof value === "string" ? value : undefined,
              ...(typeof value === "object" ? value : {}),
            }}
            style={{
              position: "absolute",
              top: "2px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: tokens.blue,
            }}
          />
        </div>
      </div>
      <p
        style={{
          margin: "0 0 0 110px",
          fontSize: "10px",
          color: tokens.textMuted,
          lineHeight: 1.4,
        }}
      >
        {feel}
      </p>
    </div>
  );
}

export default function MotionDesignSystem() {
  const [durations, setDurations] = useState(initialDurations);
  const [activeDuration, setActiveDuration] = useState(250);

  function updateDuration(label, newValue) {
    setDurations((prev) =>
      prev.map((d) => (d.label === label ? { ...d, value: newValue } : d))
    );
  }

  return (
    <div
      style={{
        maxWidth: "420px",
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "12px",
          color: tokens.textMuted,
          lineHeight: 1.6,
        }}
      >
        An <strong>easing curve</strong> is how a value changes over time
        (constant speed vs. starting slow vs. overshooting). A{" "}
        <strong>duration token</strong> is how long that change takes. ① Pick or
        edit a duration below → ② the live preview and every curve replays using
        it.
      </p>

      <LivePreview durationMs={activeDuration} />

      <div>
        <p
          style={{
            fontSize: "11px",
            color: tokens.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 10px",
          }}
        >
          ① Duration tokens — click a row, or edit the number
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {durations.map((d) => (
            <div
              key={d.label}
              onClick={() => setActiveDuration(d.value)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "12px",
                padding: "6px 10px",
                borderRadius: "8px",
                border: `1px solid ${
                  activeDuration === d.value ? tokens.orange : tokens.border
                }`,
                background:
                  activeDuration === d.value ? "#fff6f2" : "transparent",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {d.label}
                <input
                  type="number"
                  value={d.value}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    updateDuration(d.label, v);
                    if (activeDuration === d.value) setActiveDuration(v);
                  }}
                  style={{
                    width: "56px",
                    padding: "2px 4px",
                    borderRadius: "4px",
                    border: `1px solid ${tokens.border}`,
                    fontFamily: "ui-monospace, monospace",
                    fontSize: "11px",
                  }}
                />
                ms
              </span>
              <span style={{ color: tokens.textMuted }}>{d.use}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p
          style={{
            fontSize: "11px",
            color: tokens.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 4px",
          }}
        >
          ② Easing curves — using {activeDuration}ms
        </p>
        <p
          style={{
            fontSize: "11px",
            color: tokens.textMuted,
            margin: "0 0 10px",
          }}
        >
          Click ▶ next to any name to replay just that one
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {easings.map((e) => (
            <EasingRow
              key={e.name}
              name={e.name}
              value={e.value}
              feel={e.feel}
              durationMs={activeDuration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
