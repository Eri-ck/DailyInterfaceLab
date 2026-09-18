import { useState } from "react";

export default function RangeSlider() {
  const [value, setValue] = useState(50);

  // Calculamos el % para posicionar la burbuja con el número justo arriba del thumb.
  const percent = value;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "32px 24px 24px",
        maxWidth: "360px",
      }}
    >
      <p style={{ margin: "0 0 24px", fontSize: "13px", color: "#666" }}>
        Set your monthly budget
      </p>

      <div style={{ position: "relative", marginBottom: "8px" }}>
        <div
          style={{
            position: "absolute",
            top: "-32px",
            left: `calc(${percent}% - 16px)`,
            background: "#111",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "4px 8px",
            borderRadius: "6px",
          }}
        >
          ${value * 10}
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "#111",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#999",
        }}
      >
        <span>$0</span>
        <span>$1000</span>
      </div>
    </div>
  );
}
