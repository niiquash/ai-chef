import React from "react";

const ApiRecipe = ({ recipe }) => {
  return (
    <>
      {recipe && (
        <section className="main--suggested-recipe">
          <h2 className="main--suggested-recipe__heading">Suggested Recipe:</h2>
          <p>{recipe}</p>
        </section>
      )}
    </>
  );
};

export default ApiRecipe;
