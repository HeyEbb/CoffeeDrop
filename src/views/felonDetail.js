// importing packages
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// importing components

import Header from "../components/header";

export default function FelonDetail({ match }) {
  const [getResponse, setResponse] = useState(null);
  const URL = "https://api.fbi.gov/@wanted-person/";

  const felonID = match.params.id;
  useEffect(() => {
    fetchAPI();
    console.log(felonID);
  }, []);

  function fetchAPI() {
    console.log("fetching 🐶");
    axios
      .get(URL + felonID)
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
      });
  }

  function removeTags(t) {
    if (t != null) {
      return t.replace(/(<([^>]+)>)/gi, " ");
    } else {
      console.log("nothing to replace");
    }
  }

  var toTitleCase = function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };

  function checkNull(i) {
    if (i) {
      return i;
    } else {
      return "No data available";
    }
  }

  if (!getResponse) {
    return <>😭</>;
  } else {
    return (
      <>
        <Header type="small" />
        <div className="detailCardContainer">
          <div className="detailThumbContainer">
            <img
              className="detailThumb"
              src={getResponse.images[0].large}
            ></img>
            <div className="detailThumbContainerInner">
              <h5>Aliases: {checkNull(getResponse.aliases)}</h5>
              <h5>Sex: {checkNull(getResponse.sex)}</h5>
              <h5>Race: {checkNull(getResponse.race_raw)}</h5>
              <h5>Hair:{checkNull(getResponse.hair_raw)}</h5>
              <h5>Eye Color:{checkNull(getResponse.eyes_raw)}</h5>
              <h5>DOB:{checkNull(getResponse.dates_of_birth_used)}</h5>
              <h5>
                Place of Birth:{checkNull(getResponse.place_of_birth)}
              </h5>
              <h5>Max Height:{checkNull(getResponse.aliases)}</h5>
              <h5>Age (Minimum):{checkNull(getResponse.height_max)}</h5>
              <button className="detailInfoButton">I have information</button>
            </div>
          </div>
          <div className="detailIntroContainer">
            <h1>{toTitleCase(getResponse.title)}</h1>
            <p>{removeTags(getResponse.description)}</p>
            <p>{removeTags(getResponse.remarks)}</p>
            <p>{removeTags(getResponse.details)}</p>
          </div>
        </div>
      </>
    );
  }
}
