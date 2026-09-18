import { useRef, useEffect } from "react";

const planets = [
  { name: "Mercury", radius: 40, size: 3, speed: 0.04, color: "#a8a29e" },
  { name: "Venus", radius: 60, size: 5, speed: 0.03, color: "#fbbf24" },
  { name: "Earth", radius: 82, size: 5, speed: 0.025, color: "#3b82f6" },
  { name: "Mars", radius: 104, size: 4, speed: 0.02, color: "#dc2626" },
];

export default function SolarSystemOrbit() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let animationFrameId;
    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Órbitas (círculos guía)
      planets.forEach((planet) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#eee";
        ctx.stroke();
      });

      // Sol
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.fillStyle = "#f59e0b";
      ctx.fill();

      // Planetas, cada uno en su propia posición según su velocidad angular
      planets.forEach((planet) => {
        const x = centerX + Math.cos(angle * planet.speed * 60) * planet.radius;
        const y = centerY + Math.sin(angle * planet.speed * 60) * planet.radius;

        ctx.beginPath();
        ctx.arc(x, y, planet.size, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
      });

      angle += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <canvas ref={canvasRef} width={260} height={260} />
    </div>
  );
}
