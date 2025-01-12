import React from "react";
import ReactMarkdown from "react-markdown";

const ApiRecipe = ({ recipe }) => {
  return (
    <>
      {recipe && (
        <section className="main--suggested-recipe">
          <h2 className="main--suggested-recipe__heading">Suggested Recipe:</h2>
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
      )}
    </>
  );
};

export default ApiRecipe;
