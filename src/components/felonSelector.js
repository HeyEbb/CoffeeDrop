import React from "react";

// importing Components
import CategoryCard from "./felonCard";

export default function felonSelector(props) {
  const APIResponse = props.data;
  console.log(APIResponse);
  return (
    <>
      <p>What are you looking for?</p>
      <div className="cardContainer">
        {APIResponse &&
          APIResponse.items.map((felon, index) => {
            console.log(APIResponse)
            return <CategoryCard name={felon.uid} />;
          })}
      </div>
    </>
  );
}
