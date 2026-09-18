const cards = [
  {
    title: "Active Patients",
    value: "248",
    description: "12% increase from last week",
    status: "Healthy",
  },
  {
    title: "Appointments",
    value: "36",
    description: "8 pending confirmations",
    status: "Today",
  },
  {
    title: "Revenue",
    value: "$18.4k",
    description: "Stable monthly performance",
    status: "Stable",
  },
];

function MiniChart() {
  return (
    <div
      style={{ display: "flex", gap: "6px", alignItems: "end", height: "50px" }}
    >
      {[20, 35, 15, 40, 25, 45, 30].map((h, i) => (
        <div
          key={i}
          style={{
            height: h,
            flex: 1,
            background: "#f97316",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
}

function Card({ title, value, description, status }) {
  return (
    <article
      style={{
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#666", margin: 0 }}>{title}</p>
        <span
          style={{
            border: "1px solid #ddd",
            borderRadius: "999px",
            padding: "4px 10px",
            fontSize: "12px",
          }}
        >
          {status}
        </span>
      </div>

      <h1 style={{ fontSize: "48px", margin: "32px 0 16px" }}>{value}</h1>

      <MiniChart />

      <p style={{ color: "#666", marginTop: "20px" }}>{description}</p>
    </article>
  );
}

export default function StatusCard() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px",
      }}
    >
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </section>
  );
}
