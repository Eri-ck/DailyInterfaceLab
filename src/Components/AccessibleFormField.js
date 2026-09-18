import { useId, useState } from "react";

// Day 111 - refactor of an early form pattern. Before: a placeholder
// doubling as a label (invisible once you start typing, unreadable
// for screen readers). After: a real <label>, error text tied via
// aria-describedby, and aria-invalid reflecting real state.
export default function AccessibleFormField() {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const fieldId = useId();
  const errorId = useId();

  const hasError = touched && value.trim() === "";

  return (
    <div style={{ maxWidth: "260px" }}>
      <label htmlFor={fieldId} style={{ display: "block", fontSize: "13px", marginBottom: "4px" }}>
        Project name
      </label>
      <input
        id={fieldId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "6px",
          border: `1px solid ${hasError ? "#c33" : "#ddd"}`,
          boxSizing: "border-box",
        }}
      />
      {hasError && (
        <p id={errorId} style={{ color: "#c33", fontSize: "12px", margin: "6px 0 0" }}>
          Project name is required.
        </p>
      )}
    </div>
  );
}