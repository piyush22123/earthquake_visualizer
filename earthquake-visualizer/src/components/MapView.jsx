import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { magToColor, magToRadius } from '../utils/helpers.js';

// component to display map
export default function MapView({ earthquakes }) {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map((eq) => (
        <CircleMarker
          key={eq.id}
          center={eq.coords}
          radius={magToRadius(eq.mag)}
          pathOptions={{ color: magToColor(eq.mag), fillOpacity: 0.6 }}
        >
          <Popup>
            <div>
              <strong>{eq.place}</strong>
              <div>Magnitude: {eq.mag}</div>
              <div>Depth: {eq.depth} km</div>
              <div>{new Date(eq.time).toLocaleString()}</div>
              <a href={eq.url} target="_blank" rel="noreferrer">
                View Details
              </a>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
