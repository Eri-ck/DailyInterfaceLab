const path = ["Home", "Projects", "Daily Interface Lab", "Week 06"];

export default function Breadcrumbs() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "6px",
        }}
      >
        {path.map((crumb, index) => {
          const isLast = index === path.length - 1;
          return (
            <div
              key={crumb}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: isLast ? 700 : 500,
                  color: isLast ? "#111" : "#888",
                  cursor: isLast ? "default" : "pointer",
                }}
              >
                {crumb}
              </span>
              {!isLast && <span style={{ color: "#ccc" }}>/</span>}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
