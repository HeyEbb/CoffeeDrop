import React from "react";

export default function CategoryCard(props) {

  return (
    <>
      <div className="felonCardContainer">
        <p>{props.name}</p>
      </div>
    </>
  );
}
