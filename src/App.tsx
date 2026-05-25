import { useEffect, useState } from "react";
import { getCityByName, getCityDetails } from "./api/api";

const App = () => {
  const [city, setCity] = useState({})
  const [weather, setWeather] = useState({});
  const [cityName, setCityName] = useState("tbilisi");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, cityName: string) {
    e.preventDefault();
    getCityByName(cityName).then((data) => {
      setCity(data.results[0])
      setLat(data.results[0].latitude);
      setLon(data.results[0].longitude);
    });
  }


  console.log(weather);
  console.log(city)

  useEffect(() => {
    if (lat !== 0){
      getCityDetails(lat, lon).then((data) => {
        setWeather(data)
      })
    }
  }, [lat, lon])

  console.log(weather)


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
    </div>
  );
};

export default App;
