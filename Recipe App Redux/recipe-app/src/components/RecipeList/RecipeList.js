import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/actions";
import { FaHeart } from "react-icons/fa";
import "./RecipeList.css";

const RecipeList = ({ recipes, filter, onSelectRecipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);
  console.log("Favorites:", favorites);

  // Ensure filteredRecipes only contains valid recipes
  const filteredRecipes = filter
    ? recipes.filter(({ recipe }) => {
        const { mealType = [], healthLabels = [] } = recipe; // Ensure defaults

        const lowerFilter = filter.toLowerCase();

        // console.log("MealType:", mealType);
        // console.log("HealthLabels:", healthLabels);
        // console.log("Filter:", lowerFilter);

        // Check if mealType or healthLabels contain the filter (case insensitive)
        const isMealMatch = mealType.some(
          (type) => type.toLowerCase().includes(lowerFilter)
        );
        const isHealthMatch = healthLabels.some(
          (label) => label.toLowerCase().includes(lowerFilter)
        );

        return isMealMatch || isHealthMatch;
      })
    : recipes;

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(({ recipe }) => (
          <div key={recipe.uri} className="recipe-card">
            <button
              className={`favorite-btn ${
                favorites.some((fav) => fav.uri === recipe.uri) ? "active" : ""
              }`}
              onClick={() => dispatch(toggleFavorite(recipe))}
            >
              <FaHeart />
            </button>
            <img
              src={recipe.image}
              alt={recipe.label}
              className="recipe-image"
              onClick={() => onSelectRecipe(recipe)}
            />
            <h3 className="recipe-title">{recipe.label}</h3>
          </div>
        ))
      ) : (
        <p className="no-recipes">No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
