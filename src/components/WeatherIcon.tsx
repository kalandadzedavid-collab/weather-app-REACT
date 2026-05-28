type WeatherCode = {
  weather_code: number;
  width: string
};

export default function WeatherIcon({ weather_code, width }: WeatherCode) {
  let imageName = "icon-loading.svg";

  if (weather_code === 0 || weather_code === 1) {
    imageName = "icon-sunny.webp";
  } else if (weather_code === 2) {
    imageName = "icon-partly-cloudy.webp";
  } else if (weather_code === 3 || weather_code === 45 || weather_code === 48) {
    imageName = "icon-overcast.webp";
  } else if (weather_code >= 51 && weather_code <= 57) {
    imageName = "icon-drizzle.webp";
  } else if (
    (weather_code >= 61 && weather_code <= 67) ||
    (weather_code >= 80 && weather_code <= 82)
  ) {
    imageName = "icon-rain.webp";
  } else if (
    (weather_code >= 71 && weather_code <= 77) ||
    weather_code === 85 ||
    weather_code === 86
  ) {
    imageName = "icon-snow.webp";
  } else if (
    weather_code === 95 ||
    weather_code === 96 ||
    weather_code === 99
  ) {
    imageName = "icon-storm.webp";
  }

  // Returns the actual image element
  return (
    <img
      src={`/images/${imageName}`}
      alt="Current Weather"
      className={`weather-icon ${width}`}
    />
  );
}
