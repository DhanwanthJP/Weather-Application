import React, { useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL, UNITS } from "../weatherApi";
import WeatherCard from "./WeatherCard";
import "./WeatherDashboard.css";

function WeatherDashboard() {
  const [city, setCity] = useState(""); // user search input
  const [weather, setWeather] = useState(null); // API response data
  const [loading, setLoading] = useState(false); // spinner flag
  const [error, setError] = useState(""); // error message string

  const handleInputChange = (e) => {
    setCity(e.target.value);
    if (error) setError("");
  };

  const fetchWeather = async () => {
    // Ensure the user typed something
    const trimmedCity = city.trim();
    if (!trimmedCity) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setWeather(null);
    setError("");

    try {
      const url = `${BASE_URL}?q=${trimmedCity}&appid=${API_KEY}&units=${UNITS}`;

      const response = await axios.get(url); // axios GET request

      setWeather(response.data); // store full API response in state
    } catch (err) {
      // ── Error Handling ───────────────────────────────────────────────────
      if (err.response) {
        // Server response handling
        if (err.response.status === 404) {
          setError(
            `City "${trimmedCity}" not found. Check the spelling and try again.`,
          );
        } else if (err.response.status === 401) {
          setError(
            "Invalid API key. Please check your key in src/weatherApi.js.",
          );
        } else {
          setError(
            `Server error (${err.response.status}). Please try again later.`,
          );
        }
      } else if (err.request) {
        // Request was made but no response received (network issue)
        setError("No response from server. Check your internet connection.");
      } else {
        // Something else went wrong
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Allow pressing Enter to trigger search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  // Render
  return (
    <section className="dashboard" aria-label="Weather search dashboard">
      {/* ── Search Bar ── */}
      <div className="search-container">
        <div className="search-box">
          <span className="search-icon" aria-hidden="true">
            🔍
          </span>

          {/* Controlled text input */}
          <input
            type="text"
            className="search-input"
            placeholder="Search for a city…  e.g. London, Tokyo, Mumbai"
            value={city}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            aria-label="City name"
            autoComplete="off"
          />

          {/* Search Button */}
          <button
            className="search-btn"
            onClick={fetchWeather}
            disabled={loading}
            aria-label="Get weather"
          >
            {loading ? (
              <span className="btn-spinner" aria-hidden="true" />
            ) : (
              "Search"
            )}
          </button>
        </div>

        {/* ── Error Message ── */}
        {error && (
          <div className="error-banner" role="alert" aria-live="assertive">
            <span className="error-icon">⚠️</span>
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* ── Loading State ── */}
      {loading && (
        <div className="loading-state" aria-live="polite">
          <div className="loading-ring" />
          <p>Fetching weather data…</p>
        </div>
      )}

      {/* ── Weather Result ── */}
      {/* WeatherCard receives the full API response object and extracts fields */}
      {weather && !loading && <WeatherCard data={weather} units={UNITS} />}

      {/* ── Empty / Default State (no search yet) ── */}
      {!weather && !loading && !error && (
        <div className="empty-state">
        
          <h2>Search for any city</h2>
          <p>
            Type a city name above and press <strong>Search</strong> to get live
            weather data.
          </p>
        </div>
      )}
    </section>
  );
}

export default WeatherDashboard;
