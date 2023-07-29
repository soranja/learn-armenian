import React from "react";
import "./CategoriesSearch.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export function CategoriesSearch() {
  return (
    <Autocomplete
      className="categories"
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{ width: 300 }}
      noOptionsText={"No such a category yet ;)"}
      renderInput={(params) => (
        <TextField {...params} label="Vocabulary Categories" />
      )}
    />
  );
}

const categories = [
  { label: "01 - Greetings", id: 1 },
  { label: "02 - Numbers 0-9", id: 2 },
  { label: "03 - Large Numbers", id: 3 },
  { label: "04 - Useful Phrases", id: 4 },
  { label: "05 - Food", id: 5 },
  { label: "06 - Places", id: 6 },
];
