import { useState } from "react";
import type { City, Weather } from "./types/weather.types";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Heading from "./components/Heading";
import Today from "./components/Today";
import Hourly from "./components/Hourly";
import TodayStats from "./components/TodayStats";
import DailyForecast from "./components/DailyForecast";

const App = () => {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<Weather | null>();
  const [weekday, setWeekday] = useState(
    new Date().toLocaleDateString("en-US", { day: "2-digit" })
  );
  

  console.log(weather);
  console.log(city);
  console.log(weekday);

  console.log(weather);
  console.log(weekday);

  return (
    <>
      <Header />
      <Heading />
      <div>
       

        <Searchbar setCity={setCity} setWeather={setWeather} />
        <main className="mb-50 px-41.25 mt-15">
          <div className="flex justify-between">
            <div>
              <Today city={city} weather={weather} />
              <TodayStats weather={weather} />
              <DailyForecast weather={weather} />
            </div>
            
            <Hourly setWeekday={setWeekday} weather={weather} weekday={weekday} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
