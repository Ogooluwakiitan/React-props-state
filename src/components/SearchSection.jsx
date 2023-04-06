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
        marginTop: "20px",
      }}
    >
      <main style={{marginBottom: '11rem'}}>
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

        <div style={{ display: "flex", justifyContent: "center", gap: "12px",  marginTop: '30px' }}>
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
