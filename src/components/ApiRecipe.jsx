import React from "react";
import ReactMarkdown from "react-markdown";

const ApiRecipe = ({ recipe, ref }) => {
  return (
    <>
      {recipe && (
        <section ref={ref} className="main--suggested-recipe">
          <h2 className="main--suggested-recipe__heading">Suggested Recipe:</h2>
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
      )}
    </>
  );
};

export default ApiRecipe;
