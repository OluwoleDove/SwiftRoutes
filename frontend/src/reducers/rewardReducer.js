const initialState = {
    rewards: [],
    loading: false,
    error: null,
  };
  
  const rewardReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_REWARDS_SUCCESS":
        return { ...state, rewards: action.payload, loading: false };
      case "FETCH_REWARDS_FAIL":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default rewardReducer;
  