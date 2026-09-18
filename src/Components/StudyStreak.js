import { useState } from "react";

// Simulamos los últimos 14 días; en un proyecto real esto vendría de una base de datos.
const initialHistory = Array.from({ length: 14 }, (_, i) => ({
  day: i + 1,
  studied: i < 13, // los primeros 13 días ya están marcados como estudiados
}));

export default function StudyStreak() {
  const [history, setHistory] = useState(initialHistory);

  const currentStreak = (() => {
    let streak = 0;
    for (let i = history.length - 1; i >= 0; i--) {
      if (history[i].studied) streak++;
      else break;
    }
    return streak;
  })();

  function markTodayAsStudied() {
    setHistory((current) =>
      current.map((day, index) =>
        index === current.length - 1 ? { ...day, studied: true } : day
      )
    );
  }

  const today = history[history.length - 1];

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: "32px", fontWeight: 700 }}>
            🔥 {currentStreak}
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
            day streak
          </p>
        </div>

        <button
          onClick={markTodayAsStudied}
          disabled={today.studied}
          style={{
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            background: today.studied ? "#e5e5e5" : "#111",
            color: today.studied ? "#999" : "#fff",
            fontWeight: 600,
            fontSize: "13px",
            cursor: today.studied ? "not-allowed" : "pointer",
          }}
        >
          {today.studied ? "Done today ✓" : "Mark today"}
        </button>
      </div>

      <div style={{ display: "flex", gap: "4px" }}>
        {history.map((day) => (
          <div
            key={day.day}
            title={`Day ${day.day}`}
            style={{
              flex: 1,
              height: "28px",
              borderRadius: "6px",
              background: day.studied ? "#111" : "#eee",
            }}
          />
        ))}
      </div>
    </div>
  );
}
