import { useId, useRef, useState } from "react";

// Full ARIA combobox pattern: role="combobox" on the input, a listbox
// of options, aria-activedescendant tracking the highlighted option
// (instead of moving real focus), and arrow/enter/escape keyboard support.
const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Mango",
  "Orange",
  "Peach",
];

export default function AccessibleCombobox() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const listboxId = useId();

  const filtered = fruits.filter((f) =>
    f.toLowerCase().includes(value.toLowerCase())
  );

  function selectOption(option) {
    setValue(option);
    setOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }

  function handleKeyDown(e) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectOption(filtered[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div style={{ maxWidth: "280px", position: "relative" }}>
      <label
        htmlFor="fruit-combobox"
        style={{
          display: "block",
          fontSize: "13px",
          fontWeight: 600,
          marginBottom: "6px",
        }}
      >
        Search fruit
      </label>

      <input
        id="fruit-combobox"
        ref={inputRef}
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
        }
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setOpen(true);
          setActiveIndex(-1);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "14px",
          boxSizing: "border-box",
        }}
      />

      {open && filtered.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: "4px",
            padding: "4px",
            listStyle: "none",
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "8px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            zIndex: 10,
          }}
        >
          {filtered.map((option, i) => (
            <li
              key={option}
              id={`${listboxId}-option-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={() => selectOption(option)}
              style={{
                padding: "8px 10px",
                borderRadius: "6px",
                fontSize: "14px",
                cursor: "pointer",
                background: i === activeIndex ? "#111" : "transparent",
                color: i === activeIndex ? "#fff" : "#111",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
