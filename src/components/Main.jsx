import React from "react";
import ApiRecipe from "./ApiRecipe";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [showRecipe, setShowRecipe] = React.useState(false);

  const getIngredients = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevList) => [...prevList, newIngredient]);
  };

  const toggleShowRecipe = () => {
    setShowRecipe((prev) => !prev);
  };

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient} className="main--ingredients__list-item">
      {ingredient}
    </li>
  ));

  return (
    <main className="main">
      <form action={getIngredients} className="main--form">
        <input
          type="text"
          name="ingredient"
          className="main--form__input"
          placeholder="e.g. oregano"
          required
        />
        <button className="main--form__button">Add ingredient</button>
      </form>
      <section className="main--ingredients">
        <h2 className="main--ingredients__heading">Ingredients on hand:</h2>
        <ul className="main--ingredients__list">{ingredientsList}</ul>
      </section>
      {ingredients.length > 3 && (
        <section className="main--get-recipe">
          <div>
            <h3 className="main--get-recipe__heading">Ready for a recipe?</h3>
            <p className="main--get-recipe__text">
              Generate a recipe from your list of ingredients
            </p>
          </div>
          <button
            onClick={toggleShowRecipe}
            className="main--get-recipe__button"
          >
            Get a recipe
          </button>
        </section>
      )}
      <ApiRecipe showRecipe={showRecipe} />
    </main>
  );
};

export default Main;
