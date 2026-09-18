import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import ResponsiveNavbar from "../Components/ResponsiveNavbar";
import AccessibleDialog from "../Components/AccessibleDialog";
import TypedFormField from "../Components/TypedFormField";
import AccessibleCombobox from "../Components/AccessibleCombobox";
import ResponsiveImageGallery from "../Components/ResponsiveImageGallery";
import TypedCustomHook from "../Components/TypedCustomHook";
import SettingsPanel from "../Components/SettingsPanel";

// Week 13 complete: 7 exercises. This week opened a new axis on top of the
// UI/state pattern track from Weeks 1-12: responsive, accessible, and typed.
export const week13Meta = {
  week: 13,
  componentsCompleted: 7,
};

export default function Week13() {
  return (
    <>
      <ExerciseBlock
        day={85}
        title="Clase 85 - Responsive Navbar"
        description="Collapses into a hamburger menu below 480px."
      >
        <ResponsiveNavbar />
      </ExerciseBlock>

      <ExerciseBlock
        day={86}
        title="Clase 86 - Accessible Dialog"
        description="Modal with focus trap, Escape to close, and ARIA attributes."
      >
        <AccessibleDialog />
      </ExerciseBlock>

      <ExerciseBlock
        day={87}
        title="Clase 87 - Typed Form Field"
        description="First TypeScript component in the lab."
      >
        <TypedFormField
          label="Email"
          type="email"
          required
          helperText="We use this field for account confirmations."
        />
      </ExerciseBlock>

      <ExerciseBlock
        day={88}
        title="Clase 88 - Accessible Combobox"
        description="Autocomplete with full ARIA combobox pattern and keyboard nav."
      >
        <AccessibleCombobox />
      </ExerciseBlock>

      <ExerciseBlock
        day={89}
        title="Clase 89 - Responsive Image Gallery"
        description="Art-directed images with picture and srcSet."
      >
        <ResponsiveImageGallery />
      </ExerciseBlock>

      <ExerciseBlock
        day={90}
        title="Clase 90 - Typed Custom Hook"
        description="A reusable hook written with TypeScript generics."
      >
        <TypedCustomHook />
      </ExerciseBlock>

      <ExerciseBlock
        day={91}
        title="Clase 91 - Settings Panel"
        description="Capstone: responsive, accessible, and typed in one component."
      >
        <SettingsPanel />
      </ExerciseBlock>

      <WeekFooterNav nextPath="/week-14" nextLabel="Week 14" />
    </>
  );
}