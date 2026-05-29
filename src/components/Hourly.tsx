import { formatDay } from "../utils/weather.util";
import WeatherIcon from "./WeatherIcon";

const Hourly = ({ weather, weekday, setWeekday }) => {
  return (
    <section className="hourly-forecast-container h-175 overflow-scroll w-100 bg-[#222741] rounded-2xl px-5 py-7">
     <div className="flex items-center justify-between mb-5">
        <p className="font-bold ">Hourly forecast</p>
         <select className="outline-0 px-4 py-2 bg-[#2e314a] rounded" onChange={(e) => setWeekday(e.target.value)}>
              {weather?.daily?.time.map((day: string) => {
                return (
                  <option key={day} value={day.substring(8)}>
                    {formatDay(day)}
                  </option>
                );
              })}
            </select>
     </div>
      
      <div className="flex flex-col gap-5">
        {weather?.hourly?.time.map((item: string, i: number) => {
          if (item.substring(8).startsWith(weekday)) {
            return (
              <div className="rounded flex items-center justify-between px-3 py-2 bg-[#2e3149]" key={item}>
                <div className="flex items-center gap-2">
                    <WeatherIcon
                  width="w-10"
                  weather_code={weather?.hourly.weather_code[i]}
                />
                <p>
                  {item.substring(11, 13)}
                  {+item.substring(11, 13) >= 12 ? " : PM " : " : AM "}
                </p>
                </div>
                
                <p>{weather?.hourly.temperature_2m[i].toFixed()}°C</p>
                
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Hourly;
