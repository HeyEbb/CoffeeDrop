import React, { useState } from "react";

export default function FelonCardTag(props) {
  const [getSubject, setObject] = useState(props.subject);

  function checkSubjectAvailablity(arg) {
    if (!arg) {
      return <p>No Subject</p>;
    } else {
      return arg;
    }
  }

  if (getSubject == "Seeking Information") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#3d3d3d" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  } else if (getSubject == "Kidnappings and Missing Persons") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#6059f7" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  } else if (getSubject == "ViCAP Homicides and Sexual Assaults") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#6592fe" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  } else if (getSubject == "Human Trafficking") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#36c3fe" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  } else if (getSubject == "Violent Crime - Murders") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#8c61ff" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  } else if (getSubject == "Ten Most Wanted Fugitives") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#3e77e9" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  } else if (getSubject == "Indian CountryKidnappings and Missing") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#644ca4" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  } 
  else if (getSubject == "Criminal Enterprise Investigations") {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#8e3c77" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className="subjectHolder" style={{ backgroundColor: "#3d3d3d" }}>
          {checkSubjectAvailablity(getSubject)}
        </div>
      </>
    );
  }
}
