// Convierte un número de día (1, 2, 3...) en una fecha real,
// asumiendo que el Día 1 = 25-05-26. Cada día siguiente suma un día real.
// IMPORTANTE: en JavaScript los meses empiezan en 0 (enero = 0, mayo = 4),
// por eso abajo usamos "4" para mayo y no "5".
function formatDateFromDay(day) {
  const startDate = new Date(2026, 4, 25); // 25 de mayo de 2026
  const targetDate = new Date(startDate);
  targetDate.setDate(startDate.getDate() + (day - 1));

  const dd = String(targetDate.getDate()).padStart(2, "0");
  const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
  const yy = String(targetDate.getFullYear()).slice(-2);

  return `${dd}-${mm}-${yy}`;
}

// Componente contenedor para cada clase.
// Sirve para repetir el mismo marco blanco, título, subtítulo y separación visual.
//
// La fecha se calcula sola a partir de "day" (Día 1 = 25-05-26).
// Si por alguna razón un ejercicio no coincide con esa fecha calculada
// (lo hiciste otro día, se te pasó, etc.), puedes forzar la fecha exacta
// pasando dateOverride="DD-MM-YY" y esa se usa en vez de la calculada.
export default function ExerciseBlock({
  day,
  title,
  description,
  children,
  dateOverride,
}) {
  return (
    <section
      style={{
        background: "#ffffff",
        border: "1px solid #dedede",
        borderRadius: "24px",
        padding: "28px",
        marginBottom: "28px",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #e5e5e5",
          paddingBottom: "18px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "24px" }}>{title}</h2>
          <p style={{ margin: "8px 0 0", color: "#666" }}>{description}</p>
        </div>

        {day && (
          <div
            style={{
              flexShrink: 0,
              minWidth: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#888",
                border: "1px solid #ddd",
                borderRadius: "999px",
                padding: "4px 10px",
              }}
            >
              Day {String(day).padStart(2, "0")}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "#aaa",
              }}
            >
              {dateOverride || formatDateFromDay(day)}
            </span>
          </div>
        )}
      </div>

      {children}
    </section>
  );
}
