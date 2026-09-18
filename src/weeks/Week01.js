import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import SideBar from "../Components/SideBar";
import SideBar2 from "../Components/SideBar2";
import CardMedico from "../Components/CardMedico";
import NinetiesDashboard from "../Components/NinetiesDashboard";
import StatusCard from "../Components/StatusCard";
import PricingCards from "../Components/PricingCards";
import ButtonSystem from "../Components/ButtonSystem";
import StatCard from "../Components/StatCard";

// Metadata de esta semana. App.js la importa para llenar el LabHeader
// (componentsCompleted) sin tener que contar los ExerciseBlock a mano.
export const week01Meta = {
  week: 1,
  componentsCompleted: 7,
};

export default function Week01() {
  return (
    <>
      <ExerciseBlock
        day={1}
        title="Clase 01 Sidebar Component - Hover State"
        description="Side layout, visual navigation, and base structure."
      >
        <SideBar2 />
      </ExerciseBlock>

      <ExerciseBlock
        day={1}
        title="Clase 01 Sidebar Component"
        description="Side layout, visual navigation, and base structure. Ex. 2"
      >
        <SideBar />
      </ExerciseBlock>

      <ExerciseBlock
        day={2}
        title="Clase 02 Card Médico"
        description="Composition of a UI card with clinical hierarchy."
      >
        <CardMedico />
      </ExerciseBlock>

      <ExerciseBlock
        day={3}
        title="Clase 03 Nineties Dashboard"
        description="Experimental dashboard with a visual layout and editorial style."
      >
        <NinetiesDashboard />
      </ExerciseBlock>

      <ExerciseBlock
        day={4}
        title="Clase 04 Status Cards"
        description="Reusable cards with props, layout, and a mini-chart."
      >
        <StatusCard />
      </ExerciseBlock>

      <ExerciseBlock
        day={5}
        title="Clase 05 Pricing Cards"
        description="Component composition, props, variants, reusable lists, and React events."
      >
        <PricingCards />
      </ExerciseBlock>

      <ExerciseBlock
        day={6}
        title="Clase 06 Button System"
        description="Variants, sizes, props, and the foundation of a React design system."
      >
        <ButtonSystem />
      </ExerciseBlock>

      <ExerciseBlock
        day={7}
        title="Clase 07 Stat Cards"
        description="Variants, sizes, props, and the foundation of a React design system."
      >
        <StatCard />
      </ExerciseBlock>

      <WeekFooterNav nextPath="/week-2" nextLabel="Week 02" />
    </>
  );
}
