const initialState = {
  recipes: [],
  favorites: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return { ...state, recipes: action.payload };
    case "TOGGLE_FAVORITE":
      const isFavorite = state.favorites.find((fav) => fav.uri === action.payload.uri);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((fav) => fav.uri !== action.payload.uri)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default recipeReducer;