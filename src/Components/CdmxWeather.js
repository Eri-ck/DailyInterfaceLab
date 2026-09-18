import { useState, useEffect } from "react";

// Coordenadas reales de algunas colonias/zonas de CDMX.
const cdmxLocations = [
  { name: "Centro Histórico", lat: 19.4326, lon: -99.1332 },
  { name: "Roma Norte", lat: 19.4181, lon: -99.1616 },
  { name: "Condesa", lat: 19.4109, lon: -99.1712 },
  { name: "Polanco", lat: 19.4326, lon: -99.1932 },
  { name: "Coyoacán", lat: 19.3467, lon: -99.1618 },
  { name: "Santa Fe", lat: 19.3591, lon: -99.2596 },
  { name: "Xochimilco", lat: 19.2647, lon: -99.1031 },
  { name: "Del Valle", lat: 19.3831, lon: -99.1653 },
];

// Convierte grados de dirección del viento en un punto cardinal legible.
function windDirectionLabel(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

export default function CdmxWeather() {
  const [selected, setSelected] = useState(cdmxLocations[0]);
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    setStatus("loading");

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${selected.lat}&longitude=${selected.lon}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Weather request failed");
        return res.json();
      })
      .then((data) => {
        setWeather(data.current);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [selected]);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "420px",
      }}
    >
      <select
        value={selected.name}
        onChange={(e) =>
          setSelected(cdmxLocations.find((loc) => loc.name === e.target.value))
        }
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        {cdmxLocations.map((loc) => (
          <option key={loc.name} value={loc.name}>
            {loc.name}
          </option>
        ))}
      </select>

      {status === "loading" && (
        <p style={{ color: "#999", fontSize: "13px" }}>
          Loading weather data...
        </p>
      )}

      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: "13px" }}>
          Couldn't load weather data. Try another colonia.
        </p>
      )}

      {status === "success" && weather && (
        <div>
          <p style={{ margin: "0 0 4px", fontSize: "42px", fontWeight: 700 }}>
            {Math.round(weather.temperature_2m)}°C
          </p>
          <p style={{ margin: "0 0 20px", color: "#666", fontSize: "13px" }}>
            {selected.name}, CDMX
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <WeatherStat
              label="Wind"
              value={`${Math.round(weather.wind_speed_10m)} km/h`}
            />
            <WeatherStat
              label="Direction"
              value={windDirectionLabel(weather.wind_direction_10m)}
            />
            <WeatherStat
              label="Humidity"
              value={`${weather.relative_humidity_2m}%`}
            />
            <WeatherStat
              label="Pressure"
              value={`${Math.round(weather.surface_pressure)} hPa`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function WeatherStat({ label, value }) {
  return (
    <div
      style={{ background: "#f9fafb", borderRadius: "10px", padding: "12px" }}
    >
      <p style={{ margin: "0 0 2px", fontSize: "11px", color: "#999" }}>
        {label}
      </p>
      <p style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}>{value}</p>
    </div>
  );
}
