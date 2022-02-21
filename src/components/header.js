import React from "react";

// importing images
import Logo from "../images/cd_logo_white.png";
import Icon from "../images/cd_icon_white.png";

export default function Header(props) {
  switch (props.type) {
    case "full":
      return (
        <div className="App-header">
          <div className="App-header-inner">
            <div className="Item1 full-center">
              <img src={Icon} className="Icon-main"></img>
            </div>
            <div className="Item2 full-center">Menu</div>
          </div>
          <img src={Logo} alt="Logo" className="Logo-main" />
          The fast and easy FBI lookup.
        </div>
      );
      break;
    case "small":
      return (
        <div className="App-header" style={{minHeight:100 , marginBottom:50}}>
          <div className="App-header-inner">
            <div className="Item1 full-center">
              <img src={Icon} className="Icon-main"></img>
            </div>
            <div className="Item2 full-center">Menu</div>
          </div>
        </div>
      );
      break;
  }
}
