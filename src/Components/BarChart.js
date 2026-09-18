const data = [
  { label: "Mon", value: 30 },
  { label: "Tue", value: 55 },
  { label: "Wed", value: 40 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 20 },
  { label: "Sun", value: 15 },
];

const chartHeight = 180;
const barWidth = 32;
const gap = 16;
const maxValue = Math.max(...data.map((d) => d.value));

export default function BarChart() {
  const chartWidth = data.length * (barWidth + gap);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <h3 style={{ margin: "0 0 20px" }}>Weekly Activity</h3>

      <svg
        width={chartWidth}
        height={chartHeight + 30}
        style={{ overflow: "visible" }}
      >
        {data.map((item, index) => {
          // Convertimos el valor en una altura proporcional al máximo.
          const barHeight = (item.value / maxValue) * chartHeight;
          const x = index * (barWidth + gap);
          const y = chartHeight - barHeight;

          return (
            <g key={item.label}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx={6}
                fill="#111"
              />
              <text
                x={x + barWidth / 2}
                y={chartHeight + 20}
                textAnchor="middle"
                fontSize="12"
                fill="#666"
              >
                {item.label}
              </text>
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize="11"
                fill="#999"
              >
                {item.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
