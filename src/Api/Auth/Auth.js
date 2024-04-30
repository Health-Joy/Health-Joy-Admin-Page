// src/api/auth.js

const BASE_URL =
  "https://healthjoybackendmobile20240311152807.azurewebsites.net/api/Admin";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/Login?email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Login request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Login failed");
  }
};
