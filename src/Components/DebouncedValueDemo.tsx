import { useState } from "react";
import { useDebouncedValue } from "./useDebouncedValue";

// Day 96 - shows raw vs. debounced value side by side, so the
// exercise still renders something visible in the lab.
export default function DebouncedValueDemo() {
  const [text, setText] = useState("");
  const debounced = useDebouncedValue(text, 400);

  return (
    <div style={{ maxWidth: "260px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />
      <p style={{ fontSize: "12px", color: "#888", margin: "8px 0 0" }}>
        Raw: {text || "(empty)"}
      </p>
      <p style={{ fontSize: "12px", color: "#888", margin: "2px 0 0" }}>
        Debounced (400ms): {debounced || "(empty)"}
      </p>
    </div>
  );
}
