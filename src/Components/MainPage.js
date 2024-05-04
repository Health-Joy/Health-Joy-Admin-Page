import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Main.css";

const MainPage = ({ products }) => {
  return (
    <div className="landing-page">
      <h1 style={{ textAlign: "center" }}>
        Welcome to Health & Joy Admin Panel
      </h1>
      <p style={{ textAlign: "center" }}>
        This is your dashboard to manage everything!
      </p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.productId} className="product-item">
            {/* Use Link to navigate to product detail page */}
            <Link to={`/product/${product.productId}`}>
              <p>Name: {product.name}</p>
              <p>Type: {product.productType}</p>
              <p>
                Status: {product.isApprovedByAdmin ? "Approved" : "Pending"}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
