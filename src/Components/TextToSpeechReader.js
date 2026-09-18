import { useState } from "react";

export default function TextToSpeechReader() {
  const [text, setText] = useState(
    "Building better interfaces, one day at a time."
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rate, setRate] = useState(1);

  function speak() {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel(); // detiene cualquier lectura anterior
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.onend = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "420px",
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "14px",
          fontFamily: "inherit",
          resize: "vertical",
          boxSizing: "border-box",
          marginBottom: "14px",
        }}
      />

      <label
        style={{
          display: "block",
          fontSize: "12px",
          color: "#666",
          marginBottom: "16px",
        }}
      >
        Speed: {rate.toFixed(1)}x
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          style={{ width: "100%", marginTop: "6px" }}
        />
      </label>

      <button
        onClick={isSpeaking ? stop : speak}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: isSpeaking ? "#dc2626" : "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        {isSpeaking ? "⏹ Stop" : "🔊 Read aloud"}
      </button>
    </div>
  );
}
