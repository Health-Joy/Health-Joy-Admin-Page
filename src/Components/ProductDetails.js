import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import approveProduct from "../Api/Product/ApproveProduct";
import "../Styles/ProductDetail.css";

const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [newIngredient, setNewIngredient] = useState(""); // Yeni içerik için state

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
      const productData = {
        ...product,
        isApproved: true,
      };

      await approveProduct(productId, productData);
      console.log("Ürün başarıyla onaylandı.");
      navigate(-1);
      setProduct(productData);
    } catch (error) {
      console.error("Ürün onaylama hatası:", error.message);
    }
  };

  const handleInputChange = (event, field) => {
    setProduct({
      ...product,
      [field]: event.target.value,
    });
  };

  const handleIngredientChange = (event, index) => {
    const updatedIngredients = [...product.ingredients];
    updatedIngredients[index].name = event.target.value;
    setProduct({
      ...product,
      ingredients: updatedIngredients,
    });
  };

  const addNewIngredient = () => {
    if (newIngredient.trim() === "") {
      return;
    }
    const updatedIngredients = [
      ...product.ingredients,
      { name: newIngredient },
    ];
    setProduct({ ...product, ingredients: updatedIngredients });
    setNewIngredient(""); // Yeni içeriği sıfırla
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...product.ingredients];
    updatedIngredients.splice(index, 1);
    setProduct({ ...product, ingredients: updatedIngredients });
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <h2>Ürün Detayı</h2>
        {product ? (
          <div>
            <p>
              <strong>Ürün Adı:</strong>{" "}
              <input
                type="text"
                value={product.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
            </p>
            <p>
              <strong>Açıklama:</strong>{" "}
              <input
                type="text"
                value={product.description}
                onChange={(e) => handleInputChange(e, "description")}
              />
            </p>
            <p>
              <strong>Ürün Tipi:</strong>{" "}
              <input
                type="text"
                value={product.productType}
                onChange={(e) => handleInputChange(e, "productType")}
              />
            </p>
            <p>
              <strong>Barkod No:</strong>{" "}
              <input
                type="text"
                value={product.barcodeNo}
                onChange={(e) => handleInputChange(e, "barcodeNo")}
              />
            </p>
            <strong>İçerikler:</strong>{" "}
            {product.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <button
                  className="remove-button"
                  onClick={() => removeIngredient(index)}
                >
                  Sil
                </button>
              </div>
            ))}
            <div>
              <input
                type="text"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Yeni İçerik Ekle"
              />
              <button className="add-button" onClick={addNewIngredient}>
                Ekle
              </button>
            </div>
            <div className="buttons">
              <button onClick={handleApprove}>Onayla</button>
            </div>
          </div>
        ) : (
          <div className="loading">Ürün yükleniyor...</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
