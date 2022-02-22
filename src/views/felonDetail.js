// importing packages
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// importing packages
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

  function checkDanger(i) {
    if (i) {
      return (
        <div className="detailDangerous">
          <span className="blink">{checkNull(getResponse.warning_message)}</span>
        </div>
      );
    } else {
      return <div className="detailDangerousLow">No Danger Rating</div>;
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
              <button className="detailInfoButton">I have information</button>
            </div>
          </div>
          <div className="detailIntroContainer">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1 style={{ width: "100%" }}>
                {toTitleCase(getResponse.title)}
              </h1>
            
              {checkDanger(getResponse.warning_message)}
              {console.log(getResponse.warning_message)}
          
            </div>
            <p>{removeTags(getResponse.description)}</p>
            <p>{removeTags(getResponse.remarks)}</p>
            <p>{removeTags(getResponse.details)}</p>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ width: "50%" }}>Date(s) of Birth Used</td>
                  <td style={{ width: "50%" }}>
                    {checkNull(getResponse.dates_of_birth_used)}
                  </td>
                </tr>
                <tr>
                  <td>Place of Birth</td>
                  <td>{checkNull(getResponse.place_of_birth)}</td>
                </tr>
                <tr>
                  <td>Hair</td>
                  <td>{checkNull(getResponse.hair_raw)}</td>
                </tr>
                <tr>
                  <td>Eyes</td>
                  <td>{checkNull(getResponse.eyes)}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{checkNull(getResponse.height_max + " Inches")}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{checkNull(getResponse.weight_max + " Pounds")}</td>
                </tr>
                <tr>
                  <td>Sex</td>
                  <td>{checkNull(getResponse.sex)}</td>
                </tr>
                <tr>
                  <td>Race</td>
                  <td>{checkNull(getResponse.race)}</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>{checkNull(getResponse.nationality)}</td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>{checkNull(getResponse.languages)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
