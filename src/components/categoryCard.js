import React from "react";

export default function CategoryCard(props) {

  return (
    <>
      <div className="categoryCardContainer">
        <p>{props.name}</p>
      </div>
    </>
  );
}
