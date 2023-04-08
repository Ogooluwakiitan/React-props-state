import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
        
  }
  return (
    <div>
     <form onSubmit = {handleSubmit}>
     <input 
      onChange={(e) => setSearch(e.target.value)}
      value={search}
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
     </form>
    </div>
  );
};

export default SearchBar;
