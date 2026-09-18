import { useState, useEffect } from "react";

const phrases = [
  "Building better interfaces.",
  "One component at a time.",
  "Learning by doing, every day.",
];

export default function TypewriterEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    // La velocidad varía: escribir es más lento que borrar,
    // y hacemos una pausa cuando termina de escribir la frase completa.
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentPhrase) {
      speed = 1500; // pausa antes de empezar a borrar
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }

      setDisplayedText((current) =>
        isDeleting
          ? current.slice(0, -1)
          : currentPhrase.slice(0, current.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <div
      style={{
        background: "#111",
        borderRadius: "24px",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: 700,
          color: "#fff",
          fontFamily: "monospace",
          minHeight: "32px",
        }}
      >
        {displayedText}
        <span
          style={{
            borderRight: "2px solid #fff",
            marginLeft: "2px",
            animation: "blink 1s step-end infinite",
          }}
        />
      </p>

      <style>
        {`
          @keyframes blink {
            50% { border-color: transparent; }
          }
        `}
      </style>
    </div>
  );
}
