import { useState, useRef } from "react";

function SmartTooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState("top");
  const wrapperRef = useRef(null);

  function handleMouseEnter() {
    // Detectamos si hay suficiente espacio arriba; si no, mostramos el tooltip abajo.
    const rect = wrapperRef.current.getBoundingClientRect();
    setPosition(rect.top < 80 ? "bottom" : "top");
    setIsVisible(true);
  }

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsVisible(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}

      {isVisible && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            [position === "top" ? "bottom" : "top"]: "calc(100% + 8px)",
            background: "#111",
            color: "#fff",
            fontSize: "12px",
            padding: "6px 10px",
            borderRadius: "6px",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default function TooltipDemo() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <p style={{ margin: "0 0 20px", fontSize: "13px", color: "#666" }}>
        Hover the button near the top of the card vs. the one below — the
        tooltip flips automatically.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <SmartTooltip text="I flip to the bottom because there's no room above">
          <button style={btnStyle}>Near the top</button>
        </SmartTooltip>

        <SmartTooltip text="I show on top, plenty of room here">
          <button style={btnStyle}>Lower down</button>
        </SmartTooltip>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 18px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#fff",
  fontSize: "13px",
  cursor: "pointer",
};
