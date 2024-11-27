import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapComponent.css";

mapboxgl.accessToken = "pk.eyJ1IjoidGhlZ2Vla21lIiwiYSI6ImNtM3p5aHAzdDIyN2EyanNjdHg3M3o1czMifQ.0Q7WgYRaWGkgcL5JT1CtAw"; // Replace with your Mapbox access token.

const MapComponent = ({ start, destination, routes }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.431297, 37.773972], // Default center (San Francisco)
      zoom: 10,
    });

    if (start && destination) {
      // Add markers for start and destination
      new mapboxgl.Marker().setLngLat([-122.431297, 37.773972]).addTo(map); // Replace with start coords
      new mapboxgl.Marker().setLngLat([-122.4194, 37.7749]).addTo(map); // Replace with destination coords

      // Add a route line if routes exist
      if (routes && routes.length > 0) {
        const route = routes[0]; // Use the first route
        map.on("load", () => {
          map.addSource("route", {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: route.geometry, // Replace with actual GeoJSON
            },
          });

          map.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#3887be",
              "line-width": 5,
            },
          });
        });
      }
    }

    return () => map.remove();
  }, [start, destination, routes]);

  return <div className="map-container" ref={mapContainer}></div>;
};

export default MapComponent;