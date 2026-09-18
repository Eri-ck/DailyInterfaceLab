const teamMembers = ["MG", "DT", "AR", "JL", "PK", "SN", "CV"];
const maxVisible = 4;

export default function AvatarGroup() {
  const visible = teamMembers.slice(0, maxVisible);
  const overflowCount = teamMembers.length - maxVisible;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <div style={{ display: "flex" }}>
        {visible.map((initials, index) => (
          <div
            key={initials}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "999px",
              background: "#111",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #fff",
              marginLeft: index === 0 ? 0 : "-10px",
              zIndex: visible.length - index,
            }}
          >
            {initials}
          </div>
        ))}

        {overflowCount > 0 && (
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "999px",
              background: "#f3f4f6",
              color: "#555",
              fontSize: "12px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #fff",
              marginLeft: "-10px",
            }}
          >
            +{overflowCount}
          </div>
        )}
      </div>

      <p style={{ marginTop: "12px", fontSize: "13px", color: "#666" }}>
        {teamMembers.length} people on this team
      </p>
    </div>
  );
}
