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
      const data = await loginUser(email, password); // loginUser fonksiyonunu çağır
      console.log("Login successful!", data); // API'den dönen veriyi konsola yazdır
      // Başarılı giriş durumunda ekran üzerinde işlem yapabilirsiniz
    } catch (error) {
      console.error("Login failed!", error.message);
      setLoginError("Kullanıcı adı veya şifre hatalı."); // Hata durumunda kullanıcıya bilgi ver
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Kullanıcı Adı:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Şifre:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Giriş Yap</button>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </form>
    </div>
  );
};

export default Login;
