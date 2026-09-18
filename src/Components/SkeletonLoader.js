import { useState, useEffect } from "react";

// Un bloque gris con animación de "pulso", el placeholder típico
// mientras el contenido real todavía no llegó.
function SkeletonBlock({ width, height }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "8px",
        background: "linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%)",
        backgroundSize: "200% 100%",
        animation: "skeleton-pulse 1.4s ease-in-out infinite",
      }}
    />
  );
}

function UserCardSkeleton() {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <SkeletonBlock width="48px" height="48px" />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <SkeletonBlock width="140px" height="14px" />
        <SkeletonBlock width="90px" height="12px" />
      </div>
    </div>
  );
}

function UserCard({ name, role }) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "999px",
          background: "#111",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
        }}
      >
        {name.charAt(0)}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600, fontSize: "14px" }}>{name}</p>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{role}</p>
      </div>
    </div>
  );
}

export default function SkeletonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulamos una llamada a una API que tarda 2.5 segundos.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  function reload() {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2500);
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <style>
        {`
          @keyframes skeleton-pulse {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {isLoading ? (
          <>
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
          </>
        ) : (
          <>
            <UserCard name="Maria Lopez" role="Product Designer" />
            <UserCard name="Diego Torres" role="Frontend Engineer" />
            <UserCard name="Ana Reyes" role="UX Researcher" />
          </>
        )}
      </div>

      <button
        onClick={reload}
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
        Reload
      </button>
    </div>
  );
}
