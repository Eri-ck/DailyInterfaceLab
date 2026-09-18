import { useState } from "react";

// Day 94 - simulates an autosave flow (idle -> saving -> saved/error).
// Different async shape than a "fetch random content" exercise:
// this tests a status transition over time, not a single data payload.
export async function fakeSave(text) {
  if (text.trim() === "") throw new Error("Nothing to save");
  await new Promise((resolve) => setTimeout(resolve, 300));
  return true;
}

export default function SaveStatusIndicator2() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle | saving | saved | error

  async function handleBlur() {
    setStatus("saving");
    try {
      await fakeSave(text);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: "260px" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        rows={3}
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />
      <p
        data-testid="save-status"
        style={{ fontSize: "12px", color: "#888", margin: "6px 0 0" }}
      >
        {status === "idle" && "Not saved yet"}
        {status === "saving" && "Saving..."}
        {status === "saved" && "Saved"}
        {status === "error" && "Couldn't save"}
      </p>
    </div>
  );
}
