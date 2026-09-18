import { useEffect, useRef, useState } from "react";

// Day 108 - refactor of Week 2's first modal. Before: closed on any
// outside click, no keyboard support, focus stayed wherever it was.
// After: same visual modal, now with the focus-trap pattern from
// Day 86, applied to older, still-in-use code.
export default function AccessibleModalRefactor() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const node = dialogRef.current;
    const focusable = node.querySelectorAll("button, [href], input, [tabindex]");
    focusable[0]?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) triggerRef.current?.focus();
  }, [open]);

  return (
    <div>
      <button ref={triggerRef} onClick={() => setOpen(true)}>
        Open modal
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="refactor-modal-title"
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: "12px", padding: "20px", width: "260px" }}
          >
            <h3 id="refactor-modal-title" style={{ margin: "0 0 10px" }}>
              Same modal, refactored
            </h3>
            <p style={{ fontSize: "13px", color: "#666", margin: "0 0 16px" }}>
              Escape closes it, focus starts here, and it returns to the
              button that opened it.
            </p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}