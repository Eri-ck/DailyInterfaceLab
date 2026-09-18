import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import SignaturePad from "../Components/SignaturePad";
import ConfettiButton from "../Components/ConfettiButton";
import ResizableSplitPane from "../Components/ResizableSplitPane";
import ProgressRing from "../Components/ProgressRing";
import VirtualizedList from "../Components/VirtualizedList";
import ThemeCustomizer from "../Components/ThemeCustomizer";
import TypewriterEffect from "../Components/TypewriterEffect";

export const week08Meta = {
  week: 8,
  componentsCompleted: 7,
};

export default function Week08() {
  return (
    <>
      <ExerciseBlock
        day={50}
        title="Clase 50 - Signature Pad"
        description="Free-hand drawing with the mouse using the Canvas API — a first real use of <canvas>."
      >
        <SignaturePad />
      </ExerciseBlock>

      <ExerciseBlock
        day={51}
        title="Clase 51 - Confetti Button"
        description="An animated particle system built with Canvas, triggered by a click event."
      >
        <ConfettiButton />
      </ExerciseBlock>

      <ExerciseBlock
        day={52}
        title="Clase 52 - Resizable Split Pane"
        description="Dragging a divider to resize two panels — mousedown/mousemove/mouseup logic."
      >
        <ResizableSplitPane />
      </ExerciseBlock>

      <ExerciseBlock
        day={53}
        title="Clase 53 - Animated Progress Ring"
        description="Animating an SVG circle with stroke-dasharray, a common pattern in dashboards."
      >
        <ProgressRing />
      </ExerciseBlock>

      <ExerciseBlock
        day={54}
        title="Clase 54 - Virtualized List"
        description="Rendering only what's visible in a list of thousands of items — the trick behind fast long lists."
      >
        <VirtualizedList />
      </ExerciseBlock>

      <ExerciseBlock
        day={55}
        title="Clase 55 - Live Theme Customizer"
        description="CSS custom properties (variables) controlled live from React state."
      >
        <ThemeCustomizer />
      </ExerciseBlock>

      <ExerciseBlock
        day={56}
        title="Clase 56 - Typewriter Effect"
        description="A letter-by-letter text animation using setTimeout, a classic landing page pattern."
      >
        <TypewriterEffect />
      </ExerciseBlock>

      {/* Week09 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-9" nextLabel="Week 09" />
    </>
  );
}
