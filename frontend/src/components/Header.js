import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1><img src="/logo.png"/></h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/planner">Planner</Link></li>
          <li><Link to="/rewards">Rewards</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/sudoku">Sudoku</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;