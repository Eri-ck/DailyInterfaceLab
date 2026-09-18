import { useState } from "react";

const initialItems = [
  { id: 1, text: "Design the wireframes" },
  { id: 2, text: "Build the component library" },
  { id: 3, text: "Write the user flows" },
  { id: 4, text: "Run usability tests" },
];

export default function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const [draggedId, setDraggedId] = useState(null);

  function handleDragStart(id) {
    setDraggedId(id);
  }

  // Se dispara mientras arrastras sobre otro item: aquí reordenamos en vivo.
  function handleDragOver(e, targetId) {
    e.preventDefault();
    if (draggedId === null || draggedId === targetId) return;

    setItems((current) => {
      const draggedIndex = current.findIndex((i) => i.id === draggedId);
      const targetIndex = current.findIndex((i) => i.id === targetId);

      const updated = [...current];
      const [draggedItem] = updated.splice(draggedIndex, 1);
      updated.splice(targetIndex, 0, draggedItem);

      return updated;
    });
  }

  function handleDragEnd() {
    setDraggedId(null);
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
      <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#666" }}>
        Drag the items to reorder them.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item.id)}
            onDragOver={(e) => handleDragOver(e, item.id)}
            onDragEnd={handleDragEnd}
            style={{
              padding: "14px 16px",
              borderRadius: "10px",
              border: "1px solid #eee",
              background: draggedId === item.id ? "#f3f4f6" : "#fff",
              cursor: "grab",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              opacity: draggedId === item.id ? 0.5 : 1,
              transition: "opacity .15s ease",
            }}
          >
            <span style={{ color: "#bbb", fontSize: "16px" }}>⋮⋮</span>
            <span style={{ fontSize: "14px" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
