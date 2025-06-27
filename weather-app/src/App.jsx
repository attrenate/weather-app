import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import './Styles/main.scss';
import Weather from "./Weather";



function App() {
 

  return (
    <>
     <h1>Weather App</h1>
     <SearchBar />
     <Weather />
    </>
  )
}

export default App
