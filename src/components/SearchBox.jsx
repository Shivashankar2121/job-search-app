import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Search jobs (ex: React, Developer)…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <button style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
