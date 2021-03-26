import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png";
import onLineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onLineIcon} alt="Online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="Close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
