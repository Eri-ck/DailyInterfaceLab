import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import TodoList from "../Components/TodoList";
import CustomDropdown from "../Components/CustomDropdown";
import LiveSearch from "../Components/LiveSearch";
import CountdownTimer from "../Components/CountdownTimer";
import ImageCarousel from "../Components/ImageCarousel";
import MultiStepForm from "../Components/MultiStepForm";
import DarkModeToggle from "../Components/DarkModeToggle";

export const week03Meta = {
  week: 3,
  componentsCompleted: 7,
};

export default function Week03() {
  return (
    <>
      <ExerciseBlock
        day={15}
        title="Clase 15 - Todo List"
        description="CRUD basics: adding, completing, and deleting items from an array in state."
      >
        <TodoList />
      </ExerciseBlock>

      <ExerciseBlock
        day={16}
        title="Clase 16 - Custom Dropdown"
        description="Building a select-like component from scratch, closing it on outside click with useRef."
      >
        <CustomDropdown />
      </ExerciseBlock>

      <ExerciseBlock
        day={17}
        title="Clase 17 - Live Search"
        description="Filtering a list in real time as the user types, using array.filter."
      >
        <LiveSearch />
      </ExerciseBlock>

      <ExerciseBlock
        day={18}
        title="Clase 18 - Countdown Timer"
        description="Working with useEffect and setInterval, including proper cleanup to avoid memory leaks."
      >
        <CountdownTimer />
      </ExerciseBlock>

      <ExerciseBlock
        day={19}
        title="Clase 19 - Image Carousel"
        description="Active index state, circular navigation between slides, and indicator dots."
      >
        <ImageCarousel />
      </ExerciseBlock>

      <ExerciseBlock
        day={20}
        title="Clase 20 - Multi-step Form"
        description="Splitting a form into steps, tracking progress, and validating each step before advancing."
      >
        <MultiStepForm />
      </ExerciseBlock>

      <ExerciseBlock
        day={21}
        title="Clase 21 - Dark Mode Toggle"
        description="First use of the Context API to share state (theme) across components without prop drilling."
      >
        <DarkModeToggle />
      </ExerciseBlock>

      {/* Week04 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-4" nextLabel="Week 04" />
    </>
  );
}
