import React from "react";
import Search from "../assests/search.svg";
import Audio from "../assests/microphone.svg";
import Video from "../assests/camera.svg";

const SearchBar = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid gray",
        width: "600px",
      }}
    >
      <img
        src={Search}
        alt="searchIcon"
        style={{
          position: "absolute",
          top: "6px",
          left: "8px",
          marginRight: "20px",
          paddingLeft: "8px",
        }}
      />
      <input
        type="text"
        name="search"
        id=""
        style={{ border: "none", outline: "none", height: "20px" }}
      />

      <div style={{ position: "absolute", top: "8px", right: "8px" }}>
        <img src={Audio} alt="audio" />
        <img src={Video} alt="" style={{ width: "25px" }} />
      </div>
    </div>
  );
};

export default SearchBar;
