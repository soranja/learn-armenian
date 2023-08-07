import React from "react";
import "./CategoriesSearch.css";
import { TextField, Autocomplete } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

import { categories } from "../../constants/categories";
import { customTheme } from "../../constants/muiCustomTheme";

export function CategoriesSearch() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Autocomplete
        className="categories-search"
        options={categories}
        noOptionsText={"No such a category yet ;)"}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Vocabulary Categories"
            variant="outlined"
            sx={{
              "& .Mui-focused, .MuiInputLabel-root": {
                color: "#fff",
                borderColor: "#fff",
              },
            }}
          />
        )}
      />
    </ThemeProvider>
  );
}
