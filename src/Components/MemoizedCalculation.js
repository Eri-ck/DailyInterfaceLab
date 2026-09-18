import { useMemo, useState } from "react";

// Day 100 - useMemo. An expensive calculation only re-runs when the
// number it depends on changes, not when unrelated state (the note) updates.
function slowFibonacci(n) {
  if (n <= 1) return n;
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

export default function MemoizedCalculation() {
  const [n, setN] = useState(20);
  const [note, setNote] = useState("");

  const result = useMemo(() => slowFibonacci(n), [n]);

  return (
    <div style={{ maxWidth: "300px" }}>
      <label style={{ display: "block", fontSize: "13px", marginBottom: "4px" }}>
        Fibonacci(n)
      </label>
      <input
        type="range"
        min="10"
        max="30"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        style={{ width: "100%" }}
      />
      <p style={{ fontSize: "13px" }}>
        n = {n} → result = <strong>{result}</strong>
      </p>

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type here — doesn't trigger recalculation"
        style={{ width: "100%", padding: "6px", boxSizing: "border-box" }}
      />
    </div>
  );
}