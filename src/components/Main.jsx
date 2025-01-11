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
    </main>
  );
};

export default Main;
