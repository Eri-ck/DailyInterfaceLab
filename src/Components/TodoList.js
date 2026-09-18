import { useState } from "react";

let idCounter = 0;

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: idCounter++, text: "Learn useState", completed: true },
    { id: idCounter++, text: "Build a todo list", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    const trimmed = inputValue.trim();
    if (trimmed === "") return;

    setTodos((current) => [
      ...current,
      { id: idCounter++, text: trimmed, completed: false },
    ]);
    setInputValue("");
  }

  function toggleTodo(id) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
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
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new task..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "10px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#111",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "10px",
              background: todo.completed ? "#f9fafb" : "#fff",
              border: "1px solid #eee",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                flex: 1,
                fontSize: "14px",
                color: todo.completed ? "#999" : "#111",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                background: "transparent",
                border: "none",
                color: "#999",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ×
            </button>
          </div>
        ))}
        {todos.length === 0 && (
          <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>
            No tasks yet — add one above.
          </p>
        )}
      </div>
    </div>
  );
}
