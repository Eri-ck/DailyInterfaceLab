import { useState } from "react";

// Caras de dado como caracteres Unicode: ⚀ ⚁ ⚂ ⚃ ⚄ ⚅
// El índice 0 del array corresponde a la cara del 1, índice 5 a la del 6.
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function DiceRoller() {
  const [value, setValue] = useState(6);
  const [isRolling, setIsRolling] = useState(false);

  function rollDice() {
    if (isRolling) return;
    setIsRolling(true);

    let ticks = 0;
    const totalTicks = 12;

    // Durante la "animación" solo vamos mostrando caras al azar cada 80ms,
    // simulando el volteo del dado. Al llegar a totalTicks, paramos
    // y fijamos el resultado final.
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 6) + 1);
      ticks++;

      if (ticks >= totalTicks) {
        clearInterval(interval);
        setValue(Math.floor(Math.random() * 6) + 1);
        setIsRolling(false);
      }
    }, 80);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "90px",
          lineHeight: 1,
          marginBottom: "16px",
          display: "inline-block",
          transform: isRolling
            ? "rotate(15deg) scale(0.92)"
            : "rotate(0deg) scale(1)",
          transition: "transform .08s ease",
        }}
      >
        {diceFaces[value - 1]}
      </div>

      <div>
        <button
          onClick={rollDice}
          disabled={isRolling}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#111",
            color: "#fff",
            fontWeight: 600,
            fontSize: "13px",
            cursor: isRolling ? "not-allowed" : "pointer",
            opacity: isRolling ? 0.6 : 1,
          }}
        >
          {isRolling ? "Rolling..." : "🎲 Roll dice"}
        </button>
      </div>
    </div>
  );
}
