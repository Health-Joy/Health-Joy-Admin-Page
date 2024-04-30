import React from "react";
import "./App.css";
import Login from "./Components/Login"; // Dosya adı olarak 'Login' kullanıyoruz
import "./Styles/Login.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
