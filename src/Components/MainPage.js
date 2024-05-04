import React, { useState, useEffect } from "react";
import { fetchNotApprovedProducts } from "../Api/Product/GetAllNotApprovedProducts";
import "../Styles/Main.css"; // MainPage.css stil dosyasını import et

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await fetchNotApprovedProducts();
      setProducts(data.response);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Admin Panel</h1>
      <p>This is your dashboard to manage everything!</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.productId} className="product-item">
            <p>Name: {product.name}</p>
            <p>Type: {product.productType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
