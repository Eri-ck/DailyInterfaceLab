import { useRef } from "react";

const colors = ["#f59e0b", "#2563eb", "#16a34a", "#dc2626", "#9333ea"];

export default function ConfettiButton() {
  const canvasRef = useRef(null);

  function launchConfetti() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Creamos un array de partículas, cada una con su propia posición,
    // velocidad, color y rotación — esto es la base de cualquier sistema de partículas.
    const particles = Array.from({ length: 80 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10 - 4,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 20,
    }));

    let frame = 0;
    const maxFrames = 90;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravedad
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ position: "relative", textAlign: "center", padding: "20px 0" }}
      >
        <button
          onClick={launchConfetti}
          style={{
            padding: "14px 28px",
            borderRadius: "12px",
            border: "none",
            background: "#111",
            color: "#fff",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          🎉 Celebrate
        </button>
      </div>
    </div>
  );
}
