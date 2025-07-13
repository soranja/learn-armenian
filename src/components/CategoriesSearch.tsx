import "../styles/CategoriesSearch.css";
import { TextField, Autocomplete } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

import { categoriesList } from "../constants";
import { muiCustomTheme } from "../constants";
import { categoriesType } from "../types";
import { useActions } from "../hooks";

export default function CategoriesSearch() {
  const outerTheme = useTheme();

  const { setSelectLabel } = useActions();

  return (
    <ThemeProvider theme={muiCustomTheme(outerTheme)}>
      <Autocomplete
        className="categories-search"
        options={categoriesList}
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
              "& .Mui-focused, .MuiInputLabel-root, .MuiAutocomplete-input": {
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
