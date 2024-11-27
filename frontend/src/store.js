import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";
import routeReducer from "./reducers/routeReducer";
import rewardReducer from "./reducers/rewardReducer";

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  routes: routeReducer,
  rewards: rewardReducer,
});

// Middleware array
const middleware = [thunk];

// Configure compose for development and production
const composeEnhancers =
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// Create the store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
