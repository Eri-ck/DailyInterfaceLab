import { useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Dragon fruit",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
];

export default function LiveSearch() {
  const [query, setQuery] = useState("");

  // Filtramos en cada render — no hace falta useMemo con una lista tan chica,
  // pero en listas grandes ahí es donde useMemo evita recalcular de más.
  const results = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search fruits..."
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "14px",
          marginBottom: "16px",
          boxSizing: "border-box",
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {results.map((fruit) => (
          <span
            key={fruit}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#f3f4f6",
              fontSize: "13px",
              color: "#333",
            }}
          >
            {fruit}
          </span>
        ))}
        {results.length === 0 && (
          <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>
            No results for "{query}"
          </p>
        )}
      </div>
    </div>
  );
}
