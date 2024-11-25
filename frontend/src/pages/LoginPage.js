// pages/LoginPage.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css"; // Optional CSS file for styling

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please provide both email and password.");
      return;
    }
    dispatch(loginUser(email, password));
  };

  return (
    <div className="login-page">
      <Header />
      <main className="login-container">
        <h1>Login to SwiftRoutes</h1>
        <form className="login-form" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" disabled={loading} className="login-button">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {userInfo && (
          <p className="welcome-message">Welcome back, {userInfo.name}!</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
