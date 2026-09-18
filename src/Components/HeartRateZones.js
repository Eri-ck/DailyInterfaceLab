import { useState } from "react";

const zonePercentages = [
  { name: "Zone 1 - Warm up", min: 0.5, max: 0.6, color: "#9ca3af" },
  { name: "Zone 2 - Fat burn", min: 0.6, max: 0.7, color: "#3b82f6" },
  { name: "Zone 3 - Aerobic", min: 0.7, max: 0.8, color: "#16a34a" },
  { name: "Zone 4 - Anaerobic", min: 0.8, max: 0.9, color: "#f59e0b" },
  { name: "Zone 5 - Max effort", min: 0.9, max: 1.0, color: "#dc2626" },
];

export default function HeartRateZones() {
  const [age, setAge] = useState(30);
  const [restingHR, setRestingHR] = useState(60);

  const maxHR = 220 - age;
  const hrReserve = maxHR - restingHR;

  // Fórmula de Karvonen: incorpora tu frecuencia cardíaca en reposo,
  // más precisa que solo usar % de la frecuencia máxima.
  function calculateZoneHR(percentage) {
    return Math.round(restingHR + hrReserve * percentage);
  }

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
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Resting HR</label>
          <input
            type="number"
            value={restingHR}
            onChange={(e) => setRestingHR(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
      </div>

      <p style={{ margin: "0 0 16px", fontSize: "12px", color: "#999" }}>
        Estimated max HR: {maxHR} bpm
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {zonePercentages.map((zone) => (
          <div
            key={zone.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
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
              {calculateZoneHR(zone.min)}–{calculateZoneHR(zone.max)} bpm
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "12px",
  fontWeight: 600,
  color: "#555",
  marginBottom: "6px",
};
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "14px",
  boxSizing: "border-box",
};
