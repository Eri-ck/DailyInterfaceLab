import { useState, useRef, useEffect } from "react";

const options = ["React", "Vue", "Svelte", "Angular"];

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const wrapperRef = useRef(null);

  // Detecta clicks fuera del dropdown para cerrarlo automáticamente.
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      <div ref={wrapperRef} style={{ position: "relative", maxWidth: "260px" }}>
        <button
          onClick={() => setIsOpen((open) => !open)}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {selected}
          <span style={{ color: "#999" }}>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              right: 0,
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              zIndex: 10,
            }}
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                style={{
                  padding: "12px 16px",
                  fontSize: "14px",
                  cursor: "pointer",
                  background: selected === option ? "#f3f4f6" : "#fff",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f9fafb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    selected === option ? "#f3f4f6" : "#fff")
                }
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
