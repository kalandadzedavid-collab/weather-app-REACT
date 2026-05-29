import TodayStatsBoxes from "./TodayStatsBoxes";

const TodayStats = ({ weather }) => {
  return (
    <section className="flex justify-between mb-10">
      <TodayStatsBoxes
        description={"Feels like"}
        data={
          weather ? weather?.current?.apparent_temperature.toFixed() + "°" : ""
        }
      />
      <TodayStatsBoxes
        description={"Humidity"}
        data={
          weather ? weather?.current?.relative_humidity_2m.toFixed() + "%" : ""
        }
      />
      <TodayStatsBoxes
        description={"Wind"}
        data={
          weather ? weather?.current?.wind_speed_10m.toFixed() + " km/h" : ""
        }
      />
      <TodayStatsBoxes
        description={"Precipitation"}
        data={weather ? weather?.current?.precipitation.toFixed() + " mm" : ""}
      />
    </section>
  );
};

export default TodayStats;
