import React from "react";
import "./CategoriesSearch.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { categories } from "../../constants/categories";

export function CategoriesSearch() {
  return (
    <Autocomplete
      className="categories-search"
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{ width: 350 }}
      noOptionsText={"No such a category yet ;)"}
      renderInput={(params) => (
        <TextField
          sx={{ border: "1px solid #fff", borderRadius: "4px" }}
          {...params}
          label="Vocabulary Categories"
        />
      )}
    />
  );
}
