import { useEffect, useRef, useState } from "react";

// Diálogo accesible real, no solo un modal más.
// Diferencias contra ConfirmationModal (Semana 4):
//  - atrapa el foco (Tab/Shift+Tab no se escapan del diálogo)
//  - Escape cierra
//  - al cerrar, el foco vuelve exactamente al botón que lo abrió
//  - aria-modal + aria-labelledby + aria-describedby para lectores de pantalla
export default function AccessibleDialog() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const dialogNode = dialogRef.current;
    const focusable = dialogNode.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) triggerRef.current?.focus();
  }, [open]);

  return (
    <div>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 18px",
          borderRadius: "10px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Open accessible dialog box
      </button>

      {open && (
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-dialog-title"
            aria-describedby="a11y-dialog-desc"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "24px",
              width: "320px",
            }}
          >
            <h3 id="a11y-dialog-title" style={{ margin: "0 0 8px" }}>
              Confirm action
            </h3>
            <p
              id="a11y-dialog-desc"
              style={{ margin: "0 0 20px", color: "#555", fontSize: "14px" }}
            >
              Focus is trapped inside here. Tab and Shift+Tab cycle through
              these elements, and Escape closes the dialog, returning focus to
              the button that opened it.
            </p>
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#111",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
