import { useEffect, useState } from "react";
import { getCityByName, getCityDetails } from "./api/api";
import WeatherIcon from "./components/WeatherIcon";

type City = {
  country: string;
  name: string;
};

type Weather = {
  daily: {
    time: [];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number;
  };
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    precipitation: number;
    weather_code: number;
  };
};

const App = () => {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<Weather | null>();
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, cityName: string) {
    e.preventDefault();
    getCityByName(cityName).then((data) => {
      setCity(data.results[0]);
      setLat(data.results[0].latitude);
      setLon(data.results[0].longitude);
    });
  }

  console.log(weather);
  console.log(city);

  useEffect(() => {
    if (lat !== 0) {
      getCityDetails(lat, lon).then((data) => {
        setWeather(data);
      });
    }
  }, [lat, lon]);

  function formatDate(array: string | undefined | []): string | null {
    if (!array) return null;
    const date = array[0];

    const formatedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
    });

    return formatedDate;
  }

  function formatDay(param: string) {
    const day = new Date(param).toLocaleDateString("en-US", {
      weekday: "long",
    });

    return day.substring(0, 3);
  }

  console.log(weather);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, cityName)}>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <section>
          <h2>country name: {city?.country}</h2>
          <h2>city name: {city?.name}</h2>
          <h2>date is: {formatDate(weather?.daily?.time)}</h2>
          <WeatherIcon weather_code={weather?.current?.weather_code} />
          <h2>temperature: {weather?.current?.temperature_2m.toFixed()}</h2>
          <h2>
            feels like: {weather?.current?.apparent_temperature.toFixed()}
          </h2>
          <h2>humidity: {weather?.current?.relative_humidity_2m.toFixed()}</h2>
          <h2>wind: {weather?.current?.wind_speed_10m.toFixed()}</h2>
          <h2>precipitation: {weather?.current?.precipitation.toFixed()}mm</h2>
          {weather?.daily?.time?.map((day, i) => {
            return (
              <div key={day}>
                <h2>{formatDay(day)}</h2>
                <WeatherIcon weather_code={weather?.daily.weather_code[i]} />
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
        </section>
      </div>
    </div>
  );
};

export default App;
