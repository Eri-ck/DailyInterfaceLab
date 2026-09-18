// Day 98 - capstone: static summary of this week's testing work.
const rows = [
  { component: "BookmarkToggle", tests: 2 },
  { component: "StepperInput", tests: 2 },
  { component: "SaveStatusIndicator2", tests: 2 },
  { component: "AccessibleProgressBar", tests: 2 },
  { component: "useDebouncedValue", tests: 2 },
  { component: "InviteTeammateForm", tests: 2 },
];

export default function TestReportCard1() {
  const total = rows.reduce((sum, r) => sum + r.tests, 0);

  return (
    <div
      style={{
        maxWidth: "320px",
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <p style={{ margin: "0 0 12px", fontWeight: 700 }}>
        Week 14 test coverage
      </p>
      <table
        style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}
      >
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.component}
              style={{ borderBottom: "1px solid #f2f2f2" }}
            >
              <td style={{ padding: "6px 0" }}>{row.component}</td>
              <td
                style={{ padding: "6px 0", textAlign: "right", color: "#2a8" }}
              >
                {row.tests} passing
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "12px", fontSize: "12px", color: "#888" }}>
        {total} tests total across 6 components.
      </p>
    </div>
  );
}
