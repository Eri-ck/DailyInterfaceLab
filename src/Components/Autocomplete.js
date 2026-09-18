import { useState } from "react";

const cities = [
  "Mexico City",
  "Guadalajara",
  "Monterrey",
  "Puebla",
  "Tijuana",
  "Cancun",
  "Merida",
  "Queretaro",
  "Leon",
  "Oaxaca",
];

export default function Autocomplete() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selected, setSelected] = useState(null);

  const matches =
    query.trim() === ""
      ? []
      : cities.filter((city) =>
          city.toLowerCase().includes(query.toLowerCase())
        );

  function handleKeyDown(e) {
    if (matches.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % matches.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + matches.length) % matches.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      selectCity(matches[activeIndex]);
    }
  }

  function selectCity(city) {
    setSelected(city);
    setQuery(city);
    setActiveIndex(-1);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "320px",
      }}
    >
      <div style={{ position: "relative" }}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search a city..."
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />

        {matches.length > 0 && !selected && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              zIndex: 10,
            }}
          >
            {matches.map((city, index) => (
              <div
                key={city}
                onClick={() => selectCity(city)}
                style={{
                  padding: "10px 14px",
                  fontSize: "13px",
                  cursor: "pointer",
                  background: index === activeIndex ? "#f3f4f6" : "#fff",
                }}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <p style={{ marginTop: "12px", fontSize: "13px", color: "#666" }}>
          Selected: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
}
