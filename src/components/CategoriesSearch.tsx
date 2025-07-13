import {
  TextField,
  Autocomplete,
  ThemeProvider,
  useTheme,
} from "@mui/material";

import { categoriesList, muiCustomTheme } from "../constants";
import { CategoriesType } from "../types";
import { useActions } from "../hooks";
import "../styles/CategoriesSearch.css";

export default function CategoriesSearch() {
  const outerTheme = useTheme();
  const { setSelectLabel } = useActions();

  return (
    <ThemeProvider theme={muiCustomTheme(outerTheme)}>
      <Autocomplete
        className="categories-search"
        options={categoriesList}
        noOptionsText={"No such a category yet ;)"}
        onChange={(_, newValue: CategoriesType | null) => {
          setSelectLabel(newValue?.label || "");
        }}
        renderInput={(params) => (
          <TextField {...params} label="Categories" variant="outlined" />
        )}
      />
    </ThemeProvider>
  );
}
