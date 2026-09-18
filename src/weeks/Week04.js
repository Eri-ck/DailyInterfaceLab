import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import DragDropList from "../Components/DragDropList";
import Pagination from "../Components/Pagination";
import SkeletonLoader from "../Components/SkeletonLoader";
import PasswordStrengthMeter from "../Components/PasswordStrengthMeter";
import FileUploadDropzone from "../Components/FileUploadDropzone";
import ConfirmationModal from "../Components/ConfirmationModal";
import NotificationBadge from "../Components/NotificationBadge";

export const week04Meta = {
  week: 4,
  componentsCompleted: 7,
};

export default function Week04() {
  return (
    <>
      <ExerciseBlock
        day={22}
        title="Clase 22 - Drag & Drop List"
        description="Reordering items using native HTML5 drag events, no external library."
      >
        <DragDropList />
      </ExerciseBlock>

      <ExerciseBlock
        day={23}
        title="Clase 23 - Pagination"
        description="Splitting a long list into pages, calculating ranges and disabled states."
      >
        <Pagination />
      </ExerciseBlock>

      <ExerciseBlock
        day={24}
        title="Clase 24 - Skeleton Loader"
        description="Handling loading states with placeholder UI instead of a blank screen or spinner."
      >
        <SkeletonLoader />
      </ExerciseBlock>

      <ExerciseBlock
        day={25}
        title="Clase 25 - Password Strength Meter"
        description="Validating input in real time using regular expressions."
      >
        <PasswordStrengthMeter />
      </ExerciseBlock>

      <ExerciseBlock
        day={26}
        title="Clase 26 - File Upload Dropzone"
        description="Drag-and-drop file handling with the browser's native File API."
      >
        <FileUploadDropzone />
      </ExerciseBlock>

      <ExerciseBlock
        day={27}
        title="Clase 27 - Confirmation Modal"
        description="A reusable confirm/cancel dialog pattern, separate from the informational modal in Week 02."
      >
        <ConfirmationModal />
      </ExerciseBlock>

      <ExerciseBlock
        day={28}
        title="Clase 28 - Notification Badge"
        description="Overlaying a counter on an icon, and hiding it conditionally when the count is zero."
      >
        <NotificationBadge />
      </ExerciseBlock>

      {/* nextPath={null} porque Week05 todavía no existe.
          Cuando la crees, cambia esto a nextPath="/week-5" */}
      <WeekFooterNav nextPath="/week-5" nextLabel="Week 05" />
    </>
  );
}
