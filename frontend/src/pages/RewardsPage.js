import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"; // Adjust path as necessary

const RewardsPage = () => {
  return (
    <div className="rewards-page">
      <Header />
      <main className="main-content">
        <div className="rewards-container">
          <h1>Earn Rewards for Green Choices</h1>
          <p>
            Track your rewards and reduce your carbon footprint. Every green
            trip counts!
          </p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Rewards showcase"
            className="rewards-image"
          />
          <div className="reward-tiers">
            <h2>Reward Tiers:</h2>
            <ul>
              <li>
                <strong>Bronze:</strong> 100 points - Discounted ride fares.
              </li>
              <li>
                <strong>Silver:</strong> 500 points - Free ride passes.
              </li>
              <li>
                <strong>Gold:</strong> 1000 points - Exclusive merchandise and
                perks.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardsPage;
