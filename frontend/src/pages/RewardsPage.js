import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaDonate, FaGift, FaWallet } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"; // Use the existing index.css.

const RewardsPage = () => {
  const totalPoints = useSelector((state) => state.rewards.totalPoints); // Get total points from Redux
  const dispatch = useDispatch();

  const redeemReward = (cost, reward) => {
    if (totalPoints >= cost) {
      alert(`You redeemed "${reward}" for ${cost} points!`);
    } else {
      alert("Not enough points to redeem this reward.");
    }
  };

  const rewards = [
    { id: 1, icon: <FaDonate size={50} color="green" />, label: "Donate to Charity", cost: 1000 },
    { id: 2, icon: <FaGift size={50} color="blue" />, label: "Order a Supermarket Gift Card", cost: 1000 },
    { id: 3, icon: <FaWallet size={50} color="gold" />, label: "Save to Wallet", cost: 1000 },
  ];

  return (
    <div className="rewards-page">
      <Header />
      <main>
        <div>
          <h2 className="rewards-info">You have {totalPoints} points!</h2>
          <div className="reward-options">
            {rewards.map(({ id, icon, label, cost }) => (
              <div key={id} className={`reward-option ${totalPoints >= cost ? "redeemable" : "disabled"}`}>
                {icon}
                <p>{label} ({cost} points)</p>
                <button
                  disabled={totalPoints < cost}
                  onClick={() => redeemReward(cost, label)}
                  className="redeem-btn"
                >
                  Redeem
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RewardsPage;
