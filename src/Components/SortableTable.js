import { useState } from "react";

const data = [
  { name: "Maria Lopez", role: "Designer", tasks: 12 },
  { name: "Diego Torres", role: "Engineer", tasks: 8 },
  { name: "Ana Reyes", role: "Researcher", tasks: 15 },
  { name: "Juan Perez", role: "Engineer", tasks: 5 },
];

export default function SortableTable() {
  const [sortKey, setSortKey] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  function handleSort(key) {
    if (sortKey === key) {
      // Si ya estabas ordenando por esta columna, invierte la dirección.
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  }

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    const comparison =
      typeof valueA === "string"
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
    return sortDirection === "asc" ? comparison : -comparison;
  });

  function sortIndicator(key) {
    if (sortKey !== key) return "";
    return sortDirection === "asc" ? " ▲" : " ▼";
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f3f4f6", textAlign: "left" }}>
            {["name", "role", "tasks"].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                style={{
                  padding: "14px 16px",
                  fontSize: "13px",
                  color: "#555",
                  cursor: "pointer",
                  userSelect: "none",
                  textTransform: "capitalize",
                }}
              >
                {key}
                {sortIndicator(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.name} style={{ borderTop: "1px solid #eee" }}>
              <td style={{ padding: "14px 16px", fontSize: "14px" }}>
                {row.name}
              </td>
              <td
                style={{
                  padding: "14px 16px",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                {row.role}
              </td>
              <td
                style={{
                  padding: "14px 16px",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                {row.tasks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
