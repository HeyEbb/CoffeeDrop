import React, { useState, useEffect } from "react";

// importing packages
import axios from "axios";

// importing Components
import FelonCard from "./felonCard";
import Paginator from "./paginator";

export default function FelonSelector() {
  const [getResponse, setResponse] = useState(null);
  // saving API details as variables for easier change at later date
  const token = "4BFJXRSKHS5NU3WBHB53";
  const URL = "https://api.fbi.gov/wanted/v1/list";

  useEffect(
    () =>
      axios
        .get(URL, {
          params: {
            page: 1, //the token is a variable which holds the token
          },
        })
        .then(function (response) {
          // handle success
          setResponse(response.data);
          // console.log(getResponse)
          console.log("API fetch successful");
        })
        .catch(function (error) {
          // handle error
          console.log("Something went wrong. Error: ");
          console.log(error);
        })
        .then(function () {
          console.log("API fetched");
          console.log("response is...");
        }),
    []
  );
  if (!getResponse) {
    return (
      <>
        <div>Nothing here 😢</div>
      </>
    );
  } else {
    return (
      <>
        <p>Who are you looking for?</p>
        <div className="cardContainer">
          {getResponse.items.map((felon, index) => {
            // console.log(getResponse);
            return <FelonCard felon={felon} />;
          })}
        </div>
        <div style={{ color: "black" }}>
          <Paginator numberOfPages={Math.ceil(getResponse.total / 20)} />
        </div>
      </>
    );
  }
}
