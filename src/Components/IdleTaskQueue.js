import { useState } from "react";

// Day 104 - requestIdleCallback. Low-priority work (like the fake
// "analytics" log below) runs during browser idle time instead of
// competing with user interactions for the main thread.
export default function IdleTaskQueue() {
  const [log, setLog] = useState([]);

  function scheduleWork() {
    setLog((l) => [...l, "Task scheduled — waiting for idle time..."]);

    const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));

    schedule((deadline) => {
      const timeLeft =
        typeof deadline.timeRemaining === "function"
          ? Math.round(deadline.timeRemaining())
          : "N/A";
      setLog((l) => [...l, `Ran during idle time (${timeLeft}ms budget left).`]);
    });
  }

  return (
    <div style={{ maxWidth: "300px" }}>
      <button onClick={scheduleWork}>Schedule low-priority task</button>

      <ul style={{ fontSize: "13px", paddingLeft: "18px", marginTop: "10px" }}>
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>

      <p style={{ fontSize: "12px", color: "#888" }}>
        Click a few times fast — the browser batches these into idle gaps
        instead of running them immediately.
      </p>
    </div>
  );
}