import axios from "axios";
import { addPoints } from "./rewardActions";

export const fetchRoutes = (start, destination) => async (dispatch) => {
  const accessToken = "pk.eyJ1IjoidGhlZ2Vla21lIiwiYSI6ImNtM3p5aHAzdDIyN2EyanNjdHg3M3o1czMifQ.0Q7WgYRaWGkgcL5JT1CtAw"; // Replace with your token
  
    try {
      const startRes = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          start
        )}.json?access_token=${accessToken}`
      );
      const destRes = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          destination
        )}.json?access_token=${accessToken}`
      );
  
      const startCoords = startRes.data.features[0]?.geometry.coordinates;
      const destCoords = destRes.data.features[0]?.geometry.coordinates;
  
      if (startCoords && destCoords) {
        // Haversine formula
        const R = 6371;
        const dLat = ((destCoords[1] - startCoords[1]) * Math.PI) / 180;
        const dLon = ((destCoords[0] - startCoords[0]) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos((startCoords[1] * Math.PI) / 180) *
            Math.cos((destCoords[1] * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
  
        const routes = [
          { mode: "Car", distance, cost: distance * 0.5 },
          { mode: "Bike", distance, cost: distance * 0.2 },
          { mode: "Public Transit", distance, cost: distance * 0.1 },
        ];
  
        dispatch({ type: "FETCH_ROUTES_SUCCESS", payload: routes });
        
        // Add 3 points after fetching routes
        dispatch(addPoints(3));
      } else {
        throw new Error("Coordinates not found");
      }
    } catch (err) {
      console.error("Error fetching routes:", err);
      dispatch({ type: "FETCH_ROUTES_ERROR" });
    }
  };
  