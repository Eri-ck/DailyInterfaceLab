import { useState } from "react";

const initialColumns = {
  todo: {
    title: "To Do",
    items: ["Research competitors", "Sketch wireframes"],
  },
  doing: { title: "In Progress", items: ["Build component library"] },
  done: { title: "Done", items: ["Kickoff meeting"] },
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedItem, setDraggedItem] = useState(null);

  function handleDragStart(item, fromColumn) {
    setDraggedItem({ item, fromColumn });
  }

  function handleDrop(toColumn) {
    if (!draggedItem) return;
    const { item, fromColumn } = draggedItem;
    if (fromColumn === toColumn) return;

    setColumns((current) => ({
      ...current,
      [fromColumn]: {
        ...current[fromColumn],
        items: current[fromColumn].items.filter((i) => i !== item),
      },
      [toColumn]: {
        ...current[toColumn],
        items: [...current[toColumn].items, item],
      },
    }));
    setDraggedItem(null);
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
      <div style={{ display: "flex", gap: "16px", overflowX: "auto" }}>
        {Object.entries(columns).map(([key, column]) => (
          <div
            key={key}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(key)}
            style={{
              flex: "1 0 200px",
              background: "#f9fafb",
              borderRadius: "14px",
              padding: "14px",
              minHeight: "180px",
            }}
          >
            <p
              style={{
                margin: "0 0 12px",
                fontWeight: 700,
                fontSize: "13px",
                color: "#666",
              }}
            >
              {column.title} ({column.items.length})
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {column.items.map((item) => (
                <div
                  key={item}
                  draggable
                  onDragStart={() => handleDragStart(item, key)}
                  style={{
                    background: "#fff",
                    border: "1px solid #eee",
                    borderRadius: "10px",
                    padding: "10px 12px",
                    fontSize: "13px",
                    cursor: "grab",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
