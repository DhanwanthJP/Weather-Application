import React from 'react';
import './App.css';
import WeatherDashboard from './components/WeatherDashboard';

/**
 * App.js — Root component
 * Renders the main layout shell and mounts the WeatherDashboard.
 */
function App() {
  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🌤</span>
            <span className="logo-text">WeatherLens</span>
          </div>
          <p className="header-tagline">Real-time weather, anywhere on Earth</p>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="app-main">
        {/*
          WeatherDashboard handles:
            • Search input
            • API call via axios
            • Displaying weather data
        */}
        <WeatherDashboard />
      </main>
      
      {/* Footer */}
      <footer className="app-footer">
        <p>
          Powered by{' '}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noreferrer"
          >
            OpenWeatherMap API
          </a>{' '}
          · Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
