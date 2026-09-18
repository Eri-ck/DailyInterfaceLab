import { useState } from "react";

const currencies = ["USD", "MXN", "EUR", "GBP", "JPY", "CAD"];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("MXN");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function convert() {
    if (!amount || amount <= 0) return;
    setStatus("loading");

    // API actualizada: Frankfurter migró de api.frankfurter.app a api.frankfurter.dev,
    // y ya no soporta "amount" como parámetro — hay que pedir la tasa (rates[to])
    // y multiplicar nosotros mismos en el código, como indica su documentación oficial.
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
      .then((res) => {
        if (!res.ok) throw new Error("Conversion failed");
        return res.json();
      })
      .then((data) => {
        const rate = data.rates[to];
        setResult(amount * rate);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }

  function swapCurrencies() {
    setFrom(to);
    setTo(from);
    setResult(null);
    setStatus("idle");
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "380px",
      }}
    >
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "18px",
          fontWeight: 700,
          marginBottom: "14px",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={selectStyle}
        >
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          onClick={swapCurrencies}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
          aria-label="Swap currencies"
        >
          ⇄
        </button>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={selectStyle}
        >
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convert}
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "14px",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.6 : 1,
          marginBottom: "16px",
        }}
      >
        {status === "loading" ? "Converting..." : "Convert"}
      </button>

      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: "13px", margin: 0 }}>
          Conversion failed. Try again.
        </p>
      )}

      {status === "success" && result !== null && (
        <p style={{ margin: 0, fontSize: "24px", fontWeight: 700 }}>
          {result.toFixed(2)}{" "}
          <span style={{ fontSize: "14px", color: "#999" }}>{to}</span>
        </p>
      )}
    </div>
  );
}

const selectStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "14px",
};
