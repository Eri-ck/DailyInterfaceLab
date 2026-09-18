import { useState } from "react";

// Simulamos una lista larga de resultados (por ejemplo, resultados de búsqueda).
const totalItems = 48;
const itemsPerPage = 8;
const totalPages = Math.ceil(totalItems / itemsPerPage);

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculamos qué "items" mostrar según la página actual.
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
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
        Showing items {startItem}–{endItem} of {totalItems}
      </p>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={pageButtonStyle(false, currentPage === 1)}
        >
          ‹ Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              style={pageButtonStyle(page === currentPage, false)}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={pageButtonStyle(false, currentPage === totalPages)}
        >
          Next ›
        </button>
      </div>
    </div>
  );
}

function pageButtonStyle(isActive, isDisabled) {
  return {
    minWidth: "36px",
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid " + (isActive ? "#111" : "#ddd"),
    background: isActive ? "#111" : "#fff",
    color: isActive ? "#fff" : isDisabled ? "#ccc" : "#111",
    fontSize: "13px",
    fontWeight: 600,
    cursor: isDisabled ? "not-allowed" : "pointer",
  };
}
