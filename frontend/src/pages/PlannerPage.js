import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"; // Adjust path as necessary

const PlannerPage = () => {
  return (
    <div className="planner-page">
      <Header />
      <main className="main-content">
        <div className="planner-container">
          <h1>Plan Your Journey with SwiftRoutes</h1>
          <p>
            Discover the best routes with our advanced trip planner. Choose the
            fastest, cheapest, or most eco-friendly options tailored for you.
          </p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Planner illustration"
            className="planner-image"
          />
          <div className="planner-steps">
            <h2>How It Works:</h2>
            <ul>
              <li>Enter your start and destination locations.</li>
              <li>Choose your preferred transportation mode(s).</li>
              <li>Compare available routes and make your choice.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlannerPage;
