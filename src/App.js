import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PendingPage from "./Components/PendingProducts";
import ProductDetailPage from "./Components/ProductDetails"; // Yol düzeltildi
import { fetchNotApprovedProducts } from "./Api/Product/GetAllNotApprovedProducts";
import { fetchAllProducts } from "./Api/Product/GetAllProducts";

import LoginPage from "./Components/Login";
import LandingPage from "./Components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProductsPage from "./Components/AllProductsPage";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchNotApprovedProducts();
        setProducts(data.response);
      } catch (error) {
        console.error("Ürünler getirilirken hata oluştu:", error.message);
      }
    };

    fetchProducts(); // Component yüklendiğinde fetchProducts'u çağır
  }, []);

  useEffect(() => {
    const fetchAllProductsData = async () => {
      try {
        const data2 = await fetchAllProducts();
        setAllProducts(data2.response);
      } catch (error) {
        console.error("Tüm ürünler getirilirken hata oluştu:", error.message);
      }
    };

    fetchAllProductsData(); // Component yüklendiğinde fetchAllProductsData'yı çağır
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ana sayfa için ürünlerin props olarak geçildiği yol */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<LandingPage />} />
          <Route
            path="/pending"
            element={<PendingPage products={products} />}
          />
          <Route
            path="/products"
            element={<AllProductsPage products={allProducts} />}
          />

          {/* Ürün detay sayfası için ürünlerin props olarak geçildiği yol */}
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={allProducts} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
