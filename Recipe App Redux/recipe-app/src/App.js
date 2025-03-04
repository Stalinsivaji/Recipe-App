import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, toggleFavorite } from "./redux/actions";
import RecipeList from "./components/RecipeList/RecipeList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar/Navbar";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";


const App = () => {
  const dispatch = useDispatch();
  const { recipes, favorites } = useSelector((state) => state.recipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false); // Track if favorites should be displayed

  useEffect(() => {
    dispatch(fetchRecipes(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <div>
      <Navbar 
        onFavoritesClick={() => setShowFavorites(!showFavorites)} // Toggle favorites view
      />
      <div className="app-container">
        <h1>Discover Delicious 😊🍽️</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters setFilter={setFilter} />
        
        {selectedRecipe ? (
          <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
        ) : (
          <RecipeList 
            recipes={showFavorites ? favorites : recipes} // Show favorites if active
            filter={filter} 
            onFavorite={(recipe) => dispatch(toggleFavorite(recipe))}
            onSelectRecipe={setSelectedRecipe} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
