import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "./MapComponent.css";

mapboxgl.accessToken = "pk.eyJ1IjoidGhlZ2Vla21lIiwiYSI6ImNtM3p5aHAzdDIyN2EyanNjdHg3M3o1czMifQ.0Q7WgYRaWGkgcL5JT1CtAw";

const MapComponent = ({ start, destination, routes }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [startCoords, setStartCoords] = useState(null);
  const [destCoords, setDestCoords] = useState(null);

  // Fetch coordinates for start and destination
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        if (start) {
          const startRes = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              start
            )}.json?access_token=${mapboxgl.accessToken}`
          );
          const startData = startRes.data.features[0]?.geometry.coordinates;
          setStartCoords(startData);
        }

        if (destination) {
          const destRes = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              destination
            )}.json?access_token=${mapboxgl.accessToken}`
          );
          const destData = destRes.data.features[0]?.geometry.coordinates;
          setDestCoords(destData);
        }
      } catch (err) {
        console.error("Error fetching coordinates:", err);
      }
    };

    fetchCoordinates();
  }, [start, destination]);

  // Update map view when coordinates change
  useEffect(() => {
    if (!mapContainer.current) return;

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.431297, 37.773972], // Default center
        zoom: 10,
      });
    }

    if (startCoords && destCoords) {
      const bounds = new mapboxgl.LngLatBounds()
        .extend(startCoords)
        .extend(destCoords);

      map.current.fitBounds(bounds, { padding: 50 });

      // Add markers for start and destination
      new mapboxgl.Marker({ color: "green" })
        .setLngLat(startCoords)
        .addTo(map.current);

      new mapboxgl.Marker({ color: "red" })
        .setLngLat(destCoords)
        .addTo(map.current);
    }
  }, [startCoords, destCoords]);

  return <div className="map-container" ref={mapContainer}></div>;
};

export default MapComponent;