import React from "react";
import ApiRecipe from "./ApiRecipe";
import IngredientsList from "./IngredientsList";
import GetRecipe from "./GetRecipe";
import { getRecipeFromOpenAI } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const getIngredients = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevList) => [...prevList, newIngredient]);
  };

  const getRecipe = async () => {
    const recipe = await getRecipeFromOpenAI(ingredients);
    setRecipe(recipe);
  };

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
      <IngredientsList ingredients={ingredients} />
      <GetRecipe ingredients={ingredients} getRecipe={getRecipe} />
      <ApiRecipe ref={recipeSection} recipe={recipe} />
    </main>
  );
};

export default Main;
