import { useState } from "react";

const images = [
  "https://picsum.photos/seed/lab1/600/300",
  "https://picsum.photos/seed/lab2/600/300",
  "https://picsum.photos/seed/lab3/600/300",
  "https://picsum.photos/seed/lab4/600/300",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  function goNext() {
    // % length hace que después de la última imagen regrese a la 0 (circular).
    setIndex((current) => (current + 1) % images.length);
  }

  function goPrev() {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          style={{
            width: "100%",
            display: "block",
            height: "260px",
            objectFit: "cover",
          }}
        />

        <button
          onClick={goPrev}
          style={arrowStyle("left")}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          style={arrowStyle("right")}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Puntos indicadores */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          marginTop: "14px",
        }}
      >
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: dotIndex === index ? "#111" : "#ddd",
            }}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function arrowStyle(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: "12px",
    transform: "translateY(-50%)",
    width: "36px",
    height: "36px",
    borderRadius: "999px",
    border: "none",
    background: "rgba(255,255,255,0.9)",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}
