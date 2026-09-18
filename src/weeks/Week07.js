import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import ToggleSwitch from "../Components/ToggleSwitch";
import RangeSlider from "../Components/RangeSlider";
import Autocomplete from "../Components/Autocomplete";
import SortableTable from "../Components/SortableTable";
import NotificationCenter from "../Components/NotificationCenter";
import LazyImageLoader from "../Components/LazyImageLoader";
import UndoToast from "../Components/UndoToast";

export const week07Meta = {
  week: 7,
  componentsCompleted: 7,
};

export default function Week07() {
  return (
    <>
      <ExerciseBlock
        day={43}
        title="Clase 43 - Toggle Switch"
        description="A controlled on/off switch, the building block behind most settings panels."
      >
        <ToggleSwitch />
      </ExerciseBlock>

      <ExerciseBlock
        day={44}
        title="Clase 44 - Range Slider"
        description="A custom-styled range input with a live floating value label."
      >
        <RangeSlider />
      </ExerciseBlock>

      <ExerciseBlock
        day={45}
        title="Clase 45 - Autocomplete"
        description="A typeahead input with keyboard navigation (arrow keys and Enter to select)."
      >
        <Autocomplete />
      </ExerciseBlock>

      <ExerciseBlock
        day={46}
        title="Clase 46 - Sortable Table"
        description="Clicking a column header sorts the table ascending or descending."
      >
        <SortableTable />
      </ExerciseBlock>

      <ExerciseBlock
        day={47}
        title="Clase 47 - Notification Center"
        description="A list of notifications with unread filtering and mark-as-read behavior."
      >
        <NotificationCenter />
      </ExerciseBlock>

      <ExerciseBlock
        day={48}
        title="Clase 48 - Lazy Image Loader"
        description="A blur-up style placeholder shown while an image is still loading."
      >
        <LazyImageLoader />
      </ExerciseBlock>

      <ExerciseBlock
        day={49}
        title="Clase 49 - Undo Toast"
        description="Deleting an item shows a temporary snackbar with an Undo action before it's final."
      >
        <UndoToast />
      </ExerciseBlock>

      {/* Week08 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-8" nextLabel="Week 08" />
    </>
  );
}
