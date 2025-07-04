import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import './Styles/main.scss';
import ForecastCard from './Components/ForecastCard';



function App() {
 

  return (
    <>
     <h1>Weather App</h1>
     <SearchBar />
     <ForecastCard />
    </>
  )
}

export default App
