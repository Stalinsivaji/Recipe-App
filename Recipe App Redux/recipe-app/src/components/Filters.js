import React from "react";

const Filters = ({ setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="">All</option>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="gluten-free">Gluten-Free</option>
    </select>
  );
};

export default Filters;