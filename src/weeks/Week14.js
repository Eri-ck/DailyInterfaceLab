import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import BookmarkToggle from "../Components/BookmarkToggle";
import StepperInput from "../Components/StepperInput";
import SaveStatusIndicator2 from "../Components/SaveStatusIndicator2";
import AccessibleProgressBar from "../Components/AccessibleProgressBar";
import DebouncedValueDemo from "../Components/DebouncedValueDemo";
import InviteTeammateForm from "../Components/InviteTeammateForm";
import TestReportCard1 from "../Components/TestReportCard1";

// Week 14 - Testing. Every component this week ships with a matching
// .test.js/.test.ts file next to it in src/Components. Run `npm test`
// to see them run; the exercises below just render the live component,
// same as every other week.
export const week14Meta = {
  week: 14,
  componentsCompleted: 7,
};

export default function Week14() {
  return (
    <>
      <ExerciseBlock
        day={92}
        title="Clase 92 - Bookmark Toggle"
        description="Basic render test and a single interaction test."
      >
        <BookmarkToggle />
      </ExerciseBlock>

      <ExerciseBlock
        day={93}
        title="Clase 93 - Stepper Input"
        description="fireEvent test on min/max boundary clamping."
      >
        <StepperInput />
      </ExerciseBlock>

      <ExerciseBlock
        day={94}
        title="Clase 94 - Save Status Indicator"
        description="Async test with waitFor on a status transition."
      >
        <SaveStatusIndicator2 />
      </ExerciseBlock>

      <ExerciseBlock
        day={95}
        title="Clase 95 - Accessible Progress Bar"
        description="Tests aria-valuenow stays in sync with state."
      >
        <AccessibleProgressBar />
      </ExerciseBlock>

      <ExerciseBlock
        day={96}
        title="Clase 96 - Debounced Value"
        description="Typed generic hook tested with fake timers."
      >
        <DebouncedValueDemo />
      </ExerciseBlock>

      <ExerciseBlock
        day={97}
        title="Clase 97 - Invite Teammate Form"
        description="Full user flow test: typing, select, submit."
      >
        <InviteTeammateForm />
      </ExerciseBlock>

      <ExerciseBlock
        day={98}
        title="Clase 98 - Test Report Card"
        description="Capstone: summary of this week's test coverage."
      >
        <TestReportCard1 />
      </ExerciseBlock>

      <WeekFooterNav nextPath="/week-15" nextLabel="Week 15" />
    </>
  );
}
