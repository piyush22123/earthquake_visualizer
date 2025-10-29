import axios from 'axios';

export async function fetchEarthquakes(timeWindow = 'day') {
    // URLs for different time windows 
    const urls = {
        hour: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
        day: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
        week: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
    };

    // Fetch data from the appropriate feed URL based on timeWindow
    const res = await axios.get(urls[timeWindow]);

    // Convert GeoJSON features into a simpler array of objects
    return res.data.features.map((f) => ({
        id: f.id,
        mag: f.properties.mag, // magnitude
        place: f.properties.place, // place
        time: f.properties.time, 
        url: f.properties.url,  // url for detailed usgs page
        coords: [
            f.geometry.coordinates[1], // latitute
            f.geometry.coordinates[0]  // longitute
        ],
        depth: f.geometry.coordinates[2], // depth in kilometers
    }));
}

//Assign a color to each earthquake marker based on its magnitude.
export function magToColor(mag) {
  if (mag >= 6) return '#d73027';  // Strong red for major quakes (6.0+)
  if (mag >= 5) return '#fc8d59';  // Orange for 5.0–5.9
  if (mag >= 4) return '#fee08b';  // Yellow for 4.0–4.9
  if (mag >= 3) return '#d9ef8b';  // Light green for 3.0–3.9
  return '#91cf60';                // Soft green for minor quakes (<3.0)
}

//Determine the circle radius for each marker based on magnitude.
export function magToRadius(mag) {
    return Math.max(4, (mag || 0) * 3);
}
