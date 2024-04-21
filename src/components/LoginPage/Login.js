import React, { useState } from "react";
import "./Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      console.log("Registration successful!");
      setIsRegistering(false);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      console.log("Login successful!");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <div className="login-page">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-actions">
            <button type="submit" className="login-button">
              {isRegistering ? "Register" : "Login"}
            </button>
            {!isRegistering ? (
              <button
                className="forgot-password"
                onClick={() => setIsRegistering(true)}
              >
                Register
              </button>
            ) : (
              <button
                className="forgot-password"
                onClick={() => setIsRegistering(false)}
              >
                Back to Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
