import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <div className="recipe-details">
      <button onClick={onClose}>Back</button>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      {/* <p>Preparation Time: {recipe.totalTime} mins</p> */}
      <p>Servings: {recipe.yield}</p>
      <h3>Ingredients:</h3>
      <ol>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
      <h3>Instructions:</h3>
      <p>Refer to the full instructions <a href={recipe.url} target="_blank" rel="noopener noreferrer">here</a>.</p>
    </div>
  );
};

export default RecipeDetails;