import { createContext, useContext, useState } from "react";

// Context: permite compartir el tema (light/dark) entre componentes
// sin tener que pasar props manualmente en cada nivel (evita "prop drilling").
const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Cualquier componente hijo puede leer el theme con este hook,
// sin necesidad de recibirlo como prop.
function useTheme() {
  return useContext(ThemeContext);
}

function ThemePreviewCard() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        background: isDark ? "#111111" : "#ffffff",
        color: isDark ? "#f5f5f5" : "#111111",
        border: "1px solid " + (isDark ? "#333" : "#eee"),
        borderRadius: "16px",
        padding: "24px",
        transition: "all .2s ease",
      }}
    >
      <p
        style={{
          margin: "0 0 4px",
          fontSize: "13px",
          color: isDark ? "#999" : "#666",
        }}
      >
        Current theme
      </p>
      <p style={{ margin: "0 0 20px", fontSize: "20px", fontWeight: 700 }}>
        {isDark ? "Dark mode" : "Light mode"}
      </p>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 18px",
          borderRadius: "10px",
          border: "none",
          background: isDark ? "#f5f5f5" : "#111111",
          color: isDark ? "#111111" : "#ffffff",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Switch to {isDark ? "light" : "dark"}
      </button>
    </div>
  );
}

// Componente exportado: envuelve todo en el Provider,
// así el Context solo vive dentro de este ejercicio,
// sin afectar el resto de la app.
export default function DarkModeToggle() {
  return (
    <ThemeProvider>
      <ThemePreviewCard />
    </ThemeProvider>
  );
}
