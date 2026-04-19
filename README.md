# 🌤 WeatherLens — React Weather Report App

A clean, responsive weather application built with React and axios that fetches real-time weather data from the OpenWeatherMap API.

---

## 📁 Project Structure

```
weather-app/
├── public/
│   └── index.html          # HTML shell
├── src/
│   ├── components/
│   │   ├── WeatherDashboard.jsx  # Search + API logic
│   │   ├── WeatherDashboard.css
│   │   ├── WeatherCard.jsx       # Display component
│   │   └── WeatherCard.css
│   ├── App.js              # Root component (layout)
│   ├── App.css
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles & CSS variables
│   └── weatherApi.js       # ⚙️  API key & URL config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v16 or higher) — https://nodejs.org
- npm (comes with Node.js)

### 2. Get a Free API Key
1. Go to https://openweathermap.org/api and create a free account
2. Navigate to **My Profile → API Keys**
3. Copy your API key (it may take up to 10 minutes to activate after creation)

### 3. Configure the API Key
Open `src/weatherApi.js` and replace `YOUR_API_KEY_HERE` with your actual key:

```js
export const API_KEY = 'paste_your_key_here';
```

### 4. Install Dependencies & Run

```bash
# In the project root folder:
npm install
npm start
```

The app will open at **http://localhost:3000**

---

## ⚙️ Configuration Options (`src/weatherApi.js`)

| Variable   | Default                                        | Description                          |
|------------|------------------------------------------------|--------------------------------------|
| `API_KEY`  | `'YOUR_API_KEY_HERE'`                          | Your OpenWeatherMap API key          |
| `BASE_URL` | `https://api.openweathermap.org/data/2.5/weather` | API endpoint (do not change)      |
| `UNITS`    | `'metric'`                                     | `'metric'` / `'imperial'` / `'standard'` |

---

## 🌦 Features

- 🔍 Search weather by city name
- 🌡️ Temperature with feels-like, min/max
- 💧 Humidity, wind speed, pressure, visibility, cloudiness
- ⚠️ Clear error messages for invalid cities or network issues
- 📱 Fully responsive (mobile, tablet, desktop)
- ⌨️ Press **Enter** to search

---

## 🛠 Tech Stack

| Tool            | Purpose                       |
|-----------------|-------------------------------|
| React 18        | UI framework                  |
| axios           | HTTP requests                 |
| OpenWeatherMap  | Weather data API              |
| CSS Variables   | Theming & design tokens       |
| CSS Grid/Flex   | Responsive layout             |
