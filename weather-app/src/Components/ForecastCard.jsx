import { useState, useEffect } from "react";

function ForecastCard() {
  const [forecast, setForecast] = useState(null); 
  const API_KEY = "549dfba1f8fa41a2a8b132707252706";
  const city = "London";

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch((err) => console.log(err));
  }, []);

  if (!forecast || !forecast.forecast) {
    return <p>Loading weather...</p>;
  }

  return (
    <div>
        {forecast.forecast.forecastday.map((day, index) => (
      <div key={index}>
        <p>{day.date}</p>
        <p>{day.day.avgtemp_c}°C</p>
        <p>{day.day.condition.text}</p>
        <img src={day.day.condition.icon} alt="weather icon" />
      </div>
    ))}
    </div>
  );
}

export default ForecastCard;