import { useState } from "react";
import WeatherIcon from "./components/WeatherIcon";
import type { City, Weather } from "./types/weather.types";
import Header from "./components/Header";
import { formatDate, formatDay } from "./utils/weather.util";
import Searchbar from "./components/Searchbar";
import Heading from "./components/Heading";
import Today from "./components/Today";

const App = () => {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<Weather | null>();
  const [weekday, setWeekday] = useState(
    new Date().toLocaleDateString("en-US", { day: "2-digit" })
  );
  const [windSpeed, setWindSpeed] = useState("km");

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
        <button onClick={() => setWindSpeed("km")}>km/h</button>
        <button onClick={() => setWindSpeed("mp")}>mp/h</button>

        <Searchbar setCity={setCity} setWeather={setWeather} />
        <main className="px-41.25 mt-15">
      <Today city={city} weather={weather}/>
        </main>
        
        <div>
          <section>
            <h2>country name: {city?.country}</h2>
            <h2>city name: {city?.name}</h2>
            <h2>date is: {formatDate(weather?.daily?.time)}</h2>
            <WeatherIcon width="" weather_code={weather?.current?.weather_code} />
            <h2>temperature: {weather?.current?.temperature_2m.toFixed()}</h2>
            <h2>
              feels like: {weather?.current?.apparent_temperature.toFixed()}
            </h2>
            <h2>
              humidity: {weather?.current?.relative_humidity_2m.toFixed()}
            </h2>
            <h2>
              wind:{" "}
              {windSpeed == "km"
                ? weather?.current?.wind_speed_10m.toFixed()
                : (weather?.current?.wind_speed_10m
                    ? weather?.current?.wind_speed_10m * 0.621371
                    : 0
                  ).toFixed(1)}
            </h2>
            <h2>
              precipitation: {weather?.current?.precipitation.toFixed()}mm
            </h2>
            {weather?.daily?.time?.map((day, i) => {
              return (
                <div key={day}>
                  <h2>{formatDay(day)}</h2>
                  <WeatherIcon width="" weather_code={weather?.daily.weather_code[i]} />
                  <h2>
                    max temp: {weather?.daily?.temperature_2m_max[i].toFixed()}
                  </h2>
                  <h2>
                    min temp: {weather?.daily?.temperature_2m_min[i].toFixed()}
                  </h2>
                  <hr />
                </div>
              );
            })}

            <select onChange={(e) => setWeekday(e.target.value)}>
              {weather?.daily?.time.map((day: string) => {
                return (
                  <option key={day} value={day.substring(8)}>
                    {formatDay(day)}
                  </option>
                );
              })}
            </select>
            {weather?.hourly?.time.map((item: string, i: number) => {
              if (item.substring(8).startsWith(weekday)) {
                return (
                  <div key={item}>
                    <p>
                      {item.substring(11, 13)}
                      {+item.substring(11, 13) >= 12 ? " : PM " : " : AM "}
                    </p>
                    <p>{weather?.hourly.temperature_2m[i].toFixed()}°C</p>
                    <WeatherIcon width=""
                      weather_code={weather?.hourly.weather_code[i]}
                    />
                  </div>
                );
              }
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
