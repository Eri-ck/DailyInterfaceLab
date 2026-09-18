import { useState } from "react";

export default function QrCodeGenerator() {
  const [text, setText] = useState("https://claude.ai");

  // API pública y gratuita, sin key: genera la imagen del QR directamente
  // codificando el texto en la URL — no hay lógica de generación en el cliente.
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    text
  )}`;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "320px",
        textAlign: "center",
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL..."
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "13px",
          marginBottom: "16px",
          boxSizing: "border-box",
        }}
      />

      {text.trim() ? (
        <img
          src={qrUrl}
          alt="Generated QR code"
          style={{ width: "200px", height: "200px", borderRadius: "10px" }}
        />
      ) : (
        <p style={{ color: "#999", fontSize: "13px" }}>
          Type something to generate a QR code.
        </p>
      )}
    </div>
  );
}
