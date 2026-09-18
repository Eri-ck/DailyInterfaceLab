import { useState } from "react";

function randomHex() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

function generatePalette() {
  return Array.from({ length: 5 }, randomHex);
}

export default function ColorPaletteGenerator() {
  const [palette, setPalette] = useState(generatePalette());
  const [copiedColor, setCopiedColor] = useState(null);

  async function copyColor(color) {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          borderRadius: "14px",
          overflow: "hidden",
          height: "140px",
          marginBottom: "16px",
        }}
      >
        {palette.map((color) => (
          <div
            key={color}
            onClick={() => copyColor(color)}
            style={{
              flex: 1,
              background: color,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#fff",
                background: "rgba(0,0,0,0.35)",
                padding: "3px 8px",
                borderRadius: "999px",
              }}
            >
              {copiedColor === color ? "Copied!" : color}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setPalette(generatePalette())}
        style={{
          padding: "10px 18px",
          borderRadius: "10px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        🎲 Generate new palette
      </button>
    </div>
  );
}
