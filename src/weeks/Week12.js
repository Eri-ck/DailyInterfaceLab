import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import MorseCodeTranslator from "../Components/MorseCodeTranslator";
import QrCodeGenerator from "../Components/QrCodeGenerator";
import SpeechToText from "../Components/SpeechToText";
import TextToSpeechReader from "../Components/TextToSpeechReader";
import SolarSystemOrbit from "../Components/SolarSystemOrbit";
import TriviaQuizGame from "../Components/TriviaQuizGame";
import ToneVisualizer from "../Components/ToneVisualizer";

export const week12Meta = {
  week: 12,
  componentsCompleted: 7,
};

export default function Week12() {
  return (
    <>
      <ExerciseBlock
        day={78}
        title="Clase 78 - Morse Code Translator"
        description="Translates text to Morse code and plays it back as real audio using the Web Audio API."
      >
        <MorseCodeTranslator />
      </ExerciseBlock>

      <ExerciseBlock
        day={79}
        title="Clase 79 - QR Code Generator"
        description="A real QR generation API — turns any text into a scannable code."
      >
        <QrCodeGenerator />
      </ExerciseBlock>

      <ExerciseBlock
        day={80}
        title="Clase 80 - Speech to Text"
        description="The browser's native Web Speech API — dictate and see it transcribed live."
      >
        <SpeechToText />
      </ExerciseBlock>

      <ExerciseBlock
        day={81}
        title="Clase 81 - Text to Speech Reader"
        description="The SpeechSynthesis API — the browser reads any text out loud, at adjustable speed."
      >
        <TextToSpeechReader />
      </ExerciseBlock>

      <ExerciseBlock
        day={82}
        title="Clase 82 - Solar System Orbit"
        description="A Canvas animation with simple orbital physics — planets circling at different speeds."
      >
        <SolarSystemOrbit />
      </ExerciseBlock>

      <ExerciseBlock
        day={83}
        title="Clase 83 - Trivia Quiz Game"
        description="Real trivia questions from the Open Trivia Database API, with live scoring."
      >
        <TriviaQuizGame />
      </ExerciseBlock>

      <ExerciseBlock
        day={84}
        title="Clase 84 - Tone Visualizer"
        description="Generating a real tone with the Web Audio API and drawing its waveform live."
      >
        <ToneVisualizer />
      </ExerciseBlock>

      {/* Week13 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-13" nextLabel="Week 13" />
    </>
  );
}
