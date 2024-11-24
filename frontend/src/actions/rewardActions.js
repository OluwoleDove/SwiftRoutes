export const fetchRewards = (userId) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost/backend/api/rewards.php?user_id=${userId}`);
      const data = await response.json();
  
      dispatch({ type: "FETCH_REWARDS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_REWARDS_FAIL", payload: error.message });
    }
  };
  