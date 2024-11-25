import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import routeReducer from "./reducers/routeReducer";
import rewardReducer from "./reducers/rewardReducer";

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  routes: routeReducer,
  rewards: rewardReducer,
});

// Create the store
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
