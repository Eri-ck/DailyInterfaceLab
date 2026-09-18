import { NavLink } from "react-router-dom";

// Lista central de semanas disponibles.
// Cuando agregues una semana nueva, solo añade un objeto aquí
// y WeekNav se actualiza solo (no hay que tocar el JSX de abajo).
export const weeksList = [
  { path: "/week-1", label: "Week 01" },
  { path: "/week-2", label: "Week 02" },
  { path: "/week-3", label: "Week 03" },
  { path: "/week-4", label: "Week 04" },
  { path: "/week-5", label: "Week 05" },
  { path: "/week-6", label: "Week 06" },
  { path: "/week-7", label: "Week 07" },
  { path: "/week-8", label: "Week 08" },
  { path: "/week-9", label: "Week 09" },
  { path: "/week-10", label: "Week 10" },
  { path: "/week-11", label: "Week 11" },
  { path: "/week-12", label: "Week 12" },
  { path: "/week-13", label: "Week 13" },
  { path: "/week-14", label: "Week 14" },
  { path: "/week-15", label: "Week 15" },
  { path: "/week-16", label: "Week 16" },
  { path: "/week-17", label: "Week 17" },



];

export default function WeekNav() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "28px",
        flexWrap: "wrap",
      }}
    >
      {weeksList.map((week) => (
        <NavLink
          key={week.path}
          to={week.path}
          style={({ isActive }) => ({
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid #ddd",
            background: isActive ? "#111111" : "#ffffff",
            color: isActive ? "#ffffff" : "#111111",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            transition: "all .15s ease",
          })}
        >
          {week.label}
        </NavLink>
      ))}
    </nav>
  );
}
