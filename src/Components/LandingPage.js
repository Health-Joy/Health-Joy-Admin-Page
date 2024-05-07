// LandingPage.js

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css"; // Stil dosyasını import ediyoruz

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to our Product Management System</h1>
      <p>Manage your products efficiently with our system.</p>

      <div className="button-container">
        <Link to="/products">
          <button className="landing-button">All Products</button>
        </Link>
        <Link to="/pending">
          <button className="landing-button secondary">Pending Products</button>
        </Link>
        <Link to="/add-ingredient">
          <button className="landing-button secondary">Add Ingredient</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
