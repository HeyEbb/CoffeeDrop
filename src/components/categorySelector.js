import React from "react";

// importing Components
import CategoryCard from "./categoryCard";

export default function CategorySelector(props) {
  const APIResponse = props.data;
  console.log(APIResponse);
  return (
    <>
      <p>What are you looking for?</p>
      <div className="cardContainer">
	  {APIResponse &&
          APIResponse.categories.map((category, index) => {
			return (
          
				
			  <CategoryCard name={category.name}  />
            );
          })}
      </div>
    </>
  );
}
