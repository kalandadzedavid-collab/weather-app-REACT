import { useEffect, useState } from "react";
import { getCityByName, getCityDetails } from "../api/api";
import type { Weather, City } from "../types/weather.types";
type SearchBarProps = {
  setCity: React.Dispatch<React.SetStateAction<City | null>>;
  setWeather: React.Dispatch<React.SetStateAction<Weather | null>>;
};

const Searchbar = ({ setCity, setWeather }: SearchBarProps) => {
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

  useEffect(() => {
    if (lat !== 0) {
      getCityDetails(lat, lon).then((data) => {
        setWeather(data);
      });
    }
  }, [lat, lon]);

  return (
    <form
      className="flex gap-3 items-center justify-center"
      onSubmit={(e) => handleSubmit(e, cityName)}
    >
      <label className="w-[500px] flex gap-2 px-4 py-2 bg-[#25253e] rounded" htmlFor="cityname">
        <img src="/images/icon-search.svg" alt="" />
        <input placeholder="Search city..." className="outline-0 w-full"
          id="cityname"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </label>

      <button className="cursor-pointer bg-[#495cd7] rounded px-4 py-2" type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
