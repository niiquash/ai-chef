import React from "react";

const GetRecipe = ({ ingredients, getRecipe }) => {
  return (
    <div>
      {ingredients.length > 3 && (
        <section className="main--get-recipe">
          <div>
            <h3 className="main--get-recipe__heading">Ready for a recipe?</h3>
            <p className="main--get-recipe__text">
              Generate a recipe from your list of ingredients
            </p>
          </div>
          <button onClick={getRecipe} className="main--get-recipe__button">
            Get a recipe
          </button>
        </section>
      )}
    </div>
  );
};

export default GetRecipe;
