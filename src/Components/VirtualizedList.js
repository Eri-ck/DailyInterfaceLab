import { useState, useRef } from "react";

const totalItems = 5000;
const itemHeight = 40;
const containerHeight = 280;

export default function VirtualizedList() {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  // Solo calculamos qué índices caen dentro del área visible,
  // en vez de renderizar los 5000 elementos de una vez.
  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 2; // +2 de colchón
  const endIndex = Math.min(startIndex + visibleCount, totalItems);

  const visibleItems = [];
  for (let i = startIndex; i < endIndex; i++) {
    visibleItems.push(i);
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
      <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666" }}>
        Rendering {visibleItems.length} of {totalItems.toLocaleString()} rows —
        scroll to see it stay smooth
      </p>

      <div
        ref={containerRef}
        onScroll={(e) => setScrollTop(e.target.scrollTop)}
        style={{
          height: `${containerHeight}px`,
          overflowY: "auto",
          border: "1px solid #eee",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        {/* Este div invisible fuerza el alto total del scroll,
            aunque no tenga contenido real dentro. */}
        <div
          style={{
            height: `${totalItems * itemHeight}px`,
            position: "relative",
          }}
        >
          {visibleItems.map((index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${index * itemHeight}px`,
                left: 0,
                right: 0,
                height: `${itemHeight}px`,
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                fontSize: "13px",
                borderBottom: "1px solid #f3f4f6",
                background: index % 2 === 0 ? "#fff" : "#fafafa",
              }}
            >
              Row #{index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
