import { useState, useEffect } from "react";

const radius = 54;
const circumference = 2 * Math.PI * radius;

export default function ProgressRing() {
  const [progress, setProgress] = useState(0);
  const targetProgress = 72;

  // Anima el número subiendo gradualmente en vez de saltar directo al valor final.
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= targetProgress) {
        current = targetProgress;
        clearInterval(interval);
      }
      setProgress(current);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // offset controla cuánto del círculo se "esconde" — así se dibuja el progreso.
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* Círculo de fondo (gris, siempre completo) */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth="12"
        />
        {/* Círculo de progreso, rotado -90° para que empiece arriba */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#111"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          style={{ transition: "stroke-dashoffset .1s linear" }}
        />
        <text
          x="70"
          y="76"
          textAnchor="middle"
          fontSize="24"
          fontWeight="700"
          fill="#111"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}
