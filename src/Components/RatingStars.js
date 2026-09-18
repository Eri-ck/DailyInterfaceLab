import { useState } from "react";

// Ícono de estrella como SVG propio.
// fill y stroke son propiedades separadas: podemos tener
// borde amarillo con relleno gris, algo que el emoji ★ no permite.
function StarIcon({ active }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      style={{ transition: "stroke .1s ease" }}
    >
      <path
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        fill="#fef3c7"
        stroke={active ? "#f59e0b" : "#d1d5db"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RatingStars() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "28px",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 4px" }}>¿How would you rate this exercise?</h3>
      <p style={{ margin: "0 0 20px", color: "#666", fontSize: "14px" }}>
        Select 1 to 5 stars.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
        {stars.map((starValue) => {
          const isActive = starValue <= (hoverRating || rating);

          return (
            <button
              key={starValue}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                lineHeight: 0,
              }}
              aria-label={`${starValue} estrellas`}
            >
              <StarIcon active={isActive} />
            </button>
          );
        })}
      </div>

      <p style={{ marginTop: "16px", fontSize: "13px", color: "#999" }}>
        {rating > 0
          ? `You rated this ${rating} out of 5 stars.`
          : "You haven't rated yet."}
      </p>
    </div>
  );
}
