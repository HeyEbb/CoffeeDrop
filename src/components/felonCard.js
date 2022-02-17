import React from "react";

export default function CategoryCard(props) {
  return (
    <>
      <div className="categoryCardContainer">
        <img src={props.felon.images[0].thumb}></img>
        <p>{props.felon.name}</p>
      </div>
    </>
  );
}
