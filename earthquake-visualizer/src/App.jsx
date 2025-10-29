import { useEffect, useState } from 'react';
import MapView from './components/MapView';
import Controls from './components/Controls';
import Loader from './components/Loader';
import ErrorBanner from './components/ErrorBanner';
import { fetchEarthquakes } from './utils/helpers';

export default function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [filters, setFilters] = useState({ timeWindow: 'day', minMag: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // fetch and store earthquak data from fetchEarthquaks function
  async function loadData() {
    try {
      setLoading(true);
      setError('');
      const data = await fetchEarthquakes(filters.timeWindow);
      const filtered = data.filter((eq) => eq.mag >= filters.minMag);
      setEarthquakes(filtered);
    } catch (err) {
      setError('Failed to load data.');
    } finally {
      setLoading(false);
    }
  }
  
  // handles side effect after every time timewindow changes
  useEffect(() => {
    loadData();
  }, [filters.timeWindow]);

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>🌍 Earthquake Visualizer</h1>
        {/* render the controler component to the left side of screen */}
        <Controls filters={filters} setFilters={setFilters} onRefresh={loadData} />
        {/* is loading is true then render loader */}
        {loading && <Loader />} 
        {/* if any error occured then render errorbanner */}
        {error && <ErrorBanner message={error} />}
        {/* display total earthquaks */}
        <p>Total: {earthquakes.length}</p>
      </aside>

      <main className="map-area">
        {/* render mapView with all the data array as prop on the right side of screen */}
        <MapView earthquakes={earthquakes} />
      </main>
    </div>
  );
}
