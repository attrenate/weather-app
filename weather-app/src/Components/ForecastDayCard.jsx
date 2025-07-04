function ForecastDayCard({ date, temp, conditionText, icon }) {
  return (
    <div className="forecast-day-card">
      <p>{date}</p>
      <p>{temp}°C</p>
      <p>{conditionText}</p>
      <img src={icon} alt="weather icon" />
    </div>
  );
}

export default ForecastDayCard;
