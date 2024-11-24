import { configureStore } from '@reduxjs/toolkit';
import routeReducer from './reducers/routeReducer'; // Example: route reducer
import userReducer from './reducers/userReducer'; // Example: user reducer
import rewardReducer from './reducers/rewardReducer'

const store = configureStore({
  reducer: {
    routes: routeReducer,
    users: userReducer,
    rewards: rewardReducer,
  }
});

export default store;