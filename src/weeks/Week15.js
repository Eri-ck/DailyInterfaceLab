import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import MemoizedCard from "../Components/MemoizedCard";
import MemoizedCalculation from "../Components/MemoizedCalculation";
import StableCallbackList from "../Components/StableCallbackList";
import LazyPanel from "../Components/LazyPanel";
import WorkerCalculator from "../Components/WorkerCalculator";
import IdleTaskQueue from "../Components/IdleTaskQueue";
import PerformanceReportCard from "../Components/PerformanceReportCard";

// Week 15 - Performance, reframed for product/UX work: every technique
// here maps to something a user actually feels (jank, lag, slow first
// load, a frozen screen) rather than an abstract React internal.
export const week15Meta = {
  week: 15,
  componentsCompleted: 7,
};

export default function Week15() {
  return (
    <>
      <ExerciseBlock
        day={99}
        title="Clase 99 - Memoized Card"
        description="Design system components must not re-render on every parent update, or lists and dashboards start to feel janky."
      >
        <MemoizedCard />
      </ExerciseBlock>

      <ExerciseBlock
        day={100}
        title="Clase 100 - Memoized Calculation"
        description="Live filtering, search, or data previews stay instant instead of lagging on every keystroke."
      >
        <MemoizedCalculation />
      </ExerciseBlock>

      <ExerciseBlock
        day={101}
        title="Clase 101 - Stable Callback List"
        description="Keeps drag-and-drop, forms, and interactive lists smooth instead of flickering on every parent update."
      >
        <StableCallbackList />
      </ExerciseBlock>

      <ExerciseBlock
        day={102}
        title="Clase 102 - Lazy Panel"
        description="Faster first load: a shorter time-to-interactive is a real UX win, especially on onboarding."
      >
        <LazyPanel />
      </ExerciseBlock>

      <ExerciseBlock
        day={103}
        title="Clase 103 - Worker Calculator"
        description="Heavy work (exports, large data crunching) shouldn't freeze the screen while the user waits."
      >
        <WorkerCalculator />
      </ExerciseBlock>

      <ExerciseBlock
        day={104}
        title="Clase 104 - Idle Task Queue"
        description="Background work like analytics shouldn't ever compete with what the user is actively doing."
      >
        <IdleTaskQueue />
      </ExerciseBlock>

      <ExerciseBlock
        day={105}
        title="Clase 105 - Performance Report Card"
        description="Capstone: performance as a UX skill, not just an engineering one."
      >
        <PerformanceReportCard />
      </ExerciseBlock>

      <WeekFooterNav nextPath="/week-16" nextLabel="Week 16" />
    </>
  );
}