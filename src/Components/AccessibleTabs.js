import { useRef, useState } from "react";

// Day 109 - refactor of Week 2's Tabs. Before: clickable divs, no
// keyboard support. After: the real WAI-ARIA Tabs pattern — role="tab",
// aria-selected, and arrow-key navigation between tabs.
const panels = [
  { id: "overview", label: "Overview", content: "High-level summary goes here." },
  { id: "details", label: "Details", content: "Deeper details go here." },
  { id: "activity", label: "Activity", content: "Recent activity goes here." },
];

export default function AccessibleTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      const next = (active + 1) % panels.length;
      setActive(next);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prev = (active - 1 + panels.length) % panels.length;
      setActive(prev);
      tabRefs.current[prev]?.focus();
    }
  }

  return (
    <div style={{ maxWidth: "300px" }}>
      <div role="tablist" aria-label="Sections" style={{ display: "flex", gap: "4px" }}>
        {panels.map((panel, i) => (
          <button
            key={panel.id}
            ref={(el) => (tabRefs.current[i] = el)}
            role="tab"
            id={`tab-${panel.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${panel.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={handleKeyDown}
            style={{
              padding: "8px 12px",
              border: "none",
              borderBottom: active === i ? "2px solid #111" : "2px solid transparent",
              background: "transparent",
              fontWeight: active === i ? 700 : 400,
              cursor: "pointer",
            }}
          >
            {panel.label}
          </button>
        ))}
      </div>

      {panels.map(
        (panel, i) =>
          active === i && (
            <div
              key={panel.id}
              role="tabpanel"
              id={`panel-${panel.id}`}
              aria-labelledby={`tab-${panel.id}`}
              style={{ padding: "12px 4px", fontSize: "14px", color: "#555" }}
            >
              {panel.content}
            </div>
          )
      )}
    </div>
  );
}