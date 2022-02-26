import React, { useState } from "react";

export default function FelonCardTag(props) {
  const [getSubject, setObject] = useState(props.subject);

  // defining colors
  const SeekingInfo = "blue";
  const ViCAP = "green";
  const HumanTraffic = "pink";
  const Murder = "#36c3fe";
  const CriminalEnterprise = "#8c61ff";
  const IndianCountry = "#3e77e9";
  const Missing = "#644ca4";
  const MostWanted = "#8e3c77";
  const DefaultColor = "purple";
  const CaseOfWeek = "yellow";

  var rendered = [];

  if (getSubject) {
    for (let i = 0; i < getSubject.length; i++) {
      let color;
      switch (getSubject[i]) {
        case "Kidnappings and Missing Persons":
          color = Missing;
          break;

        case "Seeking Information":
          color = SeekingInfo;
          break;

        case "Case Of The Week":
          color = "CaseOfWeek";
          break;

        case "Human Trafficking":
          color = HumanTraffic;
          break;

        case "ViCAP Homicides and Sexual Assaults":
          color = ViCAP;
          break;

        default:
          color = DefaultColor;
          break;
      }

      rendered.push(
        <>
          <div className="subjectHolder" style={{ backgroundColor: color }}>
            <span className="no-mar" style={{ color: "white" }}>
              {getSubject[i]}
            </span>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="tagHolder">{rendered}</div>
      </>
    );
  } else if (!getSubject) {
    return <>No Subjects</>;
  }
}
