import React, { useEffect, useState } from "react";

// importing packages
import { useParams } from "react-router-dom";
import axios from "axios";

// importing components
import Header from "../components/header";

// defining the default export
export default function FelonDetail({ match }) {
  // the match keywork reads URL details that have been passed by the router.
  // This means we can use the ID of the URL to send off a new more bespoke
  // request to the API and get more data on a specific individual.

  // creating a new hook that we're going to use to store and manipulate
  // what matcg gives us.
  const [getResponse, setResponse] = useState(null);

  // I like saving the URL as a variable just so I can easily change it
  // later if needs be, also allows it to be hooked into functions.
  const URL = "https://api.fbi.gov/@wanted-person/";
  // likewise with the data I'm pulling out of the match parameter.
  const felonID = match.params.id;

  // another useEffect, designed to run on init.
  useEffect(() => {
    //as opposed to home.js, I have created a the fetch as a function.
    // this was it looks much cleaner and easily read by other developers.
    fetchAPI();
  }, []);

  function fetchAPI() {
    //simply hilarous console.log()
    console.log("fetching 🐶");
    axios
      .get(URL + felonID)
      .then(function (response) {
        // handles success of API request
        setResponse(response.data);
      })
      .catch(function (error) {
        // handles error of API request
        console.log("Something went wrong. Error: ");
        console.log(error);
      })
      .then(function () {
        // whatever we want to do after the request has been called
        // - chained by .then to remain asynronous
        console.log("API fetched");
      });
  }

  // a nice function that accepts text, and checks if it has any
  // illegal characters.
  function removeTags(t) {
    if (t != null) {
      // replace is a vanilla function that accepts too parameters
      // first is characters to replace, and the second is what it
      // should be replaced with.
      // we append the function to our passed in parameter, in this
      // case, it would be 't'.
      return t.replace(/(<([^>]+)>)/gi, " ");
    } else {
      console.log("nothing to replace");
      // if is isnt broke, don't fix it.
    }
  }

  // another utility function that breaks down each word in a sentance
  // and then changed the first letter to a captial letter.
  // this is used because the API we're using isn't very good at it's
  // text styles.
  var toTitleCase = function (str) {
    // passing in parameter
    str = str.toLowerCase().split(" "); //convert to lower case and then uses 'split' to divide them into an array.
    for (var i = 0; i < str.length; i++) {
      // for loop using each word as an iterator
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); // taking the first letter of each word and making it uppercase.
    }
    return str.join(" "); // join the sentence back together
  };

  // a simply function that just makes sure certain values aren't null.
  function checkNull(i) {
    if (i) {
      return i; // if they aren't null, great! Let's return the inital value.
    } else {
      return "No data available"; // if they are null, let's return something more user friendly.
    }
  }

  // similar to the previous function, this checks two values and returns two different
  // UI's based on what's more relevant.
  function checkDanger(i) { // accepting parameter
    if (i) { // if value is not null...
      return ( //render this instead...
        <div className="detailDangerous">
          <span className="blink">
            {/* calling API's warning message for this individual*/}
            {checkNull(getResponse.warning_message)} 
          </span>
        </div>
      );
    } else { 
      // ... or this for anything else
      return <div className="detailDangerousLow">No Danger Rating</div>;
    }
  }

  // this statement below filters out the instances that have no yet loaded the data fully
  // since react wants to load a return asap, the API hasn't had time to fufil it's own request.
  // this crashes the app, but this little if statement ensures there is data ready to be loaded.
  if (!getResponse) {
    return <>😭</>;
    // TODO: Create loading iterface for felonDetail.js
  } else {
    return (
      <>
      {/* calling for a small header */}
        <Header type="small" /> 
        <div className="detailCardContainer">
          <div className="detailThumbContainer">
            <img
              className="detailThumb"
              // gets the first of the images from the array.
              src={getResponse.images[0].large}
            ></img>
            <div className="detailThumbContainerInner">
              <button className="detailInfoButton">I have information</button>
              {/* TODO Restyle this button */}
            </div>
          </div>
          <div className="detailIntroContainer">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1 style={{ width: "100%" }}>
                {/* calling our previosuly declared functions, you'll see that a lot more below */}
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
