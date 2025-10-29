🌍 Earthquake Visualizer

A simple React app that shows recent earthquakes from the USGS live feed on an interactive map.
You can filter earthquakes by time range and minimum magnitude, then view each event with color-coded markers and popups.

✅ Features

Live earthquake data from USGS (Past Hour, Day, Week)

Interactive map using Leaflet + React Leaflet

Color-coded markers based on magnitude

Adjustable minimum magnitude filter

Popups showing place, depth, time, and USGS link

Clean sidebar layout with a refresh button

Works on desktop and mobile

🛠️ Tech Stack

React (Vite)

React Leaflet for the map

Leaflet tiles (OpenStreetMap)

Axios for API calls

📦 Getting Started
1. Clone this repo
git clone https://github.com/piyush22123/earthquake_visualizer.git
cd earthquake-visualizer

2. Install dependencies
npm install

3. Run the project
npm run dev


Then open the local URL that appears (usually http://localhost:5173/
).

🧩 Project Structure
src/
│
├── components/
│   ├── Controls.jsx
│   ├── MapView.jsx
│   ├── Loader.jsx
│   └── ErrorBanner.jsx
│
├── utils/
│   └── helpers.js
│
├── App.jsx
├── main.jsx
└── index.css

🌐 Deployment

You can deploy this project easily on Vercel or Netlify.

Build for production:
npm run build


Upload the dist/ folder or connect your GitHub repo directly.

📡 Data Source

This app uses the official USGS Earthquake GeoJSON Feed:

Past Hour

Past Day

Past Week

Each feed includes:

Magnitude

Location description

Coordinates

Depth

Timestamp

Source URL

More details: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

📘 How It Works
1. Fetch Data

The app calls the USGS feed based on the selected time window and transforms the raw GeoJSON into simple objects.

2. Filter

Earthquakes below the selected magnitude are removed.

3. Render

React Leaflet displays each earthquake as a circle marker:

Color shows magnitude strength

Radius scales with magnitude

Clicking opens a popup with details

🧪 Future Improvements (Optional)

If you want to expand the project later:

Add marker clustering for dense areas

Add a heatmap view

Add animations to show earthquakes over time

Add a search bar to jump to a location

Add dark mode

Add statistics (largest quake, average magnitude)

🤝 Acknowledgment

This project was built with help from ChatGPT for planning, explanation, and code breakdown.