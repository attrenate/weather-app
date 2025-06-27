import React, {useState, useEffect} from 'react';

function Weather(){
    const [weather, setWeather] = useState(null);
    const API_KEY ="549dfba1f8fa41a2a8b132707252706"
     const city = "London";

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((err) => console.log(err));
    }, []);

    if(!weather){
        return <p>Loading weather...</p>
    }

    return(
        <div>
            <h2>{weather.location.name}</h2>
            <p>{weather.current.temp_c}°C</p>
            <p>{weather.current.condition.text}</p>
        </div>
    );
}

export default Weather;