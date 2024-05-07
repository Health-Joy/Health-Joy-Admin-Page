import React, { useState } from "react";
import { addNewIngredient } from "../Api/Ingredient/IngredientService";

const RiskForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    riskLevel: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddRisk = async () => {
    try {
      // addNewIngredient fonksiyonunu kullanarak API'ye veri gönderme
      const success = await addNewIngredient(formData);

      if (success) {
        console.log("Risk added successfully");
      }

      setFormData({
        name: "",
        description: "",
        riskLevel: 0,
      });
    } catch (error) {
      setFormData({
        name: "",
        description: "",
        riskLevel: 0,
      });
      alert("Ingredient added successfully");
    }
  };

  return (
    <div>
      <h2>Add New Ingredient</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Risk Level:</label>
          <input
            type="number"
            name="riskLevel"
            value={formData.riskLevel}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddRisk}>
          Add
        </button>
      </form>
    </div>
  );
};

export default RiskForm;
