import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PlannerPage from "./pages/PlannerPage";
import RewardsPage from "./pages/RewardsPage"
import SudokuPage from "./pages/SudokuPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/sudoku" element={<SudokuPage />} />
      </Routes>
    </Router>
  );
};

export default App;
