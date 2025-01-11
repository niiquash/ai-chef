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
          <li className="main--ingredients__list-item">main spices</li>
          <li className="main--ingredients__list-item">rice</li>
          <li className="main--ingredients__list-item">chicken</li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
