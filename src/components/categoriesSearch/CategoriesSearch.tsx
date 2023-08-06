import React from "react";
import "./CategoriesSearch.css";
import { InputLabel, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { categories } from "../../constants/categories";

export function CategoriesSearch() {
  return (
    <Autocomplete
      className="categories-search"
      disablePortal
      id="combo-box-demo"
      options={categories}
      noOptionsText={"No such a category yet ;)"}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Vocabulary Categories"
          variant="outlined"
          sx={{
            "& .Mui-focused ": {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
              borderColor: "#fff",
            },
          }}
          // InputLabelProps={{ shrink: true }}
          // focused
        />
      )}
    />
  );
}
