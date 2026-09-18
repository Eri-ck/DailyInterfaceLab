import { useEffect, useState } from "react";

// Hook reusable: cualquier componente futuro del lab puede importar
// este patrón para reaccionar a breakpoints sin depender de CSS externo.
// No usamos @media porque todo en este lab vive en inline styles —
// matchMedia es el equivalente en JS.
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

const links = ["Home", "Projects", "About Me", "Contact"];

export default function ResponsiveNavbar() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "16px",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>Lab</strong>

        {isMobile ? (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        ) : (
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: "14px",
            }}
          >
            {links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        )}
      </div>

      {isMobile && open && (
        <ul
          id="mobile-menu"
          style={{
            listStyle: "none",
            margin: "12px 0 0",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      )}

      <p style={{ marginTop: "12px", fontSize: "12px", color: "#888" }}>
        {isMobile
          ? "Vista móvil (≤480px) — menú colapsado en hamburguesa."
          : "Vista de escritorio — reduce la ventana a ≤480px para ver el cambio."}
      </p>
    </nav>
  );
}
