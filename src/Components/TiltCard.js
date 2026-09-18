import { useRef, useState } from "react";

export default function TiltCard() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");

  function handleMouseMove(e) {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Posición del mouse relativa al centro de la tarjeta, de -1 a 1.
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = y * -14; // invertido para que se sienta natural
    const rotateY = x * 14;

    setTransform(
      `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    );
  }

  function handleMouseLeave() {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)");
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "240px",
          height: "150px",
          borderRadius: "18px",
          background: "linear-gradient(135deg, #111 0%, #333 100%)",
          transform,
          transition: "transform .1s ease-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
          color: "#fff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <p style={{ margin: 0, fontSize: "12px", color: "#aaa" }}>
          Move your mouse over me
        </p>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}>
          3D Tilt Card
        </p>
      </div>
    </div>
  );
}
