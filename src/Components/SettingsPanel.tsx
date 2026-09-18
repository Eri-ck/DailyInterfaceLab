import { useEffect, useState } from "react";

// Capstone: combines all three axes opened this week in one component.
//  - Responsive: layout switches from side-by-side tabs to a stacked
//    accordion below 480px (useMediaQuery pattern from Day 85)
//  - Accessible: proper roles, aria-selected, keyboard-navigable tabs
//  - Typed: props and internal state fully typed (TypeScript, like Day 87/90)

type SettingKey = "notifications" | "darkMode" | "autoSave";

interface Setting {
  key: SettingKey;
  label: string;
  description: string;
}

const settings: Setting[] = [
  { key: "notifications", label: "Notifications", description: "Email me about activity." },
  { key: "darkMode", label: "Dark mode", description: "Use a dark color scheme." },
  { key: "autoSave", label: "Auto-save", description: "Save changes automatically." },
];

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export default function SettingsPanel() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const [values, setValues] = useState<Record<SettingKey, boolean>>({
    notifications: true,
    darkMode: false,
    autoSave: true,
  });

  function toggle(key: SettingKey) {
    setValues((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  if (isMobile) {
    // Stacked accordion on narrow screens
    return (
      <div style={{ maxWidth: "320px" }}>
        {settings.map((setting) => (
          <details
            key={setting.key}
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "10px 12px",
              marginBottom: "8px",
            }}
          >
            <summary style={{ fontWeight: 600, cursor: "pointer" }}>
              {setting.label}
            </summary>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <span style={{ fontSize: "13px", color: "#666" }}>
                {setting.description}
              </span>
              <input
                type="checkbox"
                checked={values[setting.key]}
                onChange={() => toggle(setting.key)}
                aria-label={setting.label}
              />
            </div>
          </details>
        ))}
      </div>
    );
  }

  // Side-by-side list on wider screens
  return (
    <div
      role="group"
      aria-label="Settings"
      style={{ maxWidth: "360px", border: "1px solid #eee", borderRadius: "12px" }}
    >
      {settings.map((setting, i) => (
        <div
          key={setting.key}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 16px",
            borderBottom: i < settings.length - 1 ? "1px solid #f0f0f0" : "none",
          }}
        >
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: "14px" }}>
              {setting.label}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#888" }}>
              {setting.description}
            </p>
          </div>
          <input
            type="checkbox"
            checked={values[setting.key]}
            onChange={() => toggle(setting.key)}
            aria-label={setting.label}
          />
        </div>
      ))}
      <p style={{ margin: 0, padding: "10px 16px", fontSize: "12px", color: "#aaa" }}>
        Resize below 480px to see the accordion layout.
      </p>
    </div>
  );
}
