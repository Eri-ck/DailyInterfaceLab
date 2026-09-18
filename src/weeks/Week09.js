import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import StickyHeaderScroll from "../Components/StickyHeaderScroll";
import MasonryGrid from "../Components/MasonryGrid";
import OnboardingTour from "../Components/OnboardingTour";
import TooltipDemo from "../Components/TooltipDemo";
import ColorPaletteGenerator from "../Components/ColorPaletteGenerator";
import StickyTable from "../Components/StickyTable";
import TiltCard from "../Components/TiltCard";

export const week09Meta = {
  week: 9,
  componentsCompleted: 7,
};

export default function Week09() {
  return (
    <>
      <ExerciseBlock
        day={57}
        title="Clase 57 - Sticky Header on Scroll"
        description="Detecting scroll position and changing the header style dynamically."
      >
        <StickyHeaderScroll />
      </ExerciseBlock>

      <ExerciseBlock
        day={58}
        title="Clase 58 - Masonry Grid"
        description="A Pinterest-style layout with variable-height columns using CSS columns."
      >
        <MasonryGrid />
      </ExerciseBlock>

      <ExerciseBlock
        day={59}
        title="Clase 59 - Onboarding Spotlight Tour"
        description="An overlay that highlights one element at a time, the classic product tour pattern."
      >
        <OnboardingTour />
      </ExerciseBlock>

      <ExerciseBlock
        day={60}
        title="Clase 60 - Smart Tooltip"
        description="A tooltip that detects the edge of the screen and flips its position automatically."
      >
        <TooltipDemo />
      </ExerciseBlock>

      <ExerciseBlock
        day={61}
        title="Clase 61 - Color Palette Generator"
        description="Random generation plus copy-to-clipboard, building on the pattern from Week 05."
      >
        <ColorPaletteGenerator />
      </ExerciseBlock>

      <ExerciseBlock
        day={62}
        title="Clase 62 - Sticky Table"
        description="A table with a fixed header while the content scrolls underneath it."
      >
        <StickyTable />
      </ExerciseBlock>

      <ExerciseBlock
        day={63}
        title="Clase 63 - 3D Tilt Card"
        description="A card that tilts in 3D following the mouse, using perspective and CSS transforms."
      >
        <TiltCard />
      </ExerciseBlock>

      {/* Week10 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-10" nextLabel="Week 10" />
    </>
  );
}
