import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Main.css";

const AllProductsPage = ({ products }) => {
  return (
    <div className="landing-page">
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.productId}
            className={`product-item ${
              product.isApprovedByAdmin ? "approved" : "pending"
            }`}
          >
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

export default AllProductsPage;
