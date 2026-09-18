import { useState } from "react";

const images = [
  "https://picsum.photos/seed/lazy1/500/300",
  "https://picsum.photos/seed/lazy2/500/300",
];

function LazyImage({ src }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
        height: "180px",
      }}
    >
      {/* Placeholder gris mientras la imagen real no ha cargado */}
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%)",
            backgroundSize: "200% 100%",
            animation: "lazy-pulse 1.4s ease-in-out infinite",
          }}
        />
      )}

      <img
        src={src}
        alt=""
        onLoad={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity .4s ease",
        }}
      />
    </div>
  );
}

export default function LazyImageLoader() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "20px",
      }}
    >
      <style>
        {`
          @keyframes lazy-pulse {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
      >
        {images.map((src) => (
          <LazyImage key={src} src={src} />
        ))}
      </div>
    </div>
  );
}
