import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Day 116 - loading states with personality, redesigned as a 3-card
// grid (same visual language as the button class). Each loader now
// has a real use case instead of floating unexplained.

const tokens = {
  orange: "#ff5a1f",
  blue: "#4c8dff",
  green: "#34d399",
  red: "#ff4d6a",
  border: "#e2e2e5",
  surface: "#ffffff",
  surfaceHover: "#ececec",
  textMuted: "#6b6b76",
};

function RefreshIcon(props) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 4v6h-6" />
    </svg>
  );
}

function Card({ accent, label, caption, children }) {
  return (
    <div
      style={{
        background: tokens.surface,
        border: `1px solid ${tokens.border}`,
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: accent,
          }}
        />
        <span style={{ fontSize: "12px", color: tokens.textMuted }}>
          {label}
        </span>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: "11px",
          fontFamily: "ui-monospace, monospace",
          color: tokens.textMuted,
          lineHeight: 1.5,
        }}
      >
        {caption}
      </p>
    </div>
  );
}

// 1) Image card: skeleton -> full image, uncropped. Whole card is
// clickable; the CTA below carries the icon, same element, not a
// separate floating button.
function ImageLoaderCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={() => setLoaded((l) => !l)}
      style={{ width: "100%", cursor: "pointer" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "120px",
          borderRadius: "10px",
          overflow: "hidden",
          background: "#f4f4f4",
        }}
      >
        <AnimatePresence mode="wait">
          {!loaded ? (
            <motion.div
              key="skeleton"
              exit={{ opacity: 0 }}
              style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            >
              <motion.div
                animate={{ x: ["-100%", "220%"] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "40%",
                  height: "100%",
                  background: `linear-gradient(90deg, transparent, ${tokens.orange}33, transparent)`,
                }}
              />
            </motion.div>
          ) : (
            <motion.img
              key="loaded"
              src="/skeleton-figure.jpg"
              alt="Collectible figure"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          )}
        </AnimatePresence>
      </div>

      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          margin: "8px 0 0",
          fontSize: "12px",
          color: tokens.blue,
        }}
      >
        <RefreshIcon /> {loaded ? "Click to reload" : "Click to load"}
      </p>
    </div>
  );
}

// 2) Typing indicator: bouncing dots as a chat "someone is typing" bubble.
function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          display: "flex",
          gap: "4px",
          padding: "10px 14px",
          borderRadius: "999px",
          background: tokens.surfaceHover,
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.12,
              ease: "easeInOut",
            }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: tokens.textMuted,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// 3) Payment button: label morphs into spinner, then a success check.
function PaymentButton() {
  const [status, setStatus] = useState("idle"); // idle | processing | done

  function handleClick() {
    if (status !== "idle") return;
    setStatus("processing");
    setTimeout(() => setStatus("done"), 1400);
    setTimeout(() => setStatus("idle"), 2600);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        background: status === "done" ? tokens.green : tokens.blue,
        color: "#fff",
        fontWeight: 600,
        cursor: "pointer",
        minWidth: "128px",
        justifyContent: "center",
      }}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Pay $49
          </motion.span>
        )}
        {status === "processing" && (
          <motion.span
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,.4)",
                borderTopColor: "#fff",
                display: "block",
              }}
            />
            Processing...
          </motion.span>
        )}
        {status === "done" && (
          <motion.span
            key="done"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            ✓ Paid
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function LoadingStatesPersonality() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "14px",
      }}
    >
      <Card
        accent={tokens.orange}
        label="Image load"
        caption="skeleton shimmer → real image, object-fit: contain (never cropped)"
      >
        <ImageLoaderCard />
      </Card>
      <Card
        accent={tokens.textMuted}
        label="Typing indicator"
        caption="chat 'someone is typing' bubble, staggered bounce"
      >
        <TypingIndicator />
      </Card>
      <Card
        accent={tokens.blue}
        label="Payment processing"
        caption="button label morphs: idle → spinner → success"
      >
        <PaymentButton />
      </Card>
    </div>
  );
}
