export default function CardMedico() {
  return (
    <div
      style={{
        width: "360px",
        background: "white",
        padding: "24px",
        borderRadius: "24px",
        boxShadow: "0 12px 30px rgba(0,0,0,.12)",
      }}
    >
      <p style={{ color: "#6b7280" }}>Paciente próximo</p>

      <h2 style={{ fontSize: "28px" }}>María González</h2>

      <button
        style={{
          width: "100%",
          background: "#006341",
          color: "white",
          border: 0,
          padding: "14px",
          borderRadius: "16px",
          fontWeight: "bold",
        }}
      >
        Iniciar cita
      </button>
    </div>
  );
}
