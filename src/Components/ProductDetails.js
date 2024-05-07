import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import approveProduct from "../Api/Product/ApproveProduct";
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
      const productData = {
        ...product, // Tüm mevcut ürün verilerini kullan
        isApproved: true, // Onaylanmış olarak işaretle
      };

      await approveProduct(productId, productData);
      console.log("Ürün başarıyla onaylandı.");

      // İsteği gönderdikten sonra UI'da değişiklik yapabilirsiniz
      setProduct(productData); // Ürünü güncelle, isteği gönderildikten sonra editable alanlar kilitlenebilir
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
              <span key={index}>
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                {index !== product.ingredients.length - 1 ? ", " : ""}
              </span>
            ))}
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
