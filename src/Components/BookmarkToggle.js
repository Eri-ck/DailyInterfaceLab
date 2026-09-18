import { useState } from "react";

// Day 92 - boolean toggle, kept small so the test focuses on
// basic render + a single interaction assertion.
export default function BookmarkToggle() {
  const [saved, setSaved] = useState(false);

  return (
    <button
      onClick={() => setSaved((s) => !s)}
      aria-pressed={saved}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "8px 14px",
        background: saved ? "#111" : "#fff",
        color: saved ? "#fff" : "#111",
        cursor: "pointer",
      }}
    >
      {saved ? "★ Saved" : "☆ Save"}
    </button>
  );
}