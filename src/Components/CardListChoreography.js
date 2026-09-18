import { useState } from "react";
import { motion, Reorder } from "framer-motion";

// Day 115 - staggered entrance for a card list, plus a separate
// drag-to-reorder list using Framer Motion's built-in Reorder
// components (layout animations, no manual index math needed).
const tokens = { orange: "#ff5a1f", blue: "#4c8dff", green: "#34d399", border: "#e2e2e5", surface: "#ffffff", textMuted: "#6b6b76" };

const cards = [
  { id: 1, title: "Design review", color: tokens.orange },
  { id: 2, title: "User interviews", color: tokens.blue },
  { id: 3, title: "Prototype testing", color: tokens.green },
  { id: 4, title: "Handoff to dev", color: tokens.orange },
];

function StaggeredCards() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          whileHover={{ x: 4 }}
          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surface }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: card.color }} />
          <span style={{ fontSize: "14px" }}>{card.title}</span>
        </motion.div>
      ))}
    </div>
  );
}

function DraggableReorderList() {
  const [items, setItems] = useState(["Wireframes", "Visual design", "Dev handoff"]);
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          whileDrag={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,.12)" }}
          style={{ padding: "10px 14px", borderRadius: "10px", border: `1px solid ${tokens.border}`, background: tokens.surface, cursor: "grab", fontSize: "14px" }}
        >
          ⠿ {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default function CardListChoreography() {
  return (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <div>
        <p style={{ fontSize: "11px", color: tokens.textMuted, margin: "0 0 8px" }}>Staggered entrance</p>
        <StaggeredCards />
      </div>
      <div>
        <p style={{ fontSize: "11px", color: tokens.textMuted, margin: "0 0 8px" }}>Drag to reorder</p>
        <DraggableReorderList />
      </div>
    </div>
  );
}