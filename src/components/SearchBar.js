// inside src/components/SearchBar.js
import React, { useState } from "react";
import { fetchCards } from "../api";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const cardNameChange = (event) => {
    setName(event.target.value);
  };

  const cardTextChange = (event) => {
    setText(event.target.value);
  };

  async function searchCardResult(event) {
    event.preventDefault();
    const cards = await fetchCards({
      name,
      text,
    });
    setResults(cards);
  }

  return (
    <div id="search">
      <div id="logo"></div>

      <form onSubmit={searchCardResult}>
        <input
          type="text"
          placeholder="card name"
          value={name}
          onChange={cardNameChange}
        />
        <input
          type="text"
          placeholder="card text"
          value={text}
          onChange={cardTextChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
