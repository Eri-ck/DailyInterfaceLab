import { useState, useEffect, useRef } from "react";

export default function StickyHeaderScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    function handleScroll() {
      // Cuando el scroll pasa de 40px, cambiamos el estilo del header.
      setIsScrolled(container.scrollTop > 40);
    }

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <div
        ref={scrollContainerRef}
        style={{ height: "260px", overflowY: "auto", position: "relative" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            padding: isScrolled ? "10px 20px" : "20px",
            background: isScrolled ? "rgba(255,255,255,0.9)" : "#fff",
            backdropFilter: isScrolled ? "blur(6px)" : "none",
            boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.06)" : "none",
            transition: "all .2s ease",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: isScrolled ? "15px" : "20px",
              transition: "font-size .2s ease",
            }}
          >
            Page Title
          </p>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <p
              key={i}
              style={{ fontSize: "13px", color: "#666", lineHeight: 1.8 }}
            >
              Scroll down to see the header shrink and add a background — line{" "}
              {i + 1}.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
