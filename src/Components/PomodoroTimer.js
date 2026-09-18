import { useState, useEffect } from "react";

const modes = {
  study: { label: "Study", minutes: 25, color: "#111" },
  shortBreak: { label: "Short break", minutes: 5, color: "#16a34a" },
  longBreak: { label: "Long break", minutes: 15, color: "#2563eb" },
};

export default function PomodoroTimer() {
  const [mode, setMode] = useState("study");
  const [secondsLeft, setSecondsLeft] = useState(modes.study.minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    if (secondsLeft === 0) {
      setIsRunning(false);
      if (mode === "study") setCompletedSessions((c) => c + 1);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, mode]);

  function switchMode(newMode) {
    setMode(newMode);
    setSecondsLeft(modes[newMode].minutes * 60);
    setIsRunning(false);
  }

  function formatTime(total) {
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "340px",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", gap: "6px", marginBottom: "20px" }}>
        {Object.entries(modes).map(([key, m]) => (
          <button
            key={key}
            onClick={() => switchMode(key)}
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "8px",
              border: "none",
              background: mode === key ? m.color : "#f3f4f6",
              color: mode === key ? "#fff" : "#666",
              fontSize: "11px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      <p
        style={{
          fontSize: "48px",
          fontWeight: 700,
          margin: "0 0 20px",
          fontVariantNumeric: "tabular-nums",
          color: modes[mode].color,
        }}
      >
        {formatTime(secondsLeft)}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <button
          onClick={() => setIsRunning((r) => !r)}
          style={{
            padding: "10px 24px",
            borderRadius: "10px",
            border: "none",
            background: modes[mode].color,
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => switchMode(mode)}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
        🍅 {completedSessions} study session{completedSessions !== 1 ? "s" : ""}{" "}
        completed
      </p>
    </div>
  );
}
