import React, { useState, useEffect } from "react";

// importing packages
import axios from "axios";

// importing components
import Header from "../components/header";
import FelonSelector from "../components/felonSelector";

export default function Home() {
  const [getResponse, setResponse] = useState(null);

  // saving API details as variables for easier change at later date
  const token = "4BFJXRSKHS5NU3WBHB53";
  const URL = "https://api.fbi.gov/wanted/v1/list";

  useEffect(
    () =>
      axios
        .get(URL, {
          params: {
            'page': 1, //the token is a variable which holds the token
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
		  // console.log(getResponse)
        }),
    []
  );

  return (
    <>
      <Header />
      <FelonSelector data={getResponse} />
    </>
  );
}
