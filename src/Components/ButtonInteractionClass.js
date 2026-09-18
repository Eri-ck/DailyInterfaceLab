import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

// Day 113 - button micro-interaction class, styled after
// erick-suarez-portfolio.vercel.app's dark theme + token system
// (#FF5A1F primary, blue/green secondary, 16px radius). Grouped into
// categories like a real design system reference page.

const tokens = {
  bg: "#F4F4F4",
  surface: "#ffffff",
  surfaceHover: "#ececec",
  border: "#e2e2e5",
  textMuted: "#6b6b76",
  orange: "#ff5a1f",
  blue: "#4c8dff",
  green: "#34d399",
  red: "#ff4d6a",
  radius: "16px",
};

function Card({ accent, label, caption, children, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? tokens.surfaceHover : tokens.surface,
        border: `1px solid ${hovered ? accent + "55" : tokens.border}`,
        borderRadius: tokens.radius,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        minHeight: "128px",
        transition: "background .2s ease, border-color .2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent }} />
        <span style={{ fontSize: "12px", color: tokens.textMuted, letterSpacing: "0.02em" }}>
          {label}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>{children}</div>

      <p style={{ margin: 0, fontSize: "11px", fontFamily: "ui-monospace, monospace", color: tokens.textMuted, lineHeight: 1.5 }}>
        {caption}
      </p>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <p style={{ margin: "0 0 10px", fontSize: "11px", color: tokens.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {title}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
        {children}
      </div>
    </div>
  );
}

// --- Feedback ---
function PressButton() {
  return (
    <motion.button whileHover={{ y: -2, boxShadow: `0 8px 24px ${tokens.orange}33` }} whileTap={{ y: 1, scale: 0.97 }} style={{ padding: "10px 18px", borderRadius: "10px", border: "none", background: tokens.orange, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
      Press me
    </motion.button>
  );
}

function RippleButton() {
  const [ripples, setRipples] = useState([]);
  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
  }
  return (
    <button onClick={handleClick} style={{ position: "relative", overflow: "hidden", padding: "10px 18px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surfaceHover, color: "#111", fontWeight: 600, cursor: "pointer" }}>
      Ripple
      {ripples.map((r) => (
        <motion.span key={r.id} initial={{ width: 0, height: 0, opacity: 0.4 }} animate={{ width: 200, height: 200, opacity: 0 }} transition={{ duration: 0.6 }} style={{ position: "absolute", left: r.x, top: r.y, translateX: "-50%", translateY: "-50%", borderRadius: "50%", background: tokens.blue, pointerEvents: "none" }} />
      ))}
    </button>
  );
}

function ShakeButton() {
  const [shaking, setShaking] = useState(false);
  function handleClick() { setShaking(true); setTimeout(() => setShaking(false), 400); }
  return (
    <motion.button onClick={handleClick} animate={shaking ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }} transition={{ duration: 0.4 }} style={{ padding: "10px 18px", borderRadius: "10px", border: `1px solid ${tokens.red}`, background: "transparent", color: tokens.red, fontWeight: 600, cursor: "pointer" }}>
      Invalid action
    </motion.button>
  );
}

// --- Attention & status ---
function PulseButton() {
  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <motion.span animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", inset: 0, borderRadius: "10px", background: tokens.green }} />
      <button style={{ position: "relative", padding: "10px 18px", borderRadius: "10px", border: "none", background: tokens.green, color: "#062", fontWeight: 700, cursor: "pointer" }}>
        Live
      </button>
    </div>
  );
}

function HoldToConfirmButton() {
  const [progress, setProgress] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const frameRef = useRef(null);
  function startHold() {
    if (confirmed) return;
    const start = performance.now();
    function tick(now) {
      const pct = Math.min(100, ((now - start) / 1000) * 100);
      setProgress(pct);
      if (pct >= 100) {
        setConfirmed(true);
        setTimeout(() => { setConfirmed(false); setProgress(0); }, 1000);
        return;
      }
      frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);
  }
  function cancelHold() { cancelAnimationFrame(frameRef.current); if (!confirmed) setProgress(0); }
  return (
    <button onMouseDown={startHold} onMouseUp={cancelHold} onMouseLeave={cancelHold} style={{ position: "relative", padding: "10px 18px", borderRadius: "10px", border: "none", background: confirmed ? tokens.green : tokens.red, color: "#fff", fontWeight: 600, cursor: "pointer", overflow: "hidden" }}>
      <span style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,.25)", width: `${progress}%`, transition: "width .05s linear" }} />
      <span style={{ position: "relative" }}>{confirmed ? "Confirmed ✓" : "Hold to delete"}</span>
    </button>
  );
}

function ToggleButton() {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((o) => !o)} aria-pressed={on} style={{ display: "flex", alignItems: "center", width: "52px", height: "28px", borderRadius: "999px", border: "none", background: on ? tokens.orange : tokens.border, padding: "3px", cursor: "pointer" }}>
      <motion.span animate={{ x: on ? 24 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#fff", display: "block" }} />
    </button>
  );
}

// --- Confirmation ---
function LoadingButton() {
  const [status, setStatus] = useState("idle");
  function handleClick() {
    if (status !== "idle") return;
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
    setTimeout(() => setStatus("idle"), 2400);
  }
  return (
    <motion.button onClick={handleClick} whileTap={{ scale: 0.96 }} style={{ padding: "10px 18px", borderRadius: "10px", border: "none", background: status === "done" ? tokens.green : tokens.orange, color: "#fff", fontWeight: 600, cursor: "pointer", minWidth: "110px" }}>
      <AnimatePresence mode="wait">
        {status === "idle" && <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Save</motion.span>}
        {status === "loading" && <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: 360 }} exit={{ opacity: 0 }} transition={{ rotate: { repeat: Infinity, duration: 0.6, ease: "linear" } }} style={{ display: "inline-block" }}>◐</motion.span>}
        {status === "done" && <motion.span key="done" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>✓ Saved</motion.span>}
      </AnimatePresence>
    </motion.button>
  );
}

