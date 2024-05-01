// src/components/Login.js

import React, { useState } from "react";
import { loginUser } from "../Api/Auth/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log("Login successful!", data);
      // Perform actions upon successful login
    } catch (error) {
      console.error("Login failed!", error.message);
      setLoginError("Kullanıcı adı veya şifre hatalı.");
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </form>
    </div>
  );
};

export default Login;
