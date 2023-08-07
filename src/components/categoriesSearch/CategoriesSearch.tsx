import React from "react";
import "./CategoriesSearch.css";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { categories } from "../../constants/categories";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#FFF",
            "--TextField-brandBorderHoverColor": "#FFF",
            "--TextField-brandBorderFocusedColor": "#FFF",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export function CategoriesSearch() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Autocomplete
        className="categories-search"
        // disablePortal
        // id="combo-box-demo"
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
    </ThemeProvider>
  );
}
