import React, { useState } from "react";
import { loginUser } from "../Api/Auth/Auth";
import { Navigate } from "react-router-dom";
import eyeIcon from "../Icons/showpassword.png";
import "../Styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);

      if (response.success) {
        console.log("Login successful!", response);
        setIsLoggedIn(true);
      } else {
        console.error("Login failed!", response.message);
        setLoginError("Username or password is incorrect.");
      }
    } catch (error) {
      console.error("Login failed!", error.message);
      setLoginError("An error occurred while logging in.");
    }
  };

  // Redirect to AdminPage if isLoggedIn is true
  if (isLoggedIn) {
    return <Navigate to="/main" />;
  }

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
                top: "30%",
                marginLeft: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </label>
        <br />
        <button type="submit">Login</button>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </form>
    </div>
  );
};

export default Login;
