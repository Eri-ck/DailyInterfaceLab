const commentsData = [
  {
    id: 1,
    author: "Maria Lopez",
    text: "Love this new layout, feels much cleaner!",
    replies: [
      {
        id: 2,
        author: "Diego Torres",
        text: "Agreed, the spacing is way better now.",
        replies: [
          {
            id: 3,
            author: "Maria Lopez",
            text: "Glad you noticed, took a few tries to get right.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    author: "Ana Reyes",
    text: "Can we get a dark mode version of this too?",
    replies: [],
  },
];

// Comment se renderiza a sí mismo por cada reply anidado — eso es recursión.
function Comment({ comment, depth }) {
  return (
    <div style={{ marginLeft: depth * 24 }}>
      <div
        style={{
          padding: "12px 14px",
          borderRadius: "10px",
          background: depth === 0 ? "#f9fafb" : "#fff",
          border: "1px solid #eee",
          marginBottom: "8px",
        }}
      >
        <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "13px" }}>
          {comment.author}
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#444" }}>
          {comment.text}
        </p>
      </div>

      {/* Aquí está la recursión: cada reply es otro <Comment /> */}
      {comment.replies.map((reply) => (
        <Comment key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function NestedComments() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      {commentsData.map((comment) => (
        <Comment key={comment.id} comment={comment} depth={0} />
      ))}
    </div>
  );
}
