const API_BASE_URL =
  "https://healthjoybackendmobile20240311152807.azurewebsites.net/api";

const approveProduct = async (productId, productData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/Product/Approve/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );

    if (!response.ok) {
      throw new Error("Ürün onaylama başarısız oldu.");
    }

    const responseData = await response.json();
    console.log("Ürün başarıyla onaylandı:", responseData);
    return responseData;
  } catch (error) {
    console.error("Ürün onaylama hatası:", error.message);
    throw error; // İstek hatası yeniden fırlatılıyor
  }
};

export default approveProduct;
