export default function SideBar() {
  return (
    <aside
      style={{
        width: "280px",
        background: "white",
        padding: "24px",
        minHeight: "100vh",
        boxShadow: "8px 0 30px rgba(0,0,0,.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2>Medical Card</h2>

        <div
          style={{
            marginTop: "32px",
            display: "grid",
            gap: "12px",
          }}
        >
          <button
            onMouseEnter={(e) => {
              e.target.style.background = "#F3F4F6";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#FFFFFF";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(.98)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",

              width: "100%",

              padding: "12px",
              border: "none",
              borderRadius: "12px",

              background: "#FFFFFF",

              color: "#111827",

              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",

              transition: "all .18s ease",
            }}
          >
            🏠 Inicio
          </button>
          <button
            onMouseEnter={(e) => {
              e.target.style.background = "#F3F4F6";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#FFFFFF";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(.98)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",

              width: "100%",

              padding: "12px",
              border: "none",
              borderRadius: "12px",

              background: "#FFFFFF",

              color: "#111827",

              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",

              transition: "all .18s ease",
            }}
          >
            👤 Pacientes
          </button>
          <button
            onMouseEnter={(e) => {
              e.target.style.background = "#F3F4F6";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#FFFFFF";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(.98)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",

              width: "100%",

              padding: "12px",
              border: "none",
              borderRadius: "12px",

              background: "#FFFFFF",

              color: "#111827",

              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",

              transition: "all .18s ease",
            }}
          >
            📅 Citas
          </button>
          <button
            onMouseEnter={(e) => {
              e.target.style.background = "#F3F4F6";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#FFFFFF";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(.98)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",

              width: "100%",

              padding: "12px",
              border: "none",
              borderRadius: "12px",

              background: "#FFFFFF",

              color: "#111827",

              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",

              transition: "all .18s ease",
            }}
          >
            ⚙️ Configuración
          </button>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          paddingTop: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "4px 0",
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
              fontWeight: "600",
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
            e.target.style.background = "#FEF2F2";
            e.target.style.color = "#DC2626";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#6B7280";
          }}
          onMouseDown={(e) => {
            e.target.style.transform = "scale(.98)";
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "scale(1)";
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
