import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "../actions/routeActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent";
import "../index.css"; // Use the existing index.css.

const HomePage = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [faqOpen, setFaqOpen] = useState(null); // State to manage which FAQ is open

  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes.routes);

  const handleSearch = () => {
    if (!start || !destination) {
      alert("Please enter both start and destination locations.");
      return;
    }
    dispatch(fetchRoutes(start, destination));
  };

  const toggleFaq = (id) => {
    setFaqOpen((prev) => (prev === id ? null : id)); // Toggle FAQ open/close
  };

  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <h1>Welcome to SwiftRoutes</h1>
        <p>Your go-to platform for finding the best routes in no time.</p>

        {/* Video and summary text section */}
        <div className="video-summary-section">
          <div className="video-container">
            <video controls className="intro-video">
              <source src="/vidhome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="summary-text">
            <h3>
              Revolutionizing urban commutes with real-time, AI-powered route optimization. Seamlessly integrate public transit, bike-sharing, and eco-friendly options for faster, greener, and more accessible travel. Experience a smart, user-centric platform designed to reduce congestion, cut emissions, and adapt dynamically to your needs. Transform urban mobility—one smart route at a time!
            </h3>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Start Location"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="input-field styled-input"
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="input-field styled-input"
          />
          <button onClick={handleSearch} className="search-button styled-button">
            Find Routes
          </button>
        </div>

        {/* Output Section */}
        {routes.length > 0 ? (
          <div className="routes-output">
            <h2>Available Routes</h2>
            <ul className="routes-list">
              {routes.map((route, index) => (
                <li key={index} className="route-item">
                  <div className="route-details">
                    <span className="route-mode">{route.mode}</span>
                    <span className="route-info">
                      <strong> | Distance:</strong> {route.distance.toFixed(2)} km 
                    </span>
                    <span className="route-info">
                      <strong> | Cost:</strong> ${route.cost.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="no-routes">No routes available. Try a different search!</p>
        )}

        <MapComponent start={start} destination={destination} routes={routes} className="map-container" />

        <div className="info-section"><br /><br />
          <h2>Explore Our Modes</h2>
          <div className="image-gallery">
            <figure>
              <img
                src="/home_1.jpg"
                alt="Road transport"
                className="responsive-image"
              />
              <figcaption><h2>Road</h2></figcaption>
            </figure>
            <figure>
              <img
                src="/home_2.jpg"
                alt="Rail transport"
                className="responsive-image"
              />
              <figcaption><h2>Rail</h2></figcaption>
            </figure>
            <figure>
              <img
                src="/home_3.jpg"
                alt="Air transport"
                className="responsive-image"
              />
              <figcaption><h2>Air</h2></figcaption>
            </figure>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="faq-section">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-item">
            <h3 onClick={() => toggleFaq(1)}>What is SwiftRoutes?</h3>
            {faqOpen === 1 && <p>SwiftRoutes is a platform for optimizing urban commutes using real-time data and AI.</p>}
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleFaq(2)}>How does it work?</h3>
            {faqOpen === 2 && <p>Enter your start and destination locations to find the fastest, most cost-effective routes.</p>}
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleFaq(3)}>What modes of transportation are supported?</h3>
            {faqOpen === 3 && <p>We support public transit, biking, walking, and ride-sharing services.</p>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
