import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setUpdate(search);
    }
  };
  return (
    <div>
      <input
        onChange={handleSubmit}
        value={search}
        onKeyDown={handleKeyDown}
        type="search"
        style={{
          width: "550px",
          height: "50px",
          borderRadius: "30px",
          border: "1px solid gray",
          outline: "none",
          paddingLeft: "20px",
        }}
      />

      <h2> {update}</h2>
    </div>
  );
};

export default SearchBar;
