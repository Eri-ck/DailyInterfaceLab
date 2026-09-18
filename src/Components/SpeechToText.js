import { useState, useRef } from "react";

export default function SpeechToText() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSupported] = useState(
    "webkitSpeechRecognition" in window || "SpeechRecognition" in window
  );
  const recognitionRef = useRef(null);

  function startListening() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript((current) => (current ? current + " " + text : text));
    };

    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setIsListening(false);
  }

  if (!isSupported) {
    return (
      <div style={cardStyle}>
        <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>
          Speech recognition isn't supported in this browser. Try Chrome.
        </p>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <div
        style={{
          minHeight: "80px",
          background: "#f9fafb",
          borderRadius: "10px",
          padding: "14px",
          fontSize: "14px",
          color: transcript ? "#111" : "#999",
          marginBottom: "16px",
        }}
      >
        {transcript || "Your speech will appear here..."}
      </div>

      <button
        onClick={isListening ? stopListening : startListening}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: isListening ? "#dc2626" : "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        {isListening ? "⏹ Stop listening" : "🎤 Start listening"}
      </button>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5e5e5",
  borderRadius: "24px",
  padding: "24px",
  maxWidth: "420px",
};
