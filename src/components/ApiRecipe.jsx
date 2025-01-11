import React from "react";

const ApiRecipe = ({ showRecipe }) => {
  return (
    <>
      {showRecipe && (
        <section className="main--suggested-recipe">
          <h2 className="main--suggested-recipe__heading">Suggested Recipe:</h2>
          <div className="main--suggested-recipe__card">
            <h3 className="main--suggested-recipe__card-heading">
              Creamy Tuscan Chicken
            </h3>

            <p className="main--suggested-recipe__card-text">
              Creamy Tuscan Chicken is a one-pan dish that's perfect for a
              weeknight dinner. It's made with juicy seared chicken breasts,
              spinach, sun-dried tomatoes, and a rich and creamy sauce.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default ApiRecipe;
