import { memo, useCallback, useState } from "react";

// Day 101 - useCallback. Without it, a new function reference is created
// every render, defeating memo on the child. With useCallback, the
// reference stays stable and the child skips re-rendering.
const ListItem = memo(function ListItem({ label, onSelect }) {
  console.count(`ListItem "${label}" rendered`);
  return (
    <li>
      <button onClick={() => onSelect(label)}>{label}</button>
    </li>
  );
});

export default function StableCallbackList() {
  const [selected, setSelected] = useState(null);
  const [tick, setTick] = useState(0);

  // Stable across renders — ListItem instances won't re-render just
  // because StableCallbackList re-rendered.
  const handleSelect = useCallback((label) => setSelected(label), []);

  return (
    <div style={{ maxWidth: "280px" }}>
      <button onClick={() => setTick((t) => t + 1)} style={{ marginBottom: "10px" }}>
        Force parent re-render ({tick})
      </button>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "8px" }}>
        {["A", "B", "C"].map((label) => (
          <ListItem key={label} label={label} onSelect={handleSelect} />
        ))}
      </ul>
      <p style={{ fontSize: "13px", marginTop: "8px" }}>
        Selected: {selected ?? "none"}
      </p>
      <p style={{ fontSize: "12px", color: "#888" }}>
        Open the console — clicking "Force parent re-render" does not log
        new ListItem renders.
      </p>
    </div>
  );
}