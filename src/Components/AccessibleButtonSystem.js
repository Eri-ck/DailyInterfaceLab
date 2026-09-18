// Day 107 - refactor of Week 1's ButtonSystem. Before: a div/span
// styled to look like a button (not keyboard-focusable, no disabled
// semantics). After: real <button> elements with visible focus rings
// and aria-disabled wired to the actual disabled state.
const variants = {
    primary: { background: "#111", color: "#fff", border: "none" },
    secondary: { background: "#fff", color: "#111", border: "1px solid #ddd" },
    danger: { background: "#c33", color: "#fff", border: "none" },
  };
  
  function Button({ variant = "primary", disabled = false, children, onClick }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled}
        style={{
          ...variants[variant],
          padding: "10px 16px",
          borderRadius: "8px",
          fontWeight: 600,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          outlineOffset: "2px",
        }}
      >
        {children}
      </button>
    );
  }
  
  export default function AccessibleButtonSystem() {
    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
    );
  }