import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ForecastCard from './Components/ForecastCard';
import './Styles/main.scss';

function App() {
  const [city, setCity] = useState('London');

  return (
    <>
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} />
      <ForecastCard city={city} />
    </>
  );
}

export default App;
