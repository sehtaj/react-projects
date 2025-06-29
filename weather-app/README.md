# Weather App

A modern weather application built with React that displays current weather conditions and forecasts for searched locations.

## Screenshot

<img width="1449" alt="Screenshot 2025-06-24 at 12 34 30 AM" src="https://github.com/user-attachments/assets/a4bf1f1c-c58a-42b7-b8bd-e794305ff9c8" />

## 🚀 Features


- View user profile information including:
- Real-time weather data for any city worldwide
- Current weather conditions (temperature, humidity, wind speed)
- Weather icons representing current conditions
- Responsive design for all device sizes
- Clean, user-friendly interface


## Technologies Used

- React (Vite)
- CSS Modules for component styling
- OpenWeatherMap API (or other weather API)

---
## 📁 Project Structure
```bash
weather-app/
├── .eslint.config.js         # ESLint configuration (JavaScript style/rules)
├── index.html                # Main HTML entry point (Vite's root template)
├── package-lock.json         # Auto-generated exact dependency versions
├── package.json              # Project metadata, dependencies, and scripts
├── public                    # Static assets served directly (favicons, etc.)
├── src/
│   ├── App.css               # Global styles for the main App component
│   ├── App.jsx               # Root React component (application container)
│   ├── assets                # Images, icons, fonts, etc.
│   ├── components/           # Reusable UI components
│   │   ├── Header.css        # Header component styles
│   │   ├── SearchBar.css     # Search bar component styles
│   │   ├── SearchBar.jsx     # Search input and functionality
│   │   ├── Weather.css       # Weather display component styles
│   │   └── Weather.jsx       # Weather data display component
│   ├── getWeatherData.js     # Weather API service/fetching logic
│   ├── index.css             # Global/base styles (CSS reset, fonts, etc.)
│   └── main.jsx              # JavaScript entry point (renders React app)
```
---

## 📦 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sehtaj/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**
```bash
npm install
```
3. **Run the development server**
```bash
npm run dev
```