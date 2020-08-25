// inside src/components/SearchResults.js

import React from "react";

import "./SearchResults.css";

import Card from "./Card";

const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
  return (
    <div id="results">
      <h3>Here's what we found ({results.length} results):</h3>
      <div className="CardList">
        {results.map((result) => (
          <Card
            key={result.id}
            addCardToDeck={addCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
            {...result}
          />
        ))}
      </div>
    </div>
  );
};

// you can only have one DEFAULT per file, default export (un-named)
// You can have more than one per project
export default SearchResults;

// un-named export (default export in ES6)
// module.exports = SearchResults
// const SearchResults = require('./')

// module.exports = { someFun, otherFun, client }
// const { someFun, otherFun, client } = require('./')
