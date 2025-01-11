import React from "react";

const IngredientsList = () => {
  return (
    <section className="main--ingredients">
      <h2 className="main--ingredients__heading">Ingredients on hand:</h2>
      <ul className="main--ingredients__list">
        <li className="main--ingredients__list-item">Chicken breasts</li>
        <li className="main--ingredients__list-item">
          Most of the main spices
        </li>
        <li className="main--ingredients__list-item">Olive oil</li>
        <li className="main--ingredients__list-item">Heavy Cream</li>
        <li className="main--ingredients__list-item">Chicken broth</li>
        <li className="main--ingredients__list-item">Parmesan cheese</li>
        <li className="main--ingredients__list-item">Spinach</li>
      </ul>
    </section>
  );
};

export default IngredientsList;
