import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Planner from "./components/Planner";
import Rewards from "./components/Rewards";
import "./App.css"; // Importing CSS for styling

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>SwiftRoutes</h1>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
