import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // For the loading spinner
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
        <div className="login-box">
          <h1>Login to SwiftRoutes</h1>
          <form className="login-form" onSubmit={handleLogin}>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <button type="submit" disabled={loading} className="login-button">
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
          {userInfo && (
            <p className="welcome-message">Welcome back, {userInfo.name}!</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
