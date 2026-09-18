import { useState } from "react";

const zocalo = { lat: 19.4326, lon: -99.1332 };

// Fórmula de Haversine: calcula distancia real entre dos puntos
// de la Tierra a partir de latitud/longitud.
function distanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function DistanceToZocalo() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [distance, setDistance] = useState(null);

  function locateMe() {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const km = distanceInKm(latitude, longitude, zocalo.lat, zocalo.lon);
        setDistance(km);
        setStatus("success");
      },
      () => setStatus("error"),
      { timeout: 8000 }
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "380px",
        textAlign: "center",
      }}
    >
      <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#666" }}>
        Uses your browser's real location (with permission) to calculate
        distance to the Zócalo, CDMX.
      </p>

      <button
        onClick={locateMe}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
          marginBottom: "16px",
        }}
      >
        📍 Locate me
      </button>

      {status === "loading" && (
        <p style={{ color: "#999", fontSize: "13px" }}>
          Getting your location...
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: "13px" }}>
          Location unavailable — check browser permissions.
        </p>
      )}
      {status === "success" && distance !== null && (
        <p style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>
          {distance.toFixed(1)} km
          <span
            style={{
              display: "block",
              fontSize: "12px",
              color: "#999",
              fontWeight: 400,
              marginTop: "4px",
            }}
          >
            from the Zócalo
          </span>
        </p>
      )}
    </div>
  );
}