function CopyButton() {
  const [copied, setCopied] = useState(false);
  function handleClick() { setCopied(true); setTimeout(() => setCopied(false), 1500); }
  return (
    <motion.button onClick={handleClick} whileTap={{ scale: 0.96 }} style={{ padding: "10px 18px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surfaceHover, color: "#111", fontWeight: 600, cursor: "pointer", minWidth: "110px" }}>
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span key="copied" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ color: tokens.green }}>✓ Copied</motion.span>
        ) : (
          <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Copy link</motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function ElasticButton() {
  return (
    <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 400, damping: 8 }} style={{ padding: "10px 18px", borderRadius: "10px", border: "none", background: tokens.blue, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
      Elastic
    </motion.button>
  );
}

// --- Branding & flair ---
function MagneticButton() {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  }
  function handleMouseLeave() { x.set(0); y.set(0); }
  return (
    <motion.button ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ x, y, padding: "10px 18px", borderRadius: "10px", border: "none", background: tokens.blue, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
      Magnetic
    </motion.button>
  );
}

function GradientBorderButton() {
  return (
    <div style={{ position: "relative", borderRadius: "12px", padding: "2px", background: `conic-gradient(from 0deg, ${tokens.orange}, ${tokens.blue}, ${tokens.green}, ${tokens.orange})`, animation: "spin-border 3s linear infinite" }}>
      <style>{`@keyframes spin-border { to { filter: hue-rotate(360deg); } }`}</style>
      <button style={{ padding: "9px 17px", borderRadius: "10px", border: "none", background: "#ffffff", color: "#111", fontWeight: 600, cursor: "pointer" }}>
        Featured
      </button>
    </div>
  );
}

// Shine sweep - replaces the flat gradient shimmer. A light band sweeps
// diagonally across the button on hover, the pattern used by Linear/Stripe
// CTAs (an overlay masked by overflow:hidden, not a moving gradient fill).
function ShineButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      style={{ position: "relative", overflow: "hidden", padding: "10px 20px", borderRadius: "10px", border: "none", background: tokens.orange, color: "#fff", fontWeight: 600, cursor: "pointer" }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>Start exploring →</span>
      <motion.span
        variants={{ rest: { x: "-120%" }, hover: { x: "120%" } }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          background: "linear-gradient(115deg, transparent, rgba(255,255,255,.5), transparent)",
          transform: "skewX(-20deg)",
        }}
      />
    </motion.button>
  );
}

// --- Icons (inline SVG, no extra library, inherit color via currentColor) ---
function RefreshIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 4v6h-6" />
    </svg>
  );
}
function HeartIcon({ filled, ...props }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}
function ArrowIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function BellIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}
function GearIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

// --- Icon interactions ---
function RefreshButton() {
  const [spinning, setSpinning] = useState(false);
  function handleClick() {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 800);
  }
  return (
    <button onClick={handleClick} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surface, color: "#111", fontWeight: 600, cursor: "pointer" }}>
      <motion.span animate={spinning ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }} style={{ display: "flex" }}>
        <RefreshIcon />
      </motion.span>
      Refresh
    </button>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <motion.button
      onClick={() => setLiked((l) => !l)}
      whileTap={{ scale: 0.85 }}
      style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surface, color: liked ? tokens.red : "#111", fontWeight: 600, cursor: "pointer" }}
    >
      <motion.span animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }} transition={{ duration: 0.35 }} style={{ display: "flex" }}>
        <HeartIcon filled={liked} />
      </motion.span>
      {liked ? "Liked" : "Like"}
    </motion.button>
  );
}

function NextButton() {
  return (
    <motion.button initial="rest" whileHover="hover" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 16px", borderRadius: "10px", border: "none", background: tokens.blue, color: "#fff", fontWeight: 600, cursor: "pointer", overflow: "hidden" }}>
      Next
      <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ type: "spring", stiffness: 400, damping: 20 }} style={{ display: "flex" }}>
        <ArrowIcon />
      </motion.span>
    </motion.button>
  );
}

function NotificationButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surface, color: "#111", fontWeight: 600, cursor: "pointer" }}
    >
      <BellIcon />
      Notify
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            style={{ position: "absolute", top: "-6px", right: "-6px", background: tokens.red, color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "999px", minWidth: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" }}
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function TooltipIconButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative", display: "inline-flex" }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "#111", color: "#fff", fontSize: "11px", padding: "4px 8px", borderRadius: "6px", whiteSpace: "nowrap" }}
          >
            Settings
          </motion.span>
        )}
      </AnimatePresence>
      <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", border: `1px solid ${tokens.border}`, background: tokens.surface, color: "#111", cursor: "pointer" }}>
        <GearIcon />
      </button>
    </div>
  );
}

function DownloadButton() {
  const [done, setDone] = useState(false);
  function handleClick() {
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  }
  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.96 }}
      style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surface, color: done ? tokens.green : "#111", fontWeight: 600, cursor: "pointer", minWidth: "128px" }}
    >
      <motion.span animate={done ? { y: [0, 3, 0] } : { y: 0 }} transition={{ duration: 0.3 }} style={{ display: "flex" }}>
        <DownloadIcon />
      </motion.span>
      <AnimatePresence mode="wait">
        {done ? (
          <motion.span key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Downloaded</motion.span>
        ) : (
          <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Download</motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function ButtonInteractionClass() {
  return (
    <div style={{ background: tokens.bg, borderRadius: "20px", padding: "24px" }}>
      <p style={{ margin: "0 0 2px", fontSize: "16px", fontWeight: 700, color: "#111" }}>
        Button Interaction Class
      </p>
      <p style={{ margin: "0 0 22px", fontSize: "12px", color: tokens.textMuted }}>
        18 micro-interactions, grouped by purpose · Framer Motion
      </p>

      <Section title="Feedback">
        <Card accent={tokens.orange} label="Press feedback" caption="whileHover + whileTap, spring shadow lift" index={0}><PressButton /></Card>
        <Card accent={tokens.blue} label="Ripple" caption="click coords → animated circle, self-cleans" index={1}><RippleButton /></Card>
        <Card accent={tokens.red} label="Shake (invalid)" caption="keyframe array on x, no easing library" index={2}><ShakeButton /></Card>
      </Section>

      <Section title="Attention & status">
        <Card accent={tokens.green} label="Pulse / live" caption="looping scale+opacity ring behind button" index={3}><PulseButton /></Card>
        <Card accent={tokens.red} label="Hold to confirm" caption="requestAnimationFrame progress loop" index={4}><HoldToConfirmButton /></Card>
        <Card accent={tokens.orange} label="Animated toggle" caption="motion.span x-offset, spring stiffness 500" index={5}><ToggleButton /></Card>
      </Section>

      <Section title="Confirmation">
        <Card accent={tokens.green} label="Loading → success" caption="AnimatePresence mode='wait', state morph" index={6}><LoadingButton /></Card>
        <Card accent={tokens.blue} label="Copy confirm" caption="AnimatePresence swap, auto-reverts in 1.5s" index={7}><CopyButton /></Card>
        <Card accent={tokens.blue} label="Elastic scale" caption="spring, low damping = bouncy overshoot" index={8}><ElasticButton /></Card>
      </Section>

      <Section title="Branding & flair">
        <Card accent={tokens.blue} label="Magnetic pull" caption="useMotionValue + useSpring, cursor-follow" index={9}><MagneticButton /></Card>
        <Card accent={tokens.orange} label="Gradient border" caption="conic-gradient wrapper, CSS hue-rotate" index={10}><GradientBorderButton /></Card>
        <Card accent={tokens.orange} label="Shine sweep" caption="masked overlay translateX on hover, not a moving gradient" index={11}><ShineButton /></Card>
      </Section>

      <Section title="Icon interactions">
        <Card accent={tokens.blue} label="Refresh" caption="icon-only rotate(360) on click, 0.7s ease-in-out" index={12}><RefreshButton /></Card>
        <Card accent={tokens.red} label="Like" caption="outline → filled SVG swap + pop scale keyframes" index={13}><LikeButton /></Card>
        <Card accent={tokens.blue} label="Next" caption="icon slides on hover via Framer Motion variants" index={14}><NextButton /></Card>
        <Card accent={tokens.red} label="Notify" caption="badge mounts with spring pop, keyed by count for re-trigger" index={15}><NotificationButton /></Card>
        <Card accent={tokens.green} label="Tooltip" caption="AnimatePresence fade+slide, hover-driven, no library tooltip" index={16}><TooltipIconButton /></Card>
        <Card accent={tokens.green} label="Download" caption="icon nudges down + AnimatePresence text swap, auto-reverts" index={17}><DownloadButton /></Card>
      </Section>
    </div>
  );
}