import { lazy, Suspense, useState } from "react";

// Day 102 - code splitting with React.lazy + Suspense. HeavyPanel's
// code isn't downloaded until the user actually asks to see it.
const HeavyPanel = lazy(
  () =>
    new Promise((resolve) => {
      // Simulated network delay so the Suspense fallback is visible.
      setTimeout(() => {
        resolve({
          default: function HeavyPanel() {
            return (
              <div style={{ padding: "12px", background: "#f5f5f5", borderRadius: "8px" }}>
                Loaded on demand — this chunk didn't ship with the initial bundle.
              </div>
            );
          },
        });
      }, 800);
    })
);

export default function LazyPanel() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ maxWidth: "300px" }}>
      <button onClick={() => setShow(true)} disabled={show}>
        Load panel
      </button>

      {show && (
        <div style={{ marginTop: "10px" }}>
          <Suspense fallback={<p style={{ fontSize: "13px", color: "#888" }}>Loading chunk...</p>}>
            <HeavyPanel />
          </Suspense>
        </div>
      )}
    </div>
  );
}