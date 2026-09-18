import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LabHeader from "./layout/LabHeader";
import WeekNav from "./layout/WeekNav";
import ScrollToTop from "./layout/ScrollToTop";
import Week01, { week01Meta } from "./weeks/Week01";
import Week02, { week02Meta } from "./weeks/Week02";
import Week03, { week03Meta } from "./weeks/Week03";
import Week04, { week04Meta } from "./weeks/Week04";
import Week05, { week05Meta } from "./weeks/Week05";
import Week06, { week06Meta } from "./weeks/Week06";
import Week07, { week07Meta } from "./weeks/Week07";
import Week08, { week08Meta } from "./weeks/Week08";
import Week09, { week09Meta } from "./weeks/Week09";
import Week10, { week10Meta } from "./weeks/Week10-1";
import Week11, { week11Meta } from "./weeks/Week11";
import Week12, { week12Meta } from "./weeks/Week12";
import Week13, { week13Meta } from "./weeks/Week13";
import Week14, { week14Meta } from "./weeks/Week14";
import Week15, { week15Meta } from "./weeks/Week15";
import Week16, { week16Meta } from "./weeks/Week16";
import Week17, { week17Meta } from "./weeks/Week17";



// Envuelve cada semana con el header correspondiente,
// para no repetir <LabHeader /> + <WeekNav /> en cada Week0X.js
function WeekPage({ meta, children }) {
  return (
    <>
      <LabHeader
        week={meta.week}
        componentsCompleted={meta.componentsCompleted}
        avatarUrl="https://i.imgur.com/IJunjEO.png"
      />
      <WeekNav />
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main
        style={{
          padding: "40px",
          background: "#f4f4f4",
          minHeight: "100vh",
        }}
      >
        <Routes>
          {/* Ruta raíz redirige siempre a la última semana activa */}
          <Route path="/" element={<Navigate to="/week-1" replace />} />

          <Route
            path="/week-1"
            element={
              <WeekPage meta={week01Meta}>
                <Week01 />
              </WeekPage>
            }
          />

          <Route
            path="/week-2"
            element={
              <WeekPage meta={week02Meta}>
                <Week02 />
              </WeekPage>
            }
          />

          <Route
            path="/week-3"
            element={
              <WeekPage meta={week03Meta}>
                <Week03 />
              </WeekPage>
            }
          />

          <Route
            path="/week-4"
            element={
              <WeekPage meta={week04Meta}>
                <Week04 />
              </WeekPage>
            }
          />

          <Route
            path="/week-5"
            element={
              <WeekPage meta={week05Meta}>
                <Week05 />
              </WeekPage>
            }
          />

          <Route
            path="/week-6"
            element={
              <WeekPage meta={week06Meta}>
                <Week06 />
              </WeekPage>
            }
          />

          <Route
            path="/week-7"
            element={
              <WeekPage meta={week07Meta}>
                <Week07 />
              </WeekPage>
            }
          />

          <Route
            path="/week-8"
            element={
              <WeekPage meta={week08Meta}>
                <Week08 />
              </WeekPage>
            }
          />

          <Route
            path="/week-9"
            element={
              <WeekPage meta={week09Meta}>
                <Week09 />
              </WeekPage>
            }
          />

          <Route
            path="/week-10"
            element={
              <WeekPage meta={week10Meta}>
                <Week10 />
              </WeekPage>
            }
          />

          <Route
            path="/week-11"
            element={
              <WeekPage meta={week11Meta}>
                <Week11 />
              </WeekPage>
            }
          />

          <Route
            path="/week-12"
            element={
              <WeekPage meta={week12Meta}>
                <Week12 />
              </WeekPage>
            }
          />

          <Route
            path="/week-13"
            element={
              <WeekPage meta={week13Meta}>
                <Week13 />
              </WeekPage>
            }
          />
          <Route
            path="/week-14"
            element={
              <WeekPage meta={week14Meta}>
                <Week14 />
              </WeekPage>
            }
          />

          <Route
            path="/week-15"
            element={
              <WeekPage meta={week15Meta}>
                <Week15 />
              </WeekPage>
            }
          />
            <Route
            path="/week-16"
            element={
              <WeekPage meta={week16Meta}>
                <Week16 />
              </WeekPage>
            }
          />
           <Route
            path="/week-17"
            element={
              <WeekPage meta={week17Meta}>
                <Week17 />
              </WeekPage>
            }
          />
      

          {/* Cualquier URL desconocida también cae en la semana 1 */}
          <Route path="*" element={<Navigate to="/week-1" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
