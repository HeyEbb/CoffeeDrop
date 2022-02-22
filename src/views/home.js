import React, { useState, useEffect } from "react";

// importing packages
import axios from "axios";

// importing components
import Header from "../components/header";
import FelonSelector from "../components/felonSelector";

//  This page acts like a container for the landing page.
//  I load different elements into this view via react components.

// default export
export default function Home() {
  // create a basic react hook, first parameter is a getter, the second is a setter function.
  // we set the default to 'null' because at this stage, we shouldn't be storing anything.
  const [getResponse, setResponse] = useState(null);

  // saving API details as variables for easier change at later date
  const URL = "https://api.fbi.gov/@wanted";

  // This useEffect exists to essentially replace componentDidMount.
  //  It loads only during the inital instance of the view, meaning we're
  // not spamming the API call when anything changes
  useEffect(
    () =>
      axios
        .get(URL, {
          params: {
            page: 1, //here we are defining what page to accept from the API
          },
        })
        .then(function (response) {
          // handles success of API request
          // setting the response to the react hook we created
          setResponse(response.data);
          console.log("API fetch successful");
        })
        .catch(function (error) {
          // handle error of API request
          console.log("Something went wrong. Error: ");
          console.log(error);
        })
        .then(function () {
          // whatever we want to do after the request has been called
          // - chained by .then to remain asynronous
          console.log("API fetched");
        }),
    []
  );

  return (
    <>
      {/* calling the header with a 'full' parameter */}
      <Header type="full" />
      {/* calling the felon selector */}
      <FelonSelector />
    </>
  );
}
