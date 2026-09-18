// ---------------------------------------------------------
// Header del laboratorio: título, subtítulo, contador semanal
// y una imagen de perfil opcional a la derecha.
// Recibe props para que puedas actualizar el contador cada día
// sin tocar el layout.
// ---------------------------------------------------------
export default function LabHeader({ week, componentsCompleted, avatarUrl }) {
  return (
    <header
      style={{
        background: "#111111",
        borderRadius: "24px",
        padding: "40px 32px",
        marginBottom: "32px",
        color: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "36px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          Daily Interface Lab
        </h1>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "17px",
            color: "#a3a3a3",
          }}
        >
          Building better interfaces, one day at a time.
        </p>

        <div
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "8px 16px",
            borderRadius: "999px",
            background: "#1f1f1f",
            border: "1px solid #333",
            fontSize: "14px",
            color: "#e5e5e5",
          }}
        >
          Week {String(week).padStart(2, "0")} • {componentsCompleted}{" "}
          Components Completed
        </div>
      </div>

      {/* Logo. Si no se pasa avatarUrl, no se muestra nada. */}
      {avatarUrl && (
        <div
          style={{
            width: "72px",
            height: "72px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={avatarUrl}
            alt="Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      )}
    </header>
  );
}
