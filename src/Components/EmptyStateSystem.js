const emptyStates = [
  {
    variant: "patients",
    icon: "👤",
    title: "No patients yet",
    description:
      "Start by adding your first patient to manage their medical history.",
    actionLabel: "Add patient",
  },
  {
    variant: "appointments",
    icon: "📅",
    title: "No appointments scheduled",
    description:
      "Create your first appointment to organize your daily workflow.",
    actionLabel: "Create appointment",
  },
  {
    variant: "reports",
    icon: "📊",
    title: "No reports available",
    description:
      "Reports will appear here once you start collecting activity data.",
    actionLabel: "View reports",
  },
];

function EmptyState({ icon, title, description, actionLabel }) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "36px",
        textAlign: "center",
        transition: "all .2s ease",
        cursor: "pointer",
      }}
      // Hover premium
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Icon container */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "20px",
          background: "#f4f4f4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          margin: "0 auto 20px",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          margin: 0,
          fontSize: "22px",
          color: "#111",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          margin: "12px auto 24px",
          color: "#666",
          lineHeight: "1.5",
          maxWidth: "320px",
        }}
      >
        {description}
      </p>

      {/* CTA */}
      <button
        style={{
          border: "none",
          borderRadius: "999px",
          background: "#111",
          color: "#fff",
          padding: "12px 18px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        {actionLabel}
      </button>
    </article>
  );
}

export default function EmptyStateSystem() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
      }}
    >
      {emptyStates.map((state) => (
        <EmptyState key={state.variant} {...state} />
      ))}
    </section>
  );
}
