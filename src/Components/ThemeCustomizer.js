import { useState } from "react";

export default function ThemeCustomizer() {
  const [primaryColor, setPrimaryColor] = useState("#2563eb");
  const [radius, setRadius] = useState(12);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        // Definimos variables CSS aquí, controladas por el estado de React.
        // El resto del árbol puede leerlas con var(--primary-color).
        "--primary-color": primaryColor,
        "--component-radius": `${radius}px`,
      }}
    >
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            minWidth: "160px",
          }}
        >
          <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>
            Primary color
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              style={{
                width: "100%",
                height: "36px",
                marginTop: "6px",
                cursor: "pointer",
              }}
            />
          </label>

          <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>
            Corner radius: {radius}px
            <input
              type="range"
              min={0}
              max={24}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              style={{ width: "100%", marginTop: "6px" }}
            />
          </label>
        </div>

        {/* Preview en vivo, usando las variables CSS que acabamos de definir */}
        <div
          style={{
            flex: 1,
            minWidth: "200px",
            background: "var(--primary-color)",
            borderRadius: "var(--component-radius)",
            padding: "24px",
            color: "#fff",
            transition: "background .1s ease, border-radius .1s ease",
          }}
        >
          <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Live Preview</p>
          <button
            style={{
              background: "#fff",
              color: "var(--primary-color)",
              border: "none",
              borderRadius: "var(--component-radius)",
              padding: "10px 18px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sample Button
          </button>
        </div>
      </div>
    </div>
  );
}
