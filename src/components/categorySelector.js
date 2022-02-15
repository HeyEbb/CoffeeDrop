import React from "react";

// importing Components
import CategoryCard from "./categoryCard";

export default function CategorySelector() {
  return (
    <>
      <p>What are you looking for?</p>
      <div className="cardContainer">
        <CategoryCard />
      </div>
    </>
  );
}
