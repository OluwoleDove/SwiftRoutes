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
            src="/reward.jpg"
            alt="Rewards showcase"
            className="rewards-image"
          />
          <div className="reward-tiers">
            <h2>Reward Tiers</h2>
            <div>
              <strong>Bronze</strong>
              <p>100 points - Discounted ride fares.</p>
            </div>
            <div>
              <strong>Silver</strong>
              <p>500 points - Free ride passes.</p>
            </div>
            <div>
              <strong>Gold</strong>
              <p>1000 points - Exclusive merchandise and perks.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardsPage;
