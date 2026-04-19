import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data, units }) {
  // Extract fields from API response 
  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity, pressure, temp_min, temp_max },
    weather,
    wind: { speed },
    visibility,
    clouds: { all: cloudiness },
  } = data;

  const condition   = weather[0].description;   
  const iconCode    = weather[0].icon;          


  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  // Unit labels 
  const tempUnit  = units === 'imperial' ? '°F' : units === 'standard' ? 'K' : '°C';
  const windUnit  = units === 'imperial' ? 'mph' : 'm/s';

  /** convert visibility metres → km or miles */
  const formatVisibility = () => {
    if (units === 'imperial') {
      return `${(visibility / 1609.34).toFixed(1)} mi`;
    }
    return `${(visibility / 1000).toFixed(1)} km`;
  };

  /** Helper: capitalise first letter of condition string */
  const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Render
  return (
    <article className="weather-card" aria-label={`Weather for ${name}, ${country}`}>

      {/*  Hero: City + Main Temp  */}
      <header className="card-hero">
        <div className="hero-left">
          <h1 className="city-name">
            {name}
            <span className="country-badge">{country}</span>
          </h1>
          <p className="condition-label">{capitalise(condition)}</p>

          <div className="temp-display">
            <span className="temp-main">{Math.round(temp)}</span>
            <span className="temp-unit">{tempUnit}</span>
          </div>

          <p className="feels-like">
            Feels like <strong>{Math.round(feels_like)}{tempUnit}</strong>
            &nbsp;·&nbsp;
            <span className="temp-range">
              ↑{Math.round(temp_max)}{tempUnit} &nbsp; ↓{Math.round(temp_min)}{tempUnit}
            </span>
          </p>
        </div>

        <div className="hero-right">
          {/* Weather condition icon from OpenWeatherMap CDN */}
          <img
            src={iconUrl}
            alt={condition}
            className="weather-icon"
          />
        </div>
      </header>

      {/* ── Stats Grid ── */}
      <div className="stats-grid">
        <StatTile
          icon="💧"
          label="Humidity"
          value={`${humidity}%`}
        />
        <StatTile
          icon="🌬️"
          label="Wind Speed"
          value={`${speed} ${windUnit}`}
        />
        <StatTile
          icon="🔵"
          label="Pressure"
          value={`${pressure} hPa`}
        />
        <StatTile
          icon="👁️"
          label="Visibility"
          value={formatVisibility()}
        />
        <StatTile
          icon="☁️"
          label="Cloud Cover"
          value={`${cloudiness}%`}
        />
        <StatTile
          icon="🌡️"
          label="Feels Like"
          value={`${Math.round(feels_like)}${tempUnit}`}
        />
      </div>
    </article>
  );
}


function StatTile({ icon, label, value }) {
  return (
    <div className="stat-tile">
      <span className="stat-icon" aria-hidden="true">{icon}</span>
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  );
}

export default WeatherCard;
