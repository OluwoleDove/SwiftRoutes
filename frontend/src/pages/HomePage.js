import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "../actions/routeActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"; // Ensure this path matches your project structure.

const HomePage = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");

  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes.routes);

  const handleSearch = () => {
    if (!start || !destination) {
      alert("Please enter both start and destination locations.");
      return;
    }
    dispatch(fetchRoutes(start, destination));
  };

  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <h1>Welcome to SwiftRoutes</h1>
        <p>Your go-to platform for finding the best routes in no time.</p>
        <div className="search-section">
          <input
            type="text"
            placeholder="Start Location"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="input-field"
          />
          <button onClick={handleSearch} className="search-button">
            Find Routes
          </button>
        </div>
        {routes.length > 0 ? (
          <ul className="routes-list">
            {routes.map((route, index) => (
              <li key={index} className="route-item">
                <strong>Mode:</strong> {route.mode} |{" "}
                <strong>Duration:</strong> {route.duration} mins |{" "}
                <strong>Cost:</strong> ${route.cost}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-routes">No routes available. Try a different search!</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
