import { useState } from "react";

// Datos del FAQ. En un proyecto real esto normalmente vendría de una API,
// pero para practicar lo dejamos como array fijo.
const faqItems = [
  {
    question: "What is a controlled component?",
    answer:
      "It is a component whose value is managed by React (using `useState`), rather than letting the DOM control it on its own.",
  },
  {
    question: "What is the `prop key` used for in lists?",
    answer:
      "It helps React identify which elements within a `map` have changed, been added, or been removed, in order to update the DOM efficiently.",
  },
  {
    question: "What is the difference between props and state?",
    answer:
      "Props are data that a component receives from the outside (from its parent) and cannot modify. State is internal data that the component itself controls and can change.",
  },
];

// Un solo panel del accordion.
function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid #eee" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "18px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
          fontSize: "15px",
          fontWeight: 600,
          color: "#111",
        }}
      >
        {question}
        {/* El símbolo rota cuando el panel está abierto */}
        <span
          style={{
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform .2s ease",
            fontSize: "20px",
            color: "#888",
          }}
        >
          +
        </span>
      </button>

      {/* Renderizado condicional: el contenido solo existe en el DOM si isOpen es true */}
      {isOpen && (
        <p
          style={{
            margin: 0,
            padding: "0 4px 18px",
            color: "#666",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default function Accordion() {
  // Guarda el índice del panel abierto. null = todos cerrados.
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    // Si haces click en el que ya está abierto, se cierra (toggle).
    // Si haces click en otro, ese se vuelve el único abierto.
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "10px 24px",
      }}
    >
      {faqItems.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
