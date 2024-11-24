import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PlannerPage from "./pages/PlannerPage";
import RewardsPage from "./pages/RewardsPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
