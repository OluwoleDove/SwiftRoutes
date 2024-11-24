import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRewards } from "../actions/rewardActions";
import "./Rewards.css";

const Rewards = () => {
  const dispatch = useDispatch();
  const { rewards, error } = useSelector((state) => state.rewards);

  useEffect(() => {
    const userId = 1; // Replace with dynamic user ID when implementing authentication
    dispatch(fetchRewards(userId));
  }, [dispatch]);

  return (
    <div className="rewards">
      <h2>Your Rewards</h2>
      {error ? <p className="error">{error}</p> : null}
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>
            <p>{reward.description}</p>
            <p>Points: {reward.points}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;
