import { formatDay } from "../utils/weather.util";
import WeatherIcon from "./WeatherIcon";

const DailyForecast = ({ weather }) => {
  return (
    <section>
      <h2 className="mb-5 text-2xl">Daily forecast</h2>
      <div className="flex justify-between">
        {weather?.daily?.time?.map((day, i) => {
          return (
            <div
              className="flex flex-col items-center bg-[#22273e] rounded-2xl w-25 px-2 py-3"
              key={day}
            >
              <h2 className="text-center">{formatDay(day)}</h2>
              <WeatherIcon
                width="w-15"
                weather_code={weather?.daily.weather_code[i]}
              />
              <div className="w-full flex justify-between">
                <h2>{weather?.daily?.temperature_2m_max[i].toFixed()}°</h2>
                <h2>{weather?.daily?.temperature_2m_min[i].toFixed()}°</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DailyForecast;
