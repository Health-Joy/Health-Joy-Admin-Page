// ProductActions.js

const BASE_URL =
  "https://healthjoybackendmobile20240515195922.azurewebsites.net/api/Product";

export const approveProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/Approve/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to approve product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to approve product");
  }
};

export default { approveProduct };
