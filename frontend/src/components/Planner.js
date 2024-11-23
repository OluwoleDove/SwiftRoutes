import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const Planner = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.42, 37.77], // San Francisco
        zoom: 12,
      });
      setMap(mapInstance);
    };

    initializeMap();
  }, []);

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8000/api/routes", {
      start,
      destination,
    });

    const route = response.data.route;

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: route,
      },
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#3887be", "line-width": 5 },
    });
  };

  return (
    <div>
      <h2>Plan Your Route</h2>
      <input
        type="text"
        placeholder="Start Location"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleSubmit}>Find Route</button>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default Planner;
