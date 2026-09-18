import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import TypedStatCard from "../Components/TypedStatCard";
import AccessibleButtonSystem from "../Components/AccessibleButtonSystem";
import AccessibleModalRefactor from "../Components/AccessibleModalRefactor";
import AccessibleTabs from "../Components/AccessibleTabs";
import TypedThemeContext from "../Components/TypedThemeContext";
import AccessibleFormField from "../Components/AccessibleFormField";
import BeforeAfterReportCard from "../Components/BeforeAfterReportCard";

// Week 16 - Consolidation. Refactors real components from Weeks 1-3
// with today's standards: typed props, real accessibility. Doubles as
// a portfolio case study — a documented before/after of your own growth.
export const week16Meta = {
  week: 16,
  componentsCompleted: 7,
};

export default function Week16() {
  return (
    <>
      <ExerciseBlock
        day={106}
        title="Clase 106 - Typed Stat Card"
        description="Refactor of Week 1's StatCard: a real prop contract instead of guesswork."
      >
        <TypedStatCard label="Active users" value="1,204" trend="up" trendValue="+12% this week" />
      </ExerciseBlock>

      <ExerciseBlock
        day={107}
        title="Clase 107 - Accessible Button System"
        description="Refactor of Week 1's ButtonSystem: real buttons, keyboard-focusable, disabled state wired to ARIA."
      >
        <AccessibleButtonSystem />
      </ExerciseBlock>

      <ExerciseBlock
        day={108}
        title="Clase 108 - Accessible Modal Refactor"
        description="Refactor of Week 2's modal: focus trap and Escape support added to old, still-in-use code."
      >
        <AccessibleModalRefactor />
      </ExerciseBlock>

      <ExerciseBlock
        day={109}
        title="Clase 109 - Accessible Tabs"
        description="Refactor of Week 2's Tabs: the real WAI-ARIA tabs pattern with arrow-key navigation."
      >
        <AccessibleTabs />
      </ExerciseBlock>

      <ExerciseBlock
        day={110}
        title="Clase 110 - Typed Theme Context"
        description="Refactor of Week 3's DarkModeToggle: a typed context that's actually safe to misuse-proof."
      >
        <TypedThemeContext />
      </ExerciseBlock>

      <ExerciseBlock
        day={111}
        title="Clase 111 - Accessible Form Field"
        description="Refactor of an early form pattern: a real label instead of a placeholder standing in for one."
      >
        <AccessibleFormField />
      </ExerciseBlock>

      <ExerciseBlock
        day={112}
        title="Clase 112 - Before / After Report Card"
        description="Capstone: this week's refactors, framed as a portfolio case study."
      >
        <BeforeAfterReportCard />
      </ExerciseBlock>

      <WeekFooterNav nextPath={null} nextLabel="Week 17" />
    </>
  );
}