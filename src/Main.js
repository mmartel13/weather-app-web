import React, { useState } from 'react';
import './Main.css'

export default function Main() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState();

  const getWeather = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: location,
      }),
    })
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  };

  return (
    <section>
      <div>
        <form>
          <label>
            City or Zip Code
            <input
              type="text"
              placeholder="Enter city or zip code here"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <button onClick={getWeather}>Submit</button>
        </form>
      </div>
      {!weather ? null : (
        <div>
          <p>{weather.current.temp_f}</p>
          <p>{weather.location.name}, {weather.location.region}</p>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
        </div>
      )}
    </section>
  );
}
