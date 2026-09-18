import { useState } from "react";

const initialCards = [
  {
    id: 1,
    front: "What is a closure in JavaScript?",
    back: "A function that remembers variables from its outer scope even after that scope has finished executing.",
    interval: 1,
    easeFactor: 2.5,
    dueInDays: 0,
  },
  {
    id: 2,
    front: "What does 'key' do in a React list?",
    back: "It helps React identify which items changed, were added, or removed, for efficient re-rendering.",
    interval: 1,
    easeFactor: 2.5,
    dueInDays: 0,
  },
  {
    id: 3,
    front: "What is the Virtual DOM?",
    back: "An in-memory representation of the real DOM that React uses to calculate the minimal set of changes to apply.",
    interval: 1,
    easeFactor: 2.5,
    dueInDays: 0,
  },
];

export default function SpacedFlashcards() {
  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const dueCards = cards.filter((c) => c.dueInDays <= 0);
  const currentCard = dueCards[currentIndex];

  // Versión simplificada del algoritmo SM-2: según qué tan fácil fue
  // recordar la tarjeta, ajustamos el intervalo hasta el próximo repaso.
  function reviewCard(quality) {
    setCards((current) =>
      current.map((card) => {
        if (card.id !== currentCard.id) return card;

        let newInterval;
        let newEase = card.easeFactor;

        if (quality === "hard") {
          newInterval = 1;
          newEase = Math.max(1.3, card.easeFactor - 0.2);
        } else if (quality === "good") {
          newInterval = Math.round(card.interval * card.easeFactor);
        } else {
          newInterval = Math.round(card.interval * card.easeFactor * 1.3);
          newEase = card.easeFactor + 0.15;
        }

        return {
          ...card,
          interval: newInterval,
          easeFactor: newEase,
          dueInDays: newInterval,
        };
      })
    );

    setIsFlipped(false);
    setCurrentIndex(0);
  }

  if (!currentCard) {
    return (
      <div style={cardWrapperStyle}>
        <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
          🎉 No cards due for review right now. Come back later!
        </p>
      </div>
    );
  }

  return (
    <div style={cardWrapperStyle}>
      <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#999" }}>
        {dueCards.length} card{dueCards.length !== 1 ? "s" : ""} due today
      </p>

      <div
        onClick={() => setIsFlipped((f) => !f)}
        style={{
          background: "#f9fafb",
          borderRadius: "14px",
          padding: "32px 20px",
          minHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: "16px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: isFlipped ? 400 : 700,
          }}
        >
          {isFlipped ? currentCard.back : currentCard.front}
        </p>
      </div>

      {!isFlipped ? (
        <button onClick={() => setIsFlipped(true)} style={primaryBtnStyle}>
          Show answer
        </button>
      ) : (
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => reviewCard("hard")}
            style={{ ...secondaryBtnStyle, color: "#dc2626" }}
          >
            Hard
          </button>
          <button
            onClick={() => reviewCard("good")}
            style={{ ...secondaryBtnStyle, color: "#f59e0b" }}
          >
            Good
          </button>
          <button
            onClick={() => reviewCard("easy")}
            style={{ ...secondaryBtnStyle, color: "#16a34a" }}
          >
            Easy
          </button>
        </div>
      )}
    </div>
  );
}

const cardWrapperStyle = {
  background: "#fff",
  border: "1px solid #e5e5e5",
  borderRadius: "24px",
  padding: "24px",
  maxWidth: "380px",
};

const primaryBtnStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "#111",
  color: "#fff",
  fontWeight: 600,
  fontSize: "13px",
  cursor: "pointer",
};

const secondaryBtnStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#fff",
  fontWeight: 700,
  fontSize: "13px",
  cursor: "pointer",
};
