// Day 112 - capstone: what changed this week, framed as a portfolio
// talking point, not just a checklist.
const rows = [
    { component: "StatCard", before: "No prop contract", after: "Typed props (TS)" },
    { component: "ButtonSystem", before: "Div styled as button", after: "Real button + focus ring" },
    { component: "Modal", before: "No focus handling", after: "Focus trap + Escape" },
    { component: "Tabs", before: "Clickable divs", after: "WAI-ARIA tabs pattern" },
    { component: "ThemeContext", before: "Untyped, unsafe to misuse", after: "Typed, throws on misuse" },
    { component: "Form field", before: "Placeholder as label", after: "Real label + aria-describedby" },
  ];
  
  export default function BeforeAfterReportCard() {
    return (
      <div style={{ maxWidth: "380px", border: "1px solid #eee", borderRadius: "12px", padding: "16px" }}>
        <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Week 16 — before / after</p>
        <table style={{ width: "100%", fontSize: "12px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "#888" }}>
              <th style={{ padding: "4px 6px 8px 0" }}>Component</th>
              <th style={{ padding: "4px 6px 8px" }}>Before</th>
              <th style={{ padding: "4px 0 8px" }}>After</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.component} style={{ borderTop: "1px solid #f2f2f2" }}>
                <td style={{ padding: "6px 6px 6px 0", fontWeight: 600 }}>{row.component}</td>
                <td style={{ padding: "6px", color: "#c33" }}>{row.before}</td>
                <td style={{ padding: "6px 0", color: "#2a8" }}>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: "12px", fontSize: "12px", color: "#888" }}>
          This table is the portfolio case study, basically for free.
        </p>
      </div>
    );
  }