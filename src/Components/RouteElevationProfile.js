import { useState, useEffect } from "react";

// Puntos de ejemplo a lo largo de una ruta ciclista real en CDMX
// (Reforma, de Chapultepec hacia el Centro).
const routePoints = [
  { lat: 19.4204, lon: -99.1817 },
  { lat: 19.4244, lon: -99.1735 },
  { lat: 19.4284, lon: -99.165 },
  { lat: 19.431, lon: -99.155 },
  { lat: 19.4326, lon: -99.145 },
  { lat: 19.4326, lon: -99.1332 },
];

export default function RouteElevationProfile() {
  const [elevations, setElevations] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const lats = routePoints.map((p) => p.lat).join(",");
    const lons = routePoints.map((p) => p.lon).join(",");

    fetch(
      `https://api.open-meteo.com/v1/elevation?latitude=${lats}&longitude=${lons}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Elevation request failed");
        return res.json();
      })
      .then((data) => {
        setElevations(data.elevation);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  const chartWidth = 360;
  const chartHeight = 120;
  const maxElevation = Math.max(...elevations, 1);
  const minElevation = Math.min(...elevations, 0);
  const range = maxElevation - minElevation || 1;

  // Convertimos cada elevación en un punto (x, y) dentro del área del gráfico.
  const points = elevations.map((elevation, index) => {
    const x = (index / (elevations.length - 1)) * chartWidth;
    const y = chartHeight - ((elevation - minElevation) / range) * chartHeight;
    return `${x},${y}`;
  });

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#666" }}>
        Elevation along Paseo de la Reforma (Chapultepec → Centro)
      </p>

      {status === "loading" && (
        <p style={{ color: "#999", fontSize: "13px" }}>
          Loading elevation data...
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: "13px" }}>
          Couldn't load elevation data.
        </p>
      )}

      {status === "success" && elevations.length > 0 && (
        <>
          <svg
            width={chartWidth}
            height={chartHeight}
            style={{ display: "block" }}
          >
            <polyline
              points={points.join(" ")}
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {elevations.map((elevation, index) => {
              const x = (index / (elevations.length - 1)) * chartWidth;
              const y =
                chartHeight -
                ((elevation - minElevation) / range) * chartHeight;
              return <circle key={index} cx={x} cy={y} r="3" fill="#111" />;
            })}
          </svg>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
              fontSize: "12px",
              color: "#999",
            }}
          >
            <span>Min: {Math.round(minElevation)}m</span>
            <span>Max: {Math.round(maxElevation)}m</span>
            <span>Gain: {Math.round(maxElevation - minElevation)}m</span>
          </div>
        </>
      )}
    </div>
  );
}
