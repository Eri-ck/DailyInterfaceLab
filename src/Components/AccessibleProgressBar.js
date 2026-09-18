import { useState } from "react";

// Day 95 - role="progressbar" with aria-valuenow/min/max, updated live.
// Different a11y surface than a dismissible alert: this tests that
// numeric ARIA attributes stay in sync with visual state.
export default function AccessibleProgressBar() {
  const [value, setValue] = useState(30);

  return (
    <div style={{ maxWidth: "260px" }}>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Upload progress"
        style={{
          height: "10px",
          borderRadius: "6px",
          background: "#eee",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "#111",
            transition: "width .2s ease",
          }}
        />
      </div>

      <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
        <button onClick={() => setValue((v) => Math.max(0, v - 10))}>
          -10
        </button>
        <button onClick={() => setValue((v) => Math.min(100, v + 10))}>
          +10
        </button>
      </div>
    </div>
  );
}
