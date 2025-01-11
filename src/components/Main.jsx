import React from "react";

const Main = () => {
  return (
    <main className="main">
      <form className="main--form">
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
      <section className="main--get-recipe">
        <div>
          <h3 className="main--get-recipe__heading">Ready for a recipe?</h3>
          <p className="main--get-recipe__text">
            Generate a recipe from your list of ingredients
          </p>
        </div>
        <button className="main--get-recipe__button">Get a recipe</button>
      </section>
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
    </main>
  );
};

export default Main;
