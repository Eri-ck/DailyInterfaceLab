import { useState, useRef } from "react";

const morseMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
};

function textToMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseMap[char] || "")
    .join(" ");
}

export default function MorseCodeTranslator() {
  const [text, setText] = useState("Arriba las chivas");
  const audioContextRef = useRef(null);

  const morse = textToMorse(text);

  // Reproduce el morse como una serie de pitidos reales,
  // usando osciladores generados con la Web Audio API.
  function playMorse() {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    const dotDuration = 0.08;
    let time = ctx.currentTime;

    morse.split("").forEach((symbol) => {
      if (symbol === "." || symbol === "-") {
        const duration = symbol === "." ? dotDuration : dotDuration * 3;
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.frequency.value = 600;
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.setValueAtTime(0.2, time);
        oscillator.start(time);
        oscillator.stop(time + duration);
        time += duration + dotDuration;
      } else {
        time += dotDuration * 2; // pausa entre letras/palabras
      }
    });
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
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "14px",
          marginBottom: "14px",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          background: "#111",
          color: "#4ade80",
          fontFamily: "monospace",
          fontSize: "16px",
          padding: "16px",
          borderRadius: "10px",
          wordBreak: "break-all",
          marginBottom: "14px",
          minHeight: "24px",
        }}
      >
        {morse}
      </div>

      <button
        onClick={playMorse}
        style={{
          padding: "10px 18px",
          borderRadius: "10px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        🔊 Play as sound
      </button>
    </div>
  );
}
