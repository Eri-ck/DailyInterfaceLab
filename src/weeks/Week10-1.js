import ExerciseBlock from "../layout/ExerciseBlock";
import WeekFooterNav from "../layout/WeekFooterNav";
import CdmxWeather from "../Components/CdmxWeather";
import GithubProfileLookup from "../Components/GithubProfileLookup";
import RandomJokeGenerator from "../Components/RandomJokeGenerator";
import CurrencyConverter from "../Components/CurrencyConverter";
import DistanceToZocalo from "../Components/DistanceToZocalo";
import DiceRoller from "../Components/DiceRoller";
import RandomDogFetcher from "../Components/RandomDogFetcher";

export const week10Meta = {
  week: 10,
  componentsCompleted: 7,
};

export default function Week10() {
  return (
    <>
      <ExerciseBlock
        day={64}
        title="Clase 64 - CDMX Weather by Colonia"
        description="Real weather data from the Open-Meteo API: temperature, wind, humidity, and pressure."
      >
        <CdmxWeather />
      </ExerciseBlock>

      <ExerciseBlock
        day={65}
        title="Clase 65 - GitHub Profile Lookup"
        description="Fetching real user data from the public GitHub API."
      >
        <GithubProfileLookup />
      </ExerciseBlock>

      <ExerciseBlock
        day={66}
        title="Clase 66 - Random Joke Generator"
        description="A fetch-and-refetch pattern using a free public API."
      >
        <RandomJokeGenerator />
      </ExerciseBlock>

      <ExerciseBlock
        day={67}
        title="Clase 67 - Currency Converter"
        description="Real exchange rates from the Frankfurter API, re-fetched as inputs change."
      >
        <CurrencyConverter />
      </ExerciseBlock>

      <ExerciseBlock
        day={68}
        title="Clase 68 - Distance to the Zócalo"
        description="Using the browser's real Geolocation API and the Haversine formula for distance."
      >
        <DistanceToZocalo />
      </ExerciseBlock>

      <ExerciseBlock
        day={69}
        title="Clase 69 - 3D Dice Roller"
        description="A Canvas-based rolling animation, no API — a visual palette cleanser."
      >
        <DiceRoller />
      </ExerciseBlock>

      <ExerciseBlock
        day={70}
        title="Clase 70 - Random Dog Fetcher"
        description="Real images from the Dog CEO API, reinforcing the fetch-and-refetch pattern."
      >
        <RandomDogFetcher />
      </ExerciseBlock>

      {/* Week11 ya existe: apuntamos directo a la ruta */}
      <WeekFooterNav nextPath="/week-11" nextLabel="Week 11" />
    </>
  );
}
