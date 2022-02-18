import React, { useState } from "react";

// importing components
import FelonCardTag from "./felonCardTag";

export default function CategoryCard(props) {
  const [felonData, setFelonData] = useState(props.felon);
  // utility function to make titles title case
  var toTitleCase = function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };

  function checkSubjectAvailablity(arg) {
    if (!arg) {
      return <p>No Subject</p>;
    } else {
      return arg;
    }
  }

  // document.getElementsByClassName('subjectHolder').style.backgroundColor = "lightblue";

  return (
    <>
      <div className="categoryCardContainer">
        <div key={felonData.uid}>

          <FelonCardTag subject={felonData.subjects}/>
          {/* <div className="subjectHolder">
            {checkSubjectAvailablity(felonData.subjects)}
          </div> */}
          <img className="cardImage" src={felonData.images[0].thumb}></img>
          <h3 className="cardName">{toTitleCase(felonData.title)}</h3>
          <p>{felonData.description}</p>
        </div>
      </div>
    </>
  );
}
