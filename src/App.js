import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PendingPage from "./Components/PendingProducts";
import ProductDetailPage from "./Components/ProductDetails"; // Corrected import path
import { fetchNotApprovedProducts } from "./Api/Product/GetAllNotApprovedProducts";
import LoginPage from "./Components/Login";
import LandingPage from "./Components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchNotApprovedProducts();
        setProducts(data.response);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts(); // Call fetchProducts when component mounts
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for MainPage with products passed as props */}
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/pending"
            element={<PendingPage products={products} />}
          />

          {/* Route for ProductDetailPage with products passed as props */}
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
