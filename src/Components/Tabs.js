import { useState } from "react";

const tabs = [
  {
    label: "Profile",
    content:
      "The user's information would be displayed here: name, photo, biography.",
  },
  {
    label: "Activity",
    content:
      "The user's latest actions would go here: posts, comments, and likes.",
  },
  {
    label: "Configuration",
    content:
      "Preferences would be managed here: notifications, privacy, and theme.",
  },
];

export default function Tabs() {
  // Guarda qué pestaña está activa (por índice, no por nombre,
  // así es más fácil comparar y reutilizar el componente con otros datos).
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      {/* Barra de pestañas */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #eee",
          padding: "0 12px",
        }}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              style={{
                padding: "16px 18px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                color: isActive ? "#111" : "#999",
                // El borde inferior azul marca visualmente cuál está activa
                borderBottom: isActive
                  ? "2px solid #2563eb"
                  : "2px solid transparent",
                transition: "all .15s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Contenido de la pestaña activa */}
      <div
        style={{
          padding: "24px",
          color: "#555",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
