function Button({ variant = "primary", size = "md", children }) {
  const baseStyle = {
    border: "none",
    borderRadius: "999px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const variants = {
    primary: {
      background: "#111111",
      color: "#ffffff",
    },
    secondary: {
      background: "#f3f3f3",
      color: "#111111",
      border: "1px solid #d9d9d9",
    },
    ghost: {
      background: "transparent",
      color: "#111111",
    },
    danger: {
      background: "#ff4d4d",
      color: "#ffffff",
    },
    success: {
      background: "#16a34a",
      color: "#ffffff",
    },
  };

  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: "13px",
    },
    md: {
      padding: "12px 18px",
      fontSize: "15px",
    },
    lg: {
      padding: "16px 24px",
      fontSize: "17px",
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...variants[variant],
        ...sizes[size],
      }}
    >
      {children}
    </button>
  );
}

export default function ButtonSystem() {
  return (
    <div
      style={{
        display: "grid",
        gap: "24px",
      }}
    >
      <div>
        <h3 style={{ marginTop: 0 }}>Button variants</h3>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>{" "}
        </div>
      </div>

      <div>
        <h3>Button sizes</h3>

        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
  );
}
