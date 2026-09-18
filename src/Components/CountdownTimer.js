import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    // Si llega a 0, detenemos el timer en vez de seguir contando en negativo.
    if (secondsLeft === 0) {
      setIsRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    // Cleanup: se ejecuta cada vez que el efecto se re-corre o el
    // componente se desmonta, evitando timers duplicados.
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  function reset() {
    setIsRunning(false);
    setSecondsLeft(60);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "28px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "48px",
          fontWeight: 700,
          margin: "0 0 20px",
          fontVariantNumeric: "tabular-nums",
          color: secondsLeft === 0 ? "#dc2626" : "#111",
        }}
      >
        {formatTime(secondsLeft)}
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button
          onClick={() => setIsRunning((running) => !running)}
          disabled={secondsLeft === 0}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#111",
            color: "#fff",
            fontWeight: 600,
            cursor: secondsLeft === 0 ? "not-allowed" : "pointer",
            opacity: secondsLeft === 0 ? 0.5 : 1,
          }}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
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
    </div>
  );
}
