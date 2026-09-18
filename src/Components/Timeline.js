const events = [
  {
    time: "9:00 AM",
    title: "Project kicked off",
    description: "Initial planning meeting with the team.",
  },
  {
    time: "11:30 AM",
    title: "Wireframes approved",
    description: "Client gave feedback and signed off.",
  },
  {
    time: "2:00 PM",
    title: "Design review",
    description: "Walked through the component library.",
  },
  {
    time: "4:45 PM",
    title: "Deployed to staging",
    description: "First build is live for internal testing.",
  },
];

export default function Timeline() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      {events.map((event, index) => {
        const isLast = index === events.length - 1;
        return (
          <div key={event.title} style={{ display: "flex", gap: "16px" }}>
            {/* Columna del punto + línea conectora */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#111",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              />
              {!isLast && (
                <div
                  style={{
                    width: "2px",
                    flex: 1,
                    background: "#eee",
                    minHeight: "40px",
                  }}
                />
              )}
            </div>

            {/* Contenido del evento */}
            <div style={{ paddingBottom: isLast ? 0 : "20px" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
                {event.time}
              </p>
              <p
                style={{
                  margin: "2px 0 4px",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                {event.title}
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
                {event.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
