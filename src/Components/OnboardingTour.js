import { useState } from "react";

const steps = [
  {
    title: "Welcome!",
    description: "This is your dashboard, where everything starts.",
  },
  {
    title: "Your tasks",
    description: "Track what needs to get done right here.",
  },
  {
    title: "Settings",
    description: "Customize your workspace whenever you like.",
  },
];

export default function OnboardingTour() {
  const [isActive, setIsActive] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  function startTour() {
    setStepIndex(0);
    setIsActive(true);
  }

  function nextStep() {
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setIsActive(false);
    }
  }

  const current = steps[stepIndex];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
        <div
          data-highlight={stepIndex === 0 && isActive}
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "10px",
            background: "#f9fafb",
            fontSize: "13px",
            position: "relative",
            zIndex: stepIndex === 0 && isActive ? 30 : 1,
            boxShadow: stepIndex === 0 && isActive ? "0 0 0 4px #111" : "none",
          }}
        >
          Dashboard overview
        </div>
        <div
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "10px",
            background: "#f9fafb",
            fontSize: "13px",
            position: "relative",
            zIndex: stepIndex === 1 && isActive ? 30 : 1,
            boxShadow: stepIndex === 1 && isActive ? "0 0 0 4px #111" : "none",
          }}
        >
          Task list
        </div>
        <div
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "10px",
            background: "#f9fafb",
            fontSize: "13px",
            position: "relative",
            zIndex: stepIndex === 2 && isActive ? 30 : 1,
            boxShadow: stepIndex === 2 && isActive ? "0 0 0 4px #111" : "none",
          }}
        >
          Settings
        </div>
      </div>

      <button
        onClick={startTour}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          background: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Start tour
      </button>

      {isActive && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            borderRadius: "24px",
            zIndex: 20,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "18px",
              maxWidth: "280px",
              textAlign: "center",
              zIndex: 40,
            }}
          >
            <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "14px" }}>
              {current.title}
            </p>
            <p style={{ margin: "0 0 14px", fontSize: "13px", color: "#666" }}>
              {current.description}
            </p>
            <button
              onClick={nextStep}
              style={{
                padding: "8px 18px",
                borderRadius: "8px",
                border: "none",
                background: "#111",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {stepIndex < steps.length - 1 ? "Next" : "Finish"} (
              {stepIndex + 1}/{steps.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
