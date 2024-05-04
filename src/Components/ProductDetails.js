import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { approveProduct } from "../Api/Product/ProductActions";
import "../Styles/ProductDetail.css";

const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.productId === parseInt(productId)
    );

    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productId, products]);

  const handleApprove = async () => {
    try {
      await approveProduct(productId); // API call to approve the product
      // Handle success (e.g., show success message, update UI)
    } catch (error) {
      console.error("Error approving product:", error.message);
      // Handle error (e.g., show error message)
    }
  };

  const handleInputChange = (event, field) => {
    setProduct({
      ...product,
      [field]: event.target.value,
    });
  };

  const renderEditableField = (label, field) => (
    <p key={label}>
      <strong>{label}:</strong>{" "}
      <input
        type="text"
        value={product[field]}
        onChange={(e) => handleInputChange(e, field)}
      />
    </p>
  );

  const renderIngredients = () => (
    <p key="Ingredients">
      <strong>Ingredients:</strong>{" "}
      {product.ingredients.map((ingredient, index) => (
        <span key={index}>
          <input
            type="text"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(e, index)}
          />
          {index !== product.ingredients.length - 1 && ", "}
        </span>
      ))}
    </p>
  );

  const handleIngredientChange = (event, index) => {
    const updatedIngredients = [...product.ingredients];
    updatedIngredients[index].name = event.target.value;
    setProduct({
      ...product,
      ingredients: updatedIngredients,
    });
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <h2>Product Details</h2>
        {product ? (
          <div>
            {renderEditableField("Name", "name")}
            <p>
              <strong>Type:</strong>{" "}
              <input
                type="text"
                value={product.productType}
                onChange={(e) => handleInputChange(e, "productType")}
              />
            </p>
            {renderEditableField("Description", "description")}
            {renderEditableField("Total Risk Value", "totalRiskValue")}
            {renderEditableField("Barcode No", "barcodeNo")}
            {renderIngredients()}
            <div className="buttons">
              <button onClick={handleApprove}>Approve</button>
            </div>
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;