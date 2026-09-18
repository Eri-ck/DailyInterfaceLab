import { useRef, useState, useEffect } from "react";

export default function SignaturePad() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#111";
  }, []);

  function getCoords(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function startDrawing(e) {
    isDrawing.current = true;
    setIsEmpty(false);
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function draw(e) {
    if (!isDrawing.current) return;
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function stopDrawing() {
    isDrawing.current = false;
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsEmpty(true);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666" }}>
        Sign below with your mouse or finger
      </p>

      <canvas
        ref={canvasRef}
        width={400}
        height={160}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "160px",
          border: "1px dashed #ddd",
          borderRadius: "12px",
          touchAction: "none",
          cursor: "crosshair",
        }}
      />

      <button
        onClick={clearCanvas}
        disabled={isEmpty}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          background: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: isEmpty ? "not-allowed" : "pointer",
          opacity: isEmpty ? 0.5 : 1,
        }}
      >
        Clear
      </button>
    </div>
  );
}
