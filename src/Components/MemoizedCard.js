import { memo, useState } from "react";

// Day 99 - React.memo. ChildCard only re-renders when its own props
// change, not when the parent re-renders for an unrelated reason.
let plainRenderCount = 0;
let memoRenderCount = 0;

function PlainCard({ label }) {
  plainRenderCount += 1;
  return (
    <div style={{ padding: "10px", border: "1px solid #eee", borderRadius: "8px" }}>
      {label} — rendered {plainRenderCount}x
    </div>
  );
}

const MemoCard = memo(function MemoCard({ label }) {
  memoRenderCount += 1;
  return (
    <div style={{ padding: "10px", border: "1px solid #eee", borderRadius: "8px" }}>
      {label} — rendered {memoRenderCount}x
    </div>
  );
});

export default function MemoizedCard() {
  const [tick, setTick] = useState(0);

  return (
    <div style={{ maxWidth: "300px" }}>
      <button onClick={() => setTick((t) => t + 1)} style={{ marginBottom: "10px" }}>
        Force parent re-render ({tick})
      </button>
      <PlainCard label="Without memo" />
      <div style={{ height: "8px" }} />
      <MemoCard label="With memo" />
      <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
        The plain card's counter climbs every click. The memoized one stays put —
        its props never changed.
      </p>
    </div>
  );
}