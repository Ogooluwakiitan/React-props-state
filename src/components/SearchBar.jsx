import React from "react";

const SearchBar = () => {
  // const [search, setSearch] = useState("")
  return (
    <div>
      <input
        type="text"
        style={{
          width: "550px",
          height: "50px",
          borderRadius: "30px",
          border: "1px solid gray",
          outline: "none",
          paddingLeft: "20px",
        }}
      />
    </div>
  );
};

export default SearchBar;
