import { useState, useEffect, useRef } from "react";

const menuOptions = [
  { label: "Rename", icon: "✏️" },
  { label: "Duplicate", icon: "📄" },
  { label: "Move to folder", icon: "📁" },
  { label: "Delete", icon: "🗑️", danger: true },
];

export default function ContextMenu() {
  const [menuPosition, setMenuPosition] = useState(null); // null = cerrado
  const menuRef = useRef(null);

  function handleRightClick(e) {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    function closeMenu(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuPosition(null);
      }
    }
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <div
        onContextMenu={handleRightClick}
        style={{
          padding: "40px",
          borderRadius: "14px",
          background: "#f9fafb",
          border: "1px dashed #ddd",
          textAlign: "center",
          fontSize: "13px",
          color: "#666",
          userSelect: "none",
        }}
      >
        Right-click anywhere in this box
      </div>

      {menuPosition && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: menuPosition.y,
            left: menuPosition.x,
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            border: "1px solid #eee",
            overflow: "hidden",
            zIndex: 1000,
            minWidth: "180px",
          }}
        >
          {menuOptions.map((option) => (
            <div
              key={option.label}
              onClick={() => setMenuPosition(null)}
              style={{
                padding: "10px 14px",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                color: option.danger ? "#dc2626" : "#111",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f9fafb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span>{option.icon}</span>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
