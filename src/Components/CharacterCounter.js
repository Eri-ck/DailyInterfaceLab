import { useState } from "react";

const maxLength = 180;

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const remaining = maxLength - text.length;

  // Cambia de color conforme se acerca al límite.
  let color = "#999";
  if (remaining <= 20) color = "#dc2626";
  else if (remaining <= 50) color = "#f59e0b";

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
      <textarea
        value={text}
        onChange={(e) => {
          // No dejamos escribir más allá del límite.
          if (e.target.value.length <= maxLength) {
            setText(e.target.value);
          }
        }}
        placeholder="Write a short bio..."
        rows={4}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "14px",
          fontFamily: "inherit",
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "8px",
        }}
      >
        {/* Barra de progreso visual */}
        <div
          style={{
            flex: 1,
            height: "4px",
            background: "#eee",
            borderRadius: "999px",
            marginRight: "12px",
          }}
        >
          <div
            style={{
              width: `${(text.length / maxLength) * 100}%`,
              height: "100%",
              background: color,
              borderRadius: "999px",
              transition: "width .15s ease, background .15s ease",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "12px",
            color,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {remaining} left
        </span>
      </div>
    </div>
  );
}
