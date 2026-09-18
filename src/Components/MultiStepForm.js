import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "Basic",
  });
  const totalSteps = 3;

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  // Validación simple: no dejamos avanzar si el campo del paso actual está vacío.
  function canGoNext() {
    if (step === 1) return formData.name.trim() !== "";
    if (step === 2) return formData.email.trim() !== "";
    return true;
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "28px",
        maxWidth: "420px",
      }}
    >
      {/* Indicador de progreso */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "999px",
              background: i < step ? "#111" : "#eee",
            }}
          />
        ))}
      </div>

      {step === 1 && (
        <div>
          <label style={labelStyle}>What's your name?</label>
          <input
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Jane Doe"
            style={inputStyle}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <label style={labelStyle}>What's your email?</label>
          <input
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="jane@example.com"
            style={inputStyle}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <label style={labelStyle}>Choose a plan</label>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Basic", "Pro", "Team"].map((plan) => (
              <button
                key={plan}
                onClick={() => updateField("plan", plan)}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "10px",
                  border:
                    formData.plan === plan
                      ? "2px solid #111"
                      : "1px solid #ddd",
                  background: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "13px",
                }}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>
      )}

      {step > totalSteps && null}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          style={{
            ...navButtonStyle,
            visibility: step === 1 ? "hidden" : "visible",
          }}
        >
          Back
        </button>

        {step < totalSteps ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canGoNext()}
            style={{
              ...navButtonStyle,
              background: "#111",
              color: "#fff",
              opacity: canGoNext() ? 1 : 0.4,
              cursor: canGoNext() ? "pointer" : "not-allowed",
            }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={() =>
              alert(
                `Submitted: ${formData.name}, ${formData.email}, ${formData.plan}`
              )
            }
            style={{ ...navButtonStyle, background: "#111", color: "#fff" }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: "#555",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "14px",
  boxSizing: "border-box",
};

const navButtonStyle = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#fff",
  fontWeight: 600,
  fontSize: "13px",
  cursor: "pointer",
};
