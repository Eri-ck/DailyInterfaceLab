import { useState } from "react";

// Simula una lista larga de resultados que en un proyecto real
// vendría paginada desde una API.
const allItems = Array.from({ length: 40 }, (_, i) => `Item ${i + 1}`);
const pageSize = 8;

export default function LoadMoreList() {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const visibleItems = allItems.slice(0, visibleCount);
  const hasMore = visibleCount < allItems.length;

  function loadMore() {
    setVisibleCount((current) => current + pageSize);
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        {visibleItems.map((item) => (
          <div
            key={item}
            style={{
              padding: "12px 14px",
              borderRadius: "10px",
              background: "#f9fafb",
              fontSize: "13px",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {hasMore ? (
        <button
          onClick={loadMore}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: "#fff",
            fontWeight: 600,
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Load more ({allItems.length - visibleCount} remaining)
        </button>
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#999",
            fontSize: "13px",
            margin: 0,
          }}
        >
          You've reached the end of the list.
        </p>
      )}
    </div>
  );
}
