import { useState, useEffect } from 'react';
import ForecastDayCard from './ForecastDayCard';

function ForecastCard({ city }) {
  const [forecast, setForecast] = useState(null);
  const API_KEY = "549dfba1f8fa41a2a8b132707252706";

  useEffect(() => {
    if (!city) return;

    setForecast(null); 

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch((err) => {
        console.error(err);
        setForecast(null);
      });
  }, [city]);

  if (!forecast || !forecast.forecast) {
    return <p>Loading weather for {city}...</p>;
  }

  return (
    <div className="forecast-wrapper">
      {forecast.forecast.forecastday.map((day, index) => {
        const weekday = new Date(day.date).toLocaleDateString("en-US", { weekday: "long" });

        return (
          <ForecastDayCard
            key={index}
            date={weekday}
            temp={day.day.avgtemp_c}
            conditionText={day.day.condition.text}
            icon={day.day.condition.icon}
          />
        );
      })}
    </div>
  );
}

export default ForecastCard;
