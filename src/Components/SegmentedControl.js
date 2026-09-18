import { useState } from "react";

const options = ["Day", "Week", "Month", "Year"];

export default function SegmentedControl() {
  const [selected, setSelected] = useState(options[1]);

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
          display: "inline-flex",
          background: "#f3f4f6",
          borderRadius: "10px",
          padding: "4px",
        }}
      >
        {options.map((option) => {
          const isActive = selected === option;
          return (
            <button
              key={option}
              onClick={() => setSelected(option)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                background: isActive ? "#fff" : "transparent",
                color: isActive ? "#111" : "#777",
                fontWeight: 600,
                fontSize: "13px",
                cursor: "pointer",
                boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                transition: "all .15s ease",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p style={{ marginTop: "14px", fontSize: "13px", color: "#666" }}>
        Showing data by: <strong>{selected}</strong>
      </p>
    </div>
  );
}
