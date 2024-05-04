// src/api/product.js

const BASE_URL =
  "https://healthjoybackendmobile20240311152807.azurewebsites.net/api/Product";

export const fetchNotApprovedProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/NotApproved`);

    if (!response.ok) {
      throw new Error("Failed to fetch not approved products");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch not approved products");
  }
};
