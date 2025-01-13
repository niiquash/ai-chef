import React from "react";

const IngredientsList = ({ ingredients }) => {
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient} className="main--ingredients__list-item">
      {ingredient}
    </li>
  ));

  return (
    <section className="main--ingredients">
      <h2 className="main--ingredients__heading">Ingredients on hand:</h2>
      {ingredients.length === 0 && (
        <p className="main--ingredients__note">
          Please add at least 3 ingredients to get recipe.
        </p>
      )}
      <ul className="main--ingredients__list">{ingredientsList}</ul>
    </section>
  );
};

export default IngredientsList;
