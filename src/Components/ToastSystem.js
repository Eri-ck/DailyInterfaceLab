import { useState, useEffect } from "react";

let idCounter = 0;

// Un toast individual. Se elimina solo después de 3 segundos.
function Toast({ id, message, type, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, 3000);

    // Cleanup: si el componente se desmonta antes de los 3s
    // (por ejemplo el usuario lo cierra a mano), cancelamos el timer.
    return () => clearTimeout(timer);
  }, [id, onDismiss]);

  const colors = {
    success: { bg: "#dcfce7", text: "#166534" },
    error: { bg: "#fee2e2", text: "#991b1b" },
    info: { bg: "#dbeafe", text: "#1e40af" },
  };

  return (
    <div
      style={{
        background: colors[type].bg,
        color: colors[type].text,
        padding: "12px 16px",
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: 600,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        minWidth: "260px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      {message}
      <button
        onClick={() => onDismiss(id)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "inherit",
          fontSize: "16px",
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}

export default function ToastSystem() {
  // Lista de toasts activos en pantalla.
  const [toasts, setToasts] = useState([]);

  function addToast(type) {
    const messages = {
      success: "Changes saved successfully",
      error: "An error occurred while saving.",
      info: "You have a new notification.",
    };

    const newToast = {
      id: idCounter++,
      type,
      message: messages[type],
    };

    setToasts((current) => [...current, newToast]);
  }

  function dismissToast(id) {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          style={btnStyle("#166534", "#dcfce7")}
          onClick={() => addToast("success")}
        >
          Show success
        </button>
        <button
          style={btnStyle("#991b1b", "#fee2e2")}
          onClick={() => addToast("error")}
        >
          Show error
        </button>
        <button
          style={btnStyle("#1e40af", "#dbeafe")}
          onClick={() => addToast("info")}
        >
          Show info
        </button>
      </div>

      {/* Contenedor de toasts activos, apilados */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            onDismiss={dismissToast}
          />
        ))}
        {toasts.length === 0 && (
          <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>
            No active notifications — try the buttons above.
          </p>
        )}
      </div>
    </div>
  );
}

function btnStyle(color, bg) {
  return {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "none",
    background: bg,
    color: color,
    fontWeight: 600,
    fontSize: "13px",
    cursor: "pointer",
  };
}
