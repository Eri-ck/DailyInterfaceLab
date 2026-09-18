function SidebarItem({ icon, label, active }) {
  return (
    <button
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.background = "#F3F4F6";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = "transparent";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(.98)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "8px",

        padding: "10px 12px",

        border: active ? "1px solid #E5E7EB" : "1px solid transparent",

        borderRadius: "12px",

        background: active ? "#F3F4F6" : "transparent",

        color: "#111827",

        cursor: "pointer",

        fontSize: "14px",

        fontWeight: active ? "600" : "500",

        textAlign: "left",

        transition: "all .18s ease",
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default function SideBar2() {
  return (
    <aside
      style={{
        width: "280px",
        minHeight: "100vh",

        background: "white",

        padding: "24px",

        boxShadow: "8px 0 30px rgba(0,0,0,.06)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Medical Card
        </h2>

        <p
          style={{
            marginTop: "4px",
            fontSize: "13px",
            color: "#6B7280",
          }}
        >
          Dashboard
        </p>

        <nav
          style={{
            marginTop: "32px",
            display: "grid",
            gap: "8px",
          }}
        >
          <SidebarItem icon="🏠" label="Inicio" active />

          <SidebarItem icon="👤" label="Pacientes" />

          <SidebarItem icon="📅" label="Citas" />

          <SidebarItem icon="📄" label="Expedientes" />

          <SidebarItem icon="💬" label="Mensajes" />

          <SidebarItem icon="⚙️" label="Configuración" />
        </nav>
      </div>

      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",

              borderRadius: "50%",

              background: "#111827",

              color: "white",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            E
          </div>

          <div>
            <strong
              style={{
                display: "block",
                fontSize: "14px",
                color: "#111827",
              }}
            >
              Erick Suárez
            </strong>

            <p
              style={{
                margin: 0,
                fontSize: "12px",
                color: "#6B7280",
              }}
            >
              UX Engineer
            </p>
          </div>
        </div>

        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#FEF2F2";
            e.currentTarget.style.color = "#DC2626";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#6B7280";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(.98)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          style={{
            width: "100%",

            display: "flex",
            alignItems: "center",
            gap: "8px",

            padding: "10px 12px",

            border: "none",
            borderRadius: "12px",

            background: "transparent",

            color: "#6B7280",

            cursor: "pointer",

            fontSize: "14px",
            fontWeight: "500",

            transition: "all .18s ease",
          }}
        >
          🚪 Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
