const BASE_URL =
  "https://healthjoybackendmobile20240311152807.azurewebsites.net/api";

export const addNewIngredient = async (request) => {
  try {
    const requestData = {
      name: request.name,
      description: request.description,
      riskLevel: request.riskLevel,
    };

    const response = await fetch(`${BASE_URL}/Ingredient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Ingredient addition failed");
  }
};
