import { useRef, useState } from "react";

// Day 103 - offload heavy work to a Web Worker so it doesn't block
// the main thread (the UI stays responsive while it's calculating).
// The worker is created inline from a Blob — no separate file needed.
const workerCode = `
  self.onmessage = function (e) {
    const n = e.data;
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) count++;
    }
    self.postMessage(count);
  };
`;

export default function WorkerCalculator() {
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const workerRef = useRef(null);

  function runInWorker() {
    setStatus("running");
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));
    workerRef.current = worker;

    worker.onmessage = (e) => {
      setResult(e.data);
      setStatus("done");
      worker.terminate();
    };

    worker.postMessage(2000000);
  }

  return (
    <div style={{ maxWidth: "300px" }}>
      <button onClick={runInWorker} disabled={status === "running"}>
        {status === "running" ? "Counting primes..." : "Count primes up to 2,000,000"}
      </button>

      <p style={{ fontSize: "13px", marginTop: "8px" }}>
        {status === "done" && `Found ${result.toLocaleString()} primes.`}
        {status === "running" && "Try typing below while this runs — it won't freeze."}
      </p>

      <input
        type="text"
        placeholder="This input stays responsive"
        style={{ width: "100%", padding: "6px", marginTop: "6px", boxSizing: "border-box" }}
      />
    </div>
  );
}