// Initial state for rewards
const initialState = {
  totalPoints: 0, // Tracks the total points earned
};

const rewardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POINTS":
      return { ...state, totalPoints: state.totalPoints + action.payload };
    default:
      return state;
  }
};

export default rewardReducer;
