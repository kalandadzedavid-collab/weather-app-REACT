import { formatDate } from "../utils/weather.util";
import WeatherIcon from "./WeatherIcon";

const Today = ({city, weather}) => {
  return (
    <div className="mb-10 px-20 flex items-center bg-cover rounded-2xl w-200 h-80 bg-[url(/images/bg-today-large.svg)]">
       {city && 
        <section className="flex items-center justify-between w-full">
<div >
            <h2 className="text-3xl">{city?.country}, {city?.name}</h2>
            <h3 className=" mt-5 text-gray-300">{formatDate(weather?.daily?.time)}</h3>
        </div>
         <div className="flex items-center">
            <WeatherIcon width={"w-50"} weather_code={weather?.current?.weather_code} />
            <h4 className="text-5xl">{weather?.current?.temperature_2m.toFixed()}°C</h4>
        </div>
        </section>
        }
    </div>
  );
};

export default Today;
