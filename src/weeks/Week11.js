import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import SpacedFlashcards from "../Components/SpacedFlashcards";
import PomodoroTimer from "../Components/PomodoroTimer";
import RouteElevationProfile from "../Components/RouteElevationProfile";
import PowerZoneCalculator from "../Components/PowerZoneCalculator";
import HeartRateZones from "../Components/HeartRateZones";
import TssEstimator from "../Components/TssEstimator";
import StudyStreak from "../Components/StudyStreak";

export const week11Meta = {
  week: 11,
  componentsCompleted: 7,
};

export default function Week11() {
  return (
    <>
      <ExerciseBlock
        day={71}
        title="Clase 71 - Spaced Repetition Flashcards"
        description="A simplified SM-2 algorithm — each card schedules its own next review date."
      >
        <SpacedFlashcards />
      </ExerciseBlock>

      <ExerciseBlock
        day={72}
        title="Clase 72 - Pomodoro Study Timer"
        description="Focused study sessions with breaks, reusing the timer pattern from Week 03."
      >
        <PomodoroTimer />
      </ExerciseBlock>

      <ExerciseBlock
        day={73}
        title="Clase 73 - Route Elevation Profile"
        description="Real elevation data from the Open-Meteo Elevation API along a CDMX cycling route."
      >
        <RouteElevationProfile />
      </ExerciseBlock>

      <ExerciseBlock
        day={74}
        title="Clase 74 - Power Zone Calculator"
        description="Cycling training zones calculated from your FTP (Functional Threshold Power)."
      >
        <PowerZoneCalculator />
      </ExerciseBlock>

      <ExerciseBlock
        day={75}
        title="Clase 75 - Heart Rate Training Zones"
        description="Using the Karvonen formula, which factors in resting heart rate for more accuracy."
      >
        <HeartRateZones />
      </ExerciseBlock>

      <ExerciseBlock
        day={76}
        title="Clase 76 - TSS Estimator"
        description="Training Stress Score — estimating how demanding a ride was on your body."
      >
        <TssEstimator />
      </ExerciseBlock>

      <ExerciseBlock
        day={77}
        title="Clase 77 - Study Streak Tracker"
        description="A consecutive-day streak counter, reinforcing the study habit itself."
      >
        <StudyStreak />
      </ExerciseBlock>

      {/* Week12 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-12" nextLabel="Week 12" />
    </>
  );
}
