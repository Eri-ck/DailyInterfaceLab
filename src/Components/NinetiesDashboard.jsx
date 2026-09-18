const metrics = [
  { label: "Pacientes", value: "128", change: "+12 esta semana", icon: "◎" },
  { label: "Citas hoy", value: "34", change: "8 pendientes", icon: "◧" },
  { label: "Alertas", value: "5", change: "Revisar hoy", icon: "△" },
];

const activities = [
  { time: "10:24", event: "Paciente Ana López confirmó cita" },
  { time: "09:17", event: "Nuevo registro agregado" },
  { time: "08:56", event: "Recordatorio enviado" },
  { time: "08:31", event: "Expediente actualizado" },
];

function MetricCard({ label, value, change, icon }) {
  return (
    <div
      style={{
        height: "168px",
        padding: "24px",
        borderRadius: "16px",
        border: "1px solid #d4d4d4",
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f6f6 55%, #e9e9e9 100%)",
        boxShadow: "0 14px 28px rgba(0,0,0,0.08)",
        display: "grid",
        gridTemplateColumns: "1fr 56px",
        gap: "16px",
      }}
    >
      <div>
        <p style={{ margin: 0, fontSize: "18px", color: "#111" }}>{label}</p>

        <h3
          style={{
            margin: "4px 0 8px",
            fontSize: "64px",
            lineHeight: 0.9,
            fontWeight: "900",
            letterSpacing: "-4px",
            color: "#000",
          }}
        >
          {value}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "17px",
            color: "#444",
            fontWeight: 700,
          }}
        >
          {change}
        </p>
      </div>

      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "14px",
          border: "1px solid #cfcfcf",
          background: "linear-gradient(135deg, #fafafa, #dcdcdc)",
          display: "grid",
          placeItems: "center",
          fontSize: "28px",
          color: "#111",
        }}
      >
        {icon}
      </div>
    </div>
  );
}

export default function NinetiesDashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f0f0",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#0a0a0a",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <header
          style={{
            background: "linear-gradient(135deg, #050505, #2b2b2b)",
            borderRadius: "16px",
            padding: "30px",
            color: "white",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              letterSpacing: "4px",
              fontSize: "12px",
              fontWeight: "800",
              textTransform: "uppercase",
              color: "#d4d4d4",
            }}
          >
            UX Engineering Practice
          </p>

          <h1 style={{ fontSize: "46px", fontWeight: "900", margin: "10px 0" }}>
            Mini Dashboard Responsive
          </h1>

          <p style={{ color: "#d4d4d4", fontSize: "16px" }}>
            Layout elegante en blanco y negro inspirado en sistemas noventeros.
          </p>
        </header>

        <main
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          <aside
            style={{
              background: "linear-gradient(180deg, #ffffff, #eeeeee)",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid #d4d4d4",
              boxShadow: "0 14px 28px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  marginBottom: "24px",
                }}
              >
                ClinicOS
              </h2>

              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {["Dashboard", "Pacientes", "Citas", "Reportes"].map(
                  (item, index) => (
                    <button
                      key={item}
                      style={{
                        padding: "13px 14px",
                        borderRadius: "12px",
                        border: "1px solid #d4d4d4",
                        background:
                          index === 0
                            ? "linear-gradient(135deg, #111, #333)"
                            : "white",
                        color: index === 0 ? "white" : "#333",
                        textAlign: "left",
                        fontWeight: "800",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </button>
                  )
                )}
              </nav>
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "14px",
                borderRadius: "12px",
                background: "#fff",
                border: "1px solid #d4d4d4",
                fontSize: "13px",
                color: "#555",
                fontWeight: "700",
              }}
            >
              Sistema activo
              <br />
              v1.0.0 · 1995
            </div>
          </aside>

          <section>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #d4d4d4",
                boxShadow: "0 14px 28px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  padding: "18px 24px",
                  borderBottom: "1px solid #d4d4d4",
                  background: "linear-gradient(135deg, #ffffff, #efefef)",
                }}
              >
                <h2 style={{ fontSize: "26px", fontWeight: "900", margin: 0 }}>
                  Actividad reciente
                </h2>
                <p
                  style={{ color: "#555", fontSize: "14px", marginTop: "4px" }}
                >
                  Registro limpio de movimientos del sistema.
                </p>
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#111", color: "white" }}>
                    <th style={{ padding: "14px 24px", textAlign: "left" }}>
                      Hora
                    </th>
                    <th style={{ padding: "14px 24px", textAlign: "left" }}>
                      Detalle
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {activities.map((activity) => (
                    <tr key={activity.event}>
                      <td
                        style={{
                          padding: "16px 24px",
                          borderBottom: "1px solid #e5e5e5",
                          color: "#666",
                          fontWeight: "800",
                          width: "120px",
                        }}
                      >
                        {activity.time}
                      </td>

                      <td
                        style={{
                          padding: "16px 24px",
                          borderBottom: "1px solid #e5e5e5",
                          fontWeight: "700",
                        }}
                      >
                        {activity.event}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
