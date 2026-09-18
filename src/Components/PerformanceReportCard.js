// Day 105 - capstone: static summary of this week's performance techniques.
const rows = [
    { technique: "React.memo", purpose: "Skip re-rendering unchanged children" },
    { technique: "useMemo", purpose: "Cache an expensive calculation" },
    { technique: "useCallback", purpose: "Keep a function reference stable" },
    { technique: "React.lazy + Suspense", purpose: "Split code, load on demand" },
    { technique: "Web Worker", purpose: "Move heavy work off the main thread" },
    { technique: "requestIdleCallback", purpose: "Defer low-priority work" },
  ];
  
  export default function PerformanceReportCard() {
    return (
      <div style={{ maxWidth: "340px", border: "1px solid #eee", borderRadius: "12px", padding: "16px" }}>
        <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Week 15 techniques</p>
        <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
          <tbody>
            {rows.map((row) => (
              <tr key={row.technique} style={{ borderBottom: "1px solid #f2f2f2" }}>
                <td style={{ padding: "6px 0", fontWeight: 600 }}>{row.technique}</td>
                <td style={{ padding: "6px 0", textAlign: "right", color: "#888" }}>
                  {row.purpose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }