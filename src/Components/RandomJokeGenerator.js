import { useState, useEffect } from "react";

export default function RandomJokeGenerator() {
  const [joke, setJoke] = useState(null);
  const [status, setStatus] = useState("loading");

  function fetchJoke() {
    setStatus("loading");
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch joke");
        return res.json();
      })
      .then((data) => {
        setJoke(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "420px",
        minHeight: "140px",
      }}
    >
      {status === "loading" && (
        <p style={{ color: "#999", fontSize: "13px" }}>Loading a joke...</p>
      )}

      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: "13px" }}>
          Couldn't fetch a joke right now.
        </p>
      )}

      {status === "success" && joke && (
        <div style={{ marginBottom: "20px" }}>
          <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "15px" }}>
            {joke.setup}
          </p>
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
            {joke.punchline}
          </p>
        </div>
      )}

      <button
        onClick={fetchJoke}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          background: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        😄 Another one
      </button>
    </div>
  );
}
