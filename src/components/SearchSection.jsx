import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Button from "./Button";
import Language from "./Language";

const SearchSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <main>
        <Logo />
        <SearchBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Button title={"Google Search"} />
          <Button title={"I'm feeling Lucky"} />
        </div>

        <div style={{ display: "flex", gap: "12px", height: '430px' }}>
          <div>Google offered in:</div>
          <Language title={"Hausa"} />
          <Language title={"Igbo"} />
          <Language title={"Ede Yoruba"} />
          <Language title={"Nigerian Pidgin"} />
        </div>
      </main>
    </div>
  );
};

export default SearchSection;
