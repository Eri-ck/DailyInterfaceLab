import { Link } from "react-router-dom";

// Botón al final de cada semana para avanzar a la siguiente.
// Si nextPath es null (la semana siguiente todavía no existe),
// se muestra deshabilitado en vez de romper la navegación.
export default function WeekFooterNav({ nextPath, nextLabel }) {
  const isDisabled = !nextPath;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "12px",
        marginBottom: "40px",
      }}
    >
      {isDisabled ? (
        <span
          style={{
            padding: "12px 24px",
            borderRadius: "999px",
            background: "#e5e5e5",
            color: "#999",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {nextLabel ?? "Próxima semana"} · próximamente
        </span>
      ) : (
        <Link
          to={nextPath}
          style={{
            padding: "12px 24px",
            borderRadius: "999px",
            background: "#111111",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Ir a {nextLabel} →
        </Link>
      )}
    </div>
  );
}
