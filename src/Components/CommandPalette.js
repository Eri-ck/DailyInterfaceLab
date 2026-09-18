import { useState, useEffect, useRef } from "react";

const commands = [
  { label: "Go to Dashboard", icon: "🏠" },
  { label: "Create new task", icon: "➕" },
  { label: "Open settings", icon: "⚙️" },
  { label: "View profile", icon: "👤" },
  { label: "Search users", icon: "🔍" },
  { label: "Logout", icon: "🚪" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Escucha el atajo de teclado globalmente: Cmd+K (Mac) o Ctrl+K (Windows).
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Enfoca el input automáticamente cuando se abre.
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 16px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          background: "#fff",
          fontSize: "13px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        🔍 Search commands
        <span style={{ color: "#999", fontSize: "12px" }}>Ctrl+K</span>
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "80px",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "14px",
              width: "90%",
              maxWidth: "420px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command..."
              style={{
                width: "100%",
                padding: "16px",
                border: "none",
                borderBottom: "1px solid #eee",
                fontSize: "15px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />

            <div style={{ maxHeight: "260px", overflowY: "auto" }}>
              {filtered.map((command) => (
                <div
                  key={command.label}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f9fafb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <span>{command.icon}</span>
                  {command.label}
                </div>
              ))}
              {filtered.length === 0 && (
                <p
                  style={{
                    padding: "16px",
                    color: "#999",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  No commands found.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
