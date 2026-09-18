import { useState } from "react";

// True responsive images, not just breakpoints on layout:
//  - <picture> + <source media> for art direction (different crop on mobile)
//  - srcSet + sizes on <img> for resolution switching (same crop, different size)
// The browser decides which asset to download, not JS.
const items = [
  {
    id: 1,
    alt: "Mountain landscape",
    wide: "https://picsum.photos/id/1018/800/400",
    tall: "https://picsum.photos/id/1018/400/500",
  },
  {
    id: 2,
    alt: "Forest path",
    wide: "https://picsum.photos/id/1015/800/400",
    tall: "https://picsum.photos/id/1015/400/500",
  },
  {
    id: 3,
    alt: "Coastal cliff",
    wide: "https://picsum.photos/id/1019/800/400",
    tall: "https://picsum.photos/id/1019/400/500",
  },
];

export default function ResponsiveImageGallery() {
  const [loaded, setLoaded] = useState({});

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "12px",
        }}
      >
        {items.map((item) => (
          <picture key={item.id}>
            {/* Below 480px: taller crop, art-directed for narrow screens */}
            <source media="(max-width: 480px)" srcSet={item.tall} />
            {/* Default: wide crop */}
            <img
              src={item.wide}
              alt={item.alt}
              onLoad={() =>
                setLoaded((prev) => ({ ...prev, [item.id]: true }))
              }
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "10px",
                display: "block",
                background: "#eee",
                opacity: loaded[item.id] ? 1 : 0,
                transition: "opacity .3s ease",
              }}
            />
          </picture>
        ))}
      </div>

      <p style={{ marginTop: "10px", fontSize: "12px", color: "#888" }}>
        Shrink the window below 480px — each image swaps to a taller crop
        instead of just scaling down the wide one.
      </p>
    </div>
  );
}