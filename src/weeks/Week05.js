import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import CommandPalette from "../Components/CommandPalette";
import KanbanBoard from "../Components/KanbanBoard";
import BarChart from "../Components/BarChart";
import NestedComments from "../Components/NestedComments";
import CharacterCounter from "../Components/CharacterCounter";
import CopyToClipboard from "../Components/CopyToClipboard";
import LoadMoreList from "../Components/LoadMoreList";

export const week05Meta = {
  week: 5,
  componentsCompleted: 7,
};

export default function Week05() {
  return (
    <>
      <ExerciseBlock
        day={29}
        title="Clase 29 - Command Palette"
        description="Keyboard shortcuts with useEffect and keydown, Spotlight-style search pattern."
      >
        <CommandPalette />
      </ExerciseBlock>

      <ExerciseBlock
        day={30}
        title="Clase 30 - Kanban Board"
        description="Drag and drop across multiple columns, moving items between separate state groups."
      >
        <KanbanBoard />
      </ExerciseBlock>

      <ExerciseBlock
        day={31}
        title="Clase 31 - Bar Chart"
        description="Turning raw data into a visual chart using plain SVG, no chart library."
      >
        <BarChart />
      </ExerciseBlock>

      <ExerciseBlock
        day={32}
        title="Clase 32 - Nested Comments"
        description="A recursive component that renders itself for each nested reply."
      >
        <NestedComments />
      </ExerciseBlock>

      <ExerciseBlock
        day={33}
        title="Clase 33 - Character Counter"
        description="A controlled textarea with a character limit and progressive visual feedback."
      >
        <CharacterCounter />
      </ExerciseBlock>

      <ExerciseBlock
        day={34}
        title="Clase 34 - Copy to Clipboard"
        description="Using the browser's Clipboard API, with a temporary confirmation state."
      >
        <CopyToClipboard />
      </ExerciseBlock>

      <ExerciseBlock
        day={35}
        title="Clase 35 - Load More List"
        description="Loading a long list in chunks, the base pattern before real infinite scroll."
      >
        <LoadMoreList />
      </ExerciseBlock>

      {/* nextPath={null} porque Week06 todavía no existe.
          Cuando la crees, cambia esto a nextPath="/week-6" */}
      <WeekFooterNav nextPath="/week-6" nextLabel="Week 06" />
    </>
  );
}
