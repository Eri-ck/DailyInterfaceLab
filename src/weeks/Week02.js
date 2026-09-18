import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import EmptyStateSystem from "../Components/EmptyStateSystem";
import UserTablecheck from "../Components/UserTablecheck";
import UserTableModal from "../Components/UserTableModal";
import Accordion from "../Components/Accordion";
import Tabs from "../Components/Tabs";
import ToastSystem from "../Components/ToastSystem";
import RatingStars from "../Components/RatingStars";

export const week02Meta = {
  week: 2,
  componentsCompleted: 7,
};

export default function Week02() {
  return (
    <>
      <ExerciseBlock
        day={8}
        title="Clase 08 - Empty State System"
        description="Estados vacíos reutilizables, variantes, props, map y microinteracciones."
      >
        <EmptyStateSystem />
      </ExerciseBlock>

      <ExerciseBlock
        day={9}
        title="Clase 09 - User Table Check"
        description="Tabla reusable, filas dinámicas, status badges, checkboxes, selección de filas, props y map."
      >
        <UserTablecheck />
      </ExerciseBlock>

      <ExerciseBlock
        day={10}
        title="Clase 10 - User Table Modal"
        description="Renderizado condicional, estado (isOpen), eventos (onClick) — cada fila abre un modal con los detalles del paciente."
      >
        <UserTableModal />
      </ExerciseBlock>

      <ExerciseBlock
        day={11}
        title="Clase 11 - Accordion FAQ"
        description="Expandir/colapsar contenido, estado que controla un solo panel abierto a la vez."
      >
        <Accordion />
      </ExerciseBlock>

      <ExerciseBlock
        day={12}
        title="Clase 12 - Tabs"
        description="Cambio de contenido activo con botones, patrón de índice activo."
      >
        <Tabs />
      </ExerciseBlock>

      <ExerciseBlock
        day={13}
        title="Clase 13 - Toast Notifications"
        description="Temporizadores con useEffect, listas dinámicas que se auto-eliminan."
      >
        <ToastSystem />
      </ExerciseBlock>

      <ExerciseBlock
        day={14}
        title="Clase 14 - Rating Stars"
        description="Estado controlado + estado de preview con hover, input reutilizable."
      >
        <RatingStars />
      </ExerciseBlock>

      {/* Week03 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-3" nextLabel="Week 03" />
    </>
  );
}
