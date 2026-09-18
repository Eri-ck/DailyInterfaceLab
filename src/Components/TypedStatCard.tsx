// Day 106 - refactor of Week 1's StatCard. Before: props with no
// contract, anyone using it had to guess what was valid. After: a
// typed interface documents exactly what the component accepts —
// this is what a design system component should look like.
interface TypedStatCardProps {
    label: string;
    value: string | number;
    trend?: "up" | "down" | "flat";
    trendValue?: string;
  }
  
  const trendColor: Record<NonNullable<TypedStatCardProps["trend"]>, string> = {
    up: "#2a8",
    down: "#c33",
    flat: "#888",
  };
  
  const trendIcon: Record<NonNullable<TypedStatCardProps["trend"]>, string> = {
    up: "↑",
    down: "↓",
    flat: "→",
  };
  
  export default function TypedStatCard({
    label,
    value,
    trend = "flat",
    trendValue,
  }: TypedStatCardProps) {
    return (
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: "12px",
          padding: "16px",
          minWidth: "160px",
        }}
      >
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>{label}</p>
        <p style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: 700 }}>{value}</p>
        {trendValue && (
          <p style={{ margin: "4px 0 0", fontSize: "12px", color: trendColor[trend] }}>
            {trendIcon[trend]} {trendValue}
          </p>
        )}
      </div>
    );
  }