// src/components/Login.js

import React, { useState } from "react";
import { loginUser } from "../Api/Auth/Auth";
import eyeIcon from "../Icons/showpassword.png"; // Import your eye icon SVG here

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);

      if (response.success) {
        console.log("Login successful!", response);
        // Perform actions upon successful login
      } else {
        console.error("Login failed!", response.message);
        window.alert("Username or password is incorrect.");
      }
    } catch (error) {
      console.error("Login failed!", error.message);
      window.alert("An error occurred while logging in.");
    }
  };

  return (
    <div>
      <h1>ADMIN PANEL</h1>
      <h4>Health & Joy</h4>

      <form onSubmit={handleLogin}>
        <label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <img
              src={eyeIcon}
              alt="Toggle password visibility"
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
