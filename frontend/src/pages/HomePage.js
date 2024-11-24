import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "../actions/routeActions";

const HomePage = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");

  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes.routes);

  const handleSearch = () => {
    dispatch(fetchRoutes(start, destination));
  };

  return (
    <div>
      <h1>SwiftRoutes</h1>
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
      <button onClick={handleSearch}>Find Routes</button>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            Mode: {route.mode}, Duration: {route.duration} mins, Cost: $
            {route.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
