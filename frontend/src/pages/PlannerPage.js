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
          <div className="planner-content">
            <img
              src="/planner.jpg"
              alt="Planner illustration"
              className="planner-image"
            />
            <div className="planner-text">
              <h2>How It Works:</h2>
              <p>Enter your start and destination locations.</p>
              <p>Choose your preferred transportation mode(s).</p>
              <p>Compare available routes and make your choice.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlannerPage;
