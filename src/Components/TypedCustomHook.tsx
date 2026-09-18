import { useMemo, useState } from "react";

// Generic hook: works with any array type T, not just one fixed shape.
// Deepens the TypeScript axis started on Day 87 (which only typed props) —
// this time the generic lives in the hook itself.
function useFilteredList<T>(items: T[], predicate: (item: T) => boolean) {
  return useMemo(() => items.filter(predicate), [items, predicate]);
}

interface Task {
  id: number;
  title: string;
  done: boolean;
}

const initialTasks: Task[] = [
  { id: 1, title: "Write component", done: true },
  { id: 2, title: "Add ARIA labels", done: true },
  { id: 3, title: "Write tests", done: false },
  { id: 4, title: "Review PR", done: false },
];

export default function TypedCustomHook() {
  const [showDoneOnly, setShowDoneOnly] = useState(false);

  const visibleTasks = useFilteredList<Task>(
    initialTasks,
    (task) => !showDoneOnly || task.done
  );

  return (
    <div style={{ maxWidth: "280px" }}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          marginBottom: "10px",
        }}
      >
        <input
          type="checkbox"
          checked={showDoneOnly}
          onChange={(e) => setShowDoneOnly(e.target.checked)}
        />
        Show done only
      </label>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {visibleTasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: "8px 10px",
              borderRadius: "8px",
              background: "#f5f5f5",
              marginBottom: "6px",
              fontSize: "14px",
              textDecoration: task.done ? "line-through" : "none",
              color: task.done ? "#999" : "#111",
            }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
