import React from "react";
import "./CategoriesSearch.css";
import { TextField, Autocomplete } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

import { categories } from "../../constants/categories";
import { customTheme } from "../../constants/muiCustomTheme";
import { categoriesType } from "../../types/categoriesType";
import { useActions } from "../../hooks/actions";

export function CategoriesSearch() {
  const outerTheme = useTheme();

  const { setSelectLabel } = useActions();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Autocomplete
        className="categories-search"
        options={categories}
        noOptionsText={"No such a category yet ;)"}
        onChange={(event: any, newValue: categoriesType | null) => {
          setSelectLabel(newValue?.label || "");
        }}
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
