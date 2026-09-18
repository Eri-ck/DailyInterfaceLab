import stats from "../data/stats";

function StatCard({ title, value, change, icon }) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "20px",
        padding: "20px",
        transition: "all .2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{title}</p>

        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "12px",
            background: "#f4f4f4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          {icon}
        </div>
      </div>

      <h2 style={{ margin: 0, fontSize: "36px", lineHeight: "1" }}>{value}</h2>

      <div
        style={{
          height: "1px",
          background: "#efefef",
          margin: "18px 0",
        }}
      />

      <span style={{ fontSize: "14px", fontWeight: "600", color: "#16a34a" }}>
        ↑ {change}
      </span>
    </article>
  );
}

export default function StatsGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
      }}
    >
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
}
