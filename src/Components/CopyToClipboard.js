import { useState } from "react";

export default function CopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "npm install react-router-dom";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      // Regresa al estado normal después de 2 segundos.
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#111",
          borderRadius: "10px",
          padding: "12px 16px",
        }}
      >
        <code style={{ color: "#e5e5e5", fontSize: "13px" }}>{textToCopy}</code>

        <button
          onClick={handleCopy}
          style={{
            padding: "6px 12px",
            borderRadius: "8px",
            border: "none",
            background: copied ? "#16a34a" : "#333",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background .15s ease",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
