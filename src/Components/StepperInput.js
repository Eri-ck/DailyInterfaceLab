import { useState } from "react";

// Day 93 - quantity stepper with clamped bounds. The test targets
// fireEvent + boundary logic (can't go below min or above max).
export default function StepperInput({ min = 0, max = 10 }) {
  const [value, setValue] = useState(min);

  function dec() {
    setValue((v) => Math.max(min, v - 1));
  }
  function inc() {
    setValue((v) => Math.min(max, v + 1));
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={dec} aria-label="Decrease" disabled={value === min}>
        −
      </button>
      <span data-testid="stepper-value" style={{ minWidth: "20px", textAlign: "center" }}>
        {value}
      </span>
      <button onClick={inc} aria-label="Increase" disabled={value === max}>
        +
      </button>
    </div>
  );
}