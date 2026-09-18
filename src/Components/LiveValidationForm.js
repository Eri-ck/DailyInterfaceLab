import { useState } from "react";

function validateEmail(value) {
  if (value.trim() === "") return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
  return "";
}

function validatePassword(value) {
  if (value.length === 0) return "Password is required";
  if (value.length < 6) return "Must be at least 6 characters";
  return "";
}

export default function LiveValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // "touched" guarda qué campos ya perdieron el foco al menos una vez.
  // Así no mostramos errores mientras el usuario todavía está escribiendo por primera vez.
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  function handleBlur(field) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  const isValid = !emailError && !passwordError;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "360px",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur("email")}
          placeholder="you@example.com"
          style={inputStyle(touched.email && emailError)}
        />
        {touched.email && emailError && <p style={errorStyle}>{emailError}</p>}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => handleBlur("password")}
          placeholder="••••••••"
          style={inputStyle(touched.password && passwordError)}
        />
        {touched.password && passwordError && (
          <p style={errorStyle}>{passwordError}</p>
        )}
      </div>

      <button
        disabled={!isValid}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: isValid ? "#111" : "#e5e5e5",
          color: isValid ? "#fff" : "#999",
          fontWeight: 600,
          cursor: isValid ? "pointer" : "not-allowed",
        }}
      >
        Create account
      </button>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "12px",
  fontWeight: 600,
  color: "#555",
  marginBottom: "6px",
};

function inputStyle(hasError) {
  return {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid " + (hasError ? "#dc2626" : "#ddd"),
    fontSize: "14px",
    boxSizing: "border-box",
  };
}

const errorStyle = {
  margin: "6px 0 0",
  fontSize: "12px",
  color: "#dc2626",
};
