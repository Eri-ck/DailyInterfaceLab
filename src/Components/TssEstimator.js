import { useState } from "react";

// TSS = (segundos * potencia_normalizada * factor_intensidad) / (FTP * 3600) * 100
// Es la fórmula estándar en ciclismo para medir cuánto "costó" un entrenamiento.
export default function TssEstimator() {
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [avgPower, setAvgPower] = useState(200);
  const [ftp, setFtp] = useState(250);

  const intensityFactor = avgPower / ftp;
  const tss =
    ((durationMinutes * 60 * avgPower * intensityFactor) / (ftp * 3600)) * 100;

  function getEffortLabel(score) {
    if (score < 50) return { label: "Easy", color: "#16a34a" };
    if (score < 100) return { label: "Moderate", color: "#f59e0b" };
    if (score < 150) return { label: "Hard", color: "#ea580c" };
    return { label: "Very Hard", color: "#dc2626" };
  }

  const effort = getEffortLabel(tss);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "380px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginBottom: "20px",
        }}
      >
        <Field
          label="Duration (minutes)"
          value={durationMinutes}
          onChange={setDurationMinutes}
        />
        <Field
          label="Average power (watts)"
          value={avgPower}
          onChange={setAvgPower}
        />
        <Field label="Your FTP (watts)" value={ftp} onChange={setFtp} />
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          borderRadius: "14px",
          background: "#f9fafb",
        }}
      >
        <p style={{ margin: "0 0 4px", fontSize: "36px", fontWeight: 700 }}>
          {Math.round(tss)}
        </p>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#999" }}>
          Training Stress Score
        </p>
        <span
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: "999px",
            background: effort.color,
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          {effort.label}
        </span>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "12px",
          fontWeight: 600,
          color: "#555",
          marginBottom: "6px",
        }}
      >
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "14px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
