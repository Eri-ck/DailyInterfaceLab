import { useState, useRef } from "react";

const initialItems = [
  "Design brief.pdf",
  "Logo_final.png",
  "Meeting notes.docx",
];
const undoWindowMs = 4000;

export default function UndoToast() {
  const [items, setItems] = useState(initialItems);
  const [pendingDelete, setPendingDelete] = useState(null); // { item, index }
  const timerRef = useRef(null);

  function deleteItem(item, index) {
    setItems((current) => current.filter((_, i) => i !== index));
    setPendingDelete({ item, index });

    // Después del tiempo de espera, la eliminación se vuelve definitiva
    // (aquí simplemente cerramos el toast; en un caso real, aquí llamarías a la API).
    timerRef.current = setTimeout(() => {
      setPendingDelete(null);
    }, undoWindowMs);
  }

  function undoDelete() {
    if (!pendingDelete) return;
    clearTimeout(timerRef.current);

    setItems((current) => {
      const updated = [...current];
      updated.splice(pendingDelete.index, 0, pendingDelete.item);
      return updated;
    });
    setPendingDelete(null);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        position: "relative",
        minHeight: "160px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, index) => (
          <div
            key={item}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 14px",
              borderRadius: "10px",
              background: "#f9fafb",
              fontSize: "13px",
            }}
          >
            {item}
            <button
              onClick={() => deleteItem(item, index)}
              style={{
                background: "transparent",
                border: "none",
                color: "#999",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>
            No files left.
          </p>
        )}
      </div>

      {pendingDelete && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
            background: "#111",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
          }}
        >
          "{pendingDelete.item}" deleted
          <button
            onClick={undoDelete}
            style={{
              background: "transparent",
              border: "none",
              color: "#60a5fa",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            UNDO
          </button>
        </div>
      )}
    </div>
  );
}
