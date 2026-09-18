import { createContext, useContext, useState, ReactNode } from "react";

// Day 110 - refactor of Week 3's DarkModeToggle Context. Before: an
// untyped context, easy to misuse (nothing stops you from reading it
// outside a Provider). After: a typed context with a safe hook that
// throws a clear error if used wrong — the pattern a real theming
// system needs.
type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return ctx;
}

function ThemedPanel() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#111",
        border: "1px solid #eee",
        maxWidth: "260px",
      }}
    >
      <p style={{ margin: "0 0 10px" }}>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default function TypedThemeContext() {
  return (
    <ThemeProvider>
      <ThemedPanel />
    </ThemeProvider>
  );
}