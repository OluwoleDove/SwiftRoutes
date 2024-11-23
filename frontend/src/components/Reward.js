import React, { useEffect, useState } from "react";
import axios from "axios";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/rewards");
        setRewards(response.data);
      } catch (error) {
        console.error("Error fetching rewards:", error);
      }
    };

    fetchRewards();
  }, []);

  return (
    <div>
      <h2>Your Rewards</h2>
      {rewards.length > 0 ? (
        <ul>
          {rewards.map((reward, index) => (
            <li key={index}>
              <strong>{reward.type}:</strong> {reward.description} -{" "}
              <em>{reward.points} points</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No rewards available yet. Start earning by choosing eco-friendly routes!</p>
      )}
    </div>
  );
};

export default Rewards;
