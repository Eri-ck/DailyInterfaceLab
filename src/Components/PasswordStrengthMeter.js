import { useState } from "react";

// Cada regla checa el password con una expresión regular distinta.
const rules = [
  { label: "At least 8 characters", test: (pw) => pw.length >= 8 },
  { label: "One uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
  { label: "One number", test: (pw) => /[0-9]/.test(pw) },
  { label: "One special character", test: (pw) => /[^A-Za-z0-9]/.test(pw) },
];

export default function PasswordStrengthMeter() {
  const [password, setPassword] = useState("");

  const passedRules = rules.filter((rule) => rule.test(password));
  const strength = passedRules.length; // 0 a 4

  const strengthLabels = ["Very weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "#e5e5e5",
    "#f87171",
    "#facc15",
    "#4ade80",
    "#16a34a",
  ];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "360px",
      }}
    >
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter a password"
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "14px",
          boxSizing: "border-box",
          marginBottom: "12px",
        }}
      />

      {/* Barra de fuerza dividida en 4 segmentos */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
        {rules.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "6px",
              borderRadius: "999px",
              background: i < strength ? strengthColors[strength] : "#eee",
              transition: "background .2s ease",
            }}
          />
        ))}
      </div>

      <p
        style={{
          margin: "0 0 16px",
          fontSize: "13px",
          fontWeight: 600,
          color: strengthColors[strength],
        }}
      >
        {password.length === 0 ? "" : strengthLabels[strength]}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {rules.map((rule) => {
          const passed = rule.test(password);
          return (
            <div
              key={rule.label}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <span
                style={{ color: passed ? "#16a34a" : "#ccc", fontSize: "14px" }}
              >
                {passed ? "✓" : "○"}
              </span>
              <span
                style={{ fontSize: "13px", color: passed ? "#111" : "#999" }}
              >
                {rule.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
