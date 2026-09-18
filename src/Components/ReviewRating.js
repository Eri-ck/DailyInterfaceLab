import { useState } from "react";

let reviewId = 0;

export default function ReviewRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([
    {
      id: reviewId++,
      rating: 5,
      comment: "Great component, clean and reusable!",
    },
  ]);

  function submitReview() {
    if (rating === 0 || comment.trim() === "") return;
    setReviews((current) => [{ id: reviewId++, rating, comment }, ...current]);
    setRating(0);
    setComment("");
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "420px",
      }}
    >
      <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHoverRating(value)}
            onMouseLeave={() => setHoverRating(0)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: value <= (hoverRating || rating) ? "#f59e0b" : "#e5e5e5",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a review..."
        rows={2}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "13px",
          fontFamily: "inherit",
          boxSizing: "border-box",
          resize: "vertical",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={submitReview}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Submit review
      </button>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{ borderTop: "1px solid #eee", paddingTop: "10px" }}
          >
            <div style={{ color: "#f59e0b", fontSize: "13px" }}>
              {"★".repeat(review.rating)}
              <span style={{ color: "#e5e5e5" }}>
                {"★".repeat(5 - review.rating)}
              </span>
            </div>
            <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#444" }}>
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
