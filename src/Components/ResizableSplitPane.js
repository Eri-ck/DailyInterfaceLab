import { useState, useRef, useEffect } from "react";

export default function ResizableSplitPane() {
  const [leftWidth, setLeftWidth] = useState(50); // porcentaje
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      if (!isDragging.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - rect.left) / rect.width) * 100;

      // Limitamos entre 20% y 80% para que ningún panel desaparezca.
      const clamped = Math.min(80, Math.max(20, newWidth));
      setLeftWidth(clamped);
    }

    function handleMouseUp() {
      isDragging.current = false;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          height: "220px",
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid #eee",
        }}
      >
        <div
          style={{
            width: `${leftWidth}%`,
            background: "#f3f4f6",
            padding: "16px",
            fontSize: "13px",
            color: "#555",
          }}
        >
          Left panel ({Math.round(leftWidth)}%)
        </div>

        {/* El divisor arrastrable */}
        <div
          onMouseDown={() => (isDragging.current = true)}
          style={{
            width: "6px",
            cursor: "col-resize",
            background: "#ddd",
            flexShrink: 0,
          }}
        />

        <div
          style={{
            width: `${100 - leftWidth}%`,
            background: "#fff",
            padding: "16px",
            fontSize: "13px",
            color: "#555",
          }}
        >
          Right panel ({Math.round(100 - leftWidth)}%)
        </div>
      </div>
    </div>
  );
}
