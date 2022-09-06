import * as React from "react";
import "./index.css";
import marker from "./pin3.svg";

function Pin({ size = 20 }) {
  return (
    // <button className="pin">
    //   <img src={marker} alt="" />
    // </button>
    <button
      className="marker-btn"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {/* <img src="/location.png" alt="Skate Park Icon" /> */}
      <img src={marker} alt="Skate Park Icon" />
    </button>
  );
}

export default React.memo(Pin);
