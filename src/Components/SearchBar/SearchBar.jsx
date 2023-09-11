import React from "react";
import "./SearchBar.css";
const SearchBar = ({ onClick, disabled, placeholder, value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={onClick} disabled={disabled}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
