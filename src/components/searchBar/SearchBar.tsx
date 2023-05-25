import React, { useState, useEffect } from "react";

type SearchBarProps = {
  words: string[];
  translations: {
    [key: string]: string;
  };
};

function SearchBar({ words, translations }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredValues, setFilteredValues] = useState<string[]>([""]);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  useEffect(() => {
    setFilteredValues(
      words.filter(
        (word) =>
          word.toLowerCase().slice(0, searchInput.length) === searchInput
      )
    );
  }, [searchInput]);

  return (
    <div>
      <input
        className="SearchFilter"
        placeholder="type the word..."
        onChange={(e) => searchItems(e.target.value)}
      ></input>
      <ul className="Wordlist">
        {filteredValues.map((word, i) => (
          <li key={i}>{`${word} - ${translations[word.toLowerCase()]}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
