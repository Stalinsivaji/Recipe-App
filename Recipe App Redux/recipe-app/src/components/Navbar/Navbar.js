import React, { useState } from "react";
import { FaHome, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import RecipeList from "../RecipeList/RecipeList"; // Import RecipeList to display favorites
import "./Navbar.css";

const Navbar = () => {
  const favorites = useSelector((state) => state.recipes.favorites);
  const [showFavorites, setShowFavorites] = useState(false);

  // console.log("Favorites List:", favorites); 

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <FaHome className="home-icon" onClick={() => setShowFavorites(false)} />
          <h2>TastyBites</h2>
        </div>

        {/* Search Bar */}
        {/* <input
          type="text"
          className="search-bar"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}

        {/* Favorites */}
        <div className="navbar-right">
          <FaHeart className="favorite-icon" onClick={() => setShowFavorites(!showFavorites)} />
          <span className="favorite-count">{favorites.length}</span>
        </div>
      </nav>

      {/* Show Favorite Recipes when clicking the heart icon */}
      {showFavorites && (
        <div className="favorites-container">
          <h2>Your Favorite Recipes 😊</h2>
          {favorites.length > 0 ? (
            <RecipeList
              recipes={favorites.map((fav) => ({ recipe: fav }))} 
              filter=""
              onSelectRecipe={() => {}}
            />
          ) : (
            <p>No favorites added yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
