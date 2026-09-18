const cards = [
  { title: "Design Systems", height: 100 },
  { title: "Color Theory", height: 160 },
  { title: "Typography Basics", height: 80 },
  { title: "Accessibility 101", height: 140 },
  { title: "Grid Layouts", height: 110 },
  { title: "Motion Design", height: 170 },
  { title: "User Research", height: 90 },
];

export default function MasonryGrid() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      {/* columns crea el efecto masonry sin necesidad de JS calculando posiciones */}
      <div style={{ columnCount: 3, columnGap: "12px" }}>
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              breakInside: "avoid",
              marginBottom: "12px",
              background: "#f9fafb",
              borderRadius: "12px",
              padding: "16px",
              height: `${card.height}px`,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <p style={{ margin: 0, fontSize: "13px", fontWeight: 600 }}>
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
