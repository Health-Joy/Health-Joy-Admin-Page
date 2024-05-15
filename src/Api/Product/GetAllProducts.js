// src/api/product.js

const BASE_URL =
  "https://healthjoybackendmobile20240515195922.azurewebsites.net/api/Product";

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/GetAllProducts`);

    if (!response.ok) {
      throw new Error("Failed to fetch not approved products");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch not approved products");
  }
};
