import { useState } from "react";

// Zonas de potencia estándar en ciclismo, como % del FTP (Functional Threshold Power).
const zoneDefinitions = [
  { name: "Zone 1 - Active Recovery", min: 0, max: 0.55, color: "#9ca3af" },
  { name: "Zone 2 - Endurance", min: 0.55, max: 0.75, color: "#3b82f6" },
  { name: "Zone 3 - Tempo", min: 0.75, max: 0.9, color: "#16a34a" },
  { name: "Zone 4 - Threshold", min: 0.9, max: 1.05, color: "#f59e0b" },
  { name: "Zone 5 - VO2 Max", min: 1.05, max: 1.2, color: "#ea580c" },
  { name: "Zone 6 - Anaerobic", min: 1.2, max: 1.5, color: "#dc2626" },
];

export default function PowerZoneCalculator() {
  const [ftp, setFtp] = useState(250);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "420px",
      }}
    >
      <label
        style={{
          display: "block",
          fontSize: "12px",
          fontWeight: 600,
          color: "#555",
          marginBottom: "6px",
        }}
      >
        Your FTP (watts)
      </label>
      <input
        type="number"
        value={ftp}
        onChange={(e) => setFtp(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {zoneDefinitions.map((zone) => (
          <div
            key={zone.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 14px",
              borderRadius: "10px",
              background: "#f9fafb",
              borderLeft: `4px solid ${zone.color}`,
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: 600 }}>
              {zone.name}
            </span>
            <span style={{ fontSize: "13px", color: "#666" }}>
              {Math.round(ftp * zone.min)}–
              {zone.max <= 1.5 && zone.max !== 1.5
                ? Math.round(ftp * zone.max)
                : "∞"}{" "}
              W
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
