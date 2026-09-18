import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import ButtonInteractionClass from "../Components/ButtonInteractionClass";
import FormFieldMotion from "../Components/FormFieldMotion";
import CardListChoreography from "../Components/CardListChoreography";
import LoadingStatesPersonality from "../Components/LoadingStatesPersonality";
import ScrollReveals2 from "../Components/ScrollReveals2";
import PageTransitionDemo from "../Components/PageTransitionDemo";
import MotionDesignSystem from "../Components/MotionDesignSystem";

// Week 17 - Micro-interactions and motion. Complete: 7 exercises,
// all sharing the same brand-token palette (#FF5A1F primary, blue/
// green secondary) so the week reads as one coherent motion language.
export const week17Meta = {
  week: 17,
  componentsCompleted: 7,
};

export default function Week17() {
  return (
    <>
      <ExerciseBlock
        day={113}
        title="Clase 113 - Button Interaction Class"
        description="18 button micro-interactions across 6 categories: feedback, status, confirmation, branding, icons."
      >
        <ButtonInteractionClass />
      </ExerciseBlock>

      <ExerciseBlock
        day={114}
        title="Clase 114 - Form Field Motion"
        description="Floating labels, a focus ring that slides between fields, and a shake on invalid submit."
      >
        <FormFieldMotion />
      </ExerciseBlock>

      <ExerciseBlock
        day={115}
        title="Clase 115 - Card & List Choreography"
        description="Staggered entrance for a card list, plus drag-to-reorder with layout animations."
      >
        <CardListChoreography />
      </ExerciseBlock>

      <ExerciseBlock
        day={116}
        title="Clase 116 - Loading States With Personality"
        description="Shimmer skeleton and bouncing-dots loader in brand colors instead of generic gray."
      >
        <LoadingStatesPersonality />
      </ExerciseBlock>

      <ExerciseBlock
        day={117}
        title="Clase 117 - Scroll-Triggered Reveals"
        description="Cards fade and slide in as they scroll into view, plus a header that shrinks on scroll."
      >
        <ScrollReveals2 />
      </ExerciseBlock>

      <ExerciseBlock
        day={118}
        title="Clase 118 - Page Transition"
        description="Exit-then-enter transition between screens with AnimatePresence, not an abrupt swap."
      >
        <PageTransitionDemo />
      </ExerciseBlock>

      <ExerciseBlock
        day={119}
        title="Clase 119 - Motion Design System"
        description="Capstone: easing curves and duration tokens as a portfolio-ready reference page."
      >
        <MotionDesignSystem />
      </ExerciseBlock>

      <WeekFooterNav nextPath={null} nextLabel="Week 18" />
    </>
  );
}
