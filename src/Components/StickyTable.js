const rows = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Task ${i + 1}`,
  status: i % 3 === 0 ? "Done" : i % 3 === 1 ? "In Progress" : "Pending",
}));

export default function StickyTable() {
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
        style={{
          height: "240px",
          overflowY: "auto",
          borderRadius: "10px",
          border: "1px solid #eee",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            {/* position: sticky + top: 0 dentro de un contenedor con scroll
                  es lo que mantiene el header visible mientras haces scroll. */}
            <tr>
              <th style={stickyHeaderStyle}>ID</th>
              <th style={stickyHeaderStyle}>Task</th>
              <th style={stickyHeaderStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} style={{ borderTop: "1px solid #f3f4f6" }}>
                <td style={cellStyle}>{row.id}</td>
                <td style={cellStyle}>{row.name}</td>
                <td style={cellStyle}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const stickyHeaderStyle = {
  position: "sticky",
  top: 0,
  background: "#f3f4f6",
  textAlign: "left",
  padding: "10px 14px",
  fontSize: "12px",
  color: "#666",
  zIndex: 1,
};

const cellStyle = {
  padding: "10px 14px",
  fontSize: "13px",
};
