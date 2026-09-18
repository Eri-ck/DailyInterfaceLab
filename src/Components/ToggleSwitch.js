import { useState } from "react";

function Switch({ label, checked, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
      }}
    >
      <span style={{ fontSize: "14px" }}>{label}</span>
      <button
        onClick={() => onChange(!checked)}
        style={{
          width: "44px",
          height: "24px",
          borderRadius: "999px",
          border: "none",
          background: checked ? "#111" : "#e5e5e5",
          position: "relative",
          cursor: "pointer",
          transition: "background .15s ease",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "3px",
            left: checked ? "23px" : "3px",
            width: "18px",
            height: "18px",
            borderRadius: "999px",
            background: "#fff",
            transition: "left .15s ease",
          }}
        />
      </button>
    </div>
  );
}

export default function ToggleSwitch() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
  });

  function updateSetting(key, value) {
    setSettings((current) => ({ ...current, [key]: value }));
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "320px",
      }}
    >
      <Switch
        label="Push notifications"
        checked={settings.notifications}
        onChange={(v) => updateSetting("notifications", v)}
      />
      <Switch
        label="Dark mode"
        checked={settings.darkMode}
        onChange={(v) => updateSetting("darkMode", v)}
      />
      <Switch
        label="Auto-save"
        checked={settings.autoSave}
        onChange={(v) => updateSetting("autoSave", v)}
      />
    </div>
  );
}
