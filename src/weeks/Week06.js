import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import ReviewRating from "../Components/ReviewRating";
import Breadcrumbs from "../Components/Breadcrumbs";
import AvatarGroup from "../Components/AvatarGroup";
import ContextMenu from "../Components/ContextMenu";
import SegmentedControl from "../Components/SegmentedControl";
import Timeline from "../Components/Timeline";
import LiveValidationForm from "../Components/LiveValidationForm";

export const week06Meta = {
  week: 6,
  componentsCompleted: 7,
};

export default function Week06() {
  return (
    <>
      <ExerciseBlock
        day={36}
        title="Clase 36 - Review Rating"
        description="Combining a form's state with a list that updates live, building on the Week 02 rating stars."
      >
        <ReviewRating />
      </ExerciseBlock>

      <ExerciseBlock
        day={37}
        title="Clase 37 - Breadcrumbs"
        description="Hierarchical navigation, generating a path dynamically from an array."
      >
        <Breadcrumbs />
      </ExerciseBlock>

      <ExerciseBlock
        day={38}
        title="Clase 38 - Avatar Group"
        description="Overlapping visual elements and calculating a '+N' overflow indicator."
      >
        <AvatarGroup />
      </ExerciseBlock>

      <ExerciseBlock
        day={39}
        title="Clase 39 - Context Menu"
        description="Right-click event handling with dynamic positioning based on mouse coordinates."
      >
        <ContextMenu />
      </ExerciseBlock>

      <ExerciseBlock
        day={40}
        title="Clase 40 - Segmented Control"
        description="A modern alternative to radio buttons, common in iOS-style interfaces."
      >
        <SegmentedControl />
      </ExerciseBlock>

      <ExerciseBlock
        day={41}
        title="Clase 41 - Timeline"
        description="Rendering a chronological sequence of events with visual connectors between them."
      >
        <Timeline />
      </ExerciseBlock>

      <ExerciseBlock
        day={42}
        title="Clase 42 - Live Validation Form"
        description="Validating fields as the user types, showing errors only after the field loses focus (onBlur)."
      >
        <LiveValidationForm />
      </ExerciseBlock>

      {/* Week07 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-7" nextLabel="Week 07" />
    </>
  );
}
