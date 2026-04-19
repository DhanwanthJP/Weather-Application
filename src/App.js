import React from 'react';
import './App.css';
import WeatherDashboard from './components/WeatherDashboard';


function App() {
  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🌤</span>
            <span className="logo-text">WeatherApp</span>
          </div>
          <p className="header-tagline">Real-time weather, anywhere on Earth</p>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="app-main">
        
        <WeatherDashboard />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Powered by OpenWeatherMap
         {' '}
          · Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
