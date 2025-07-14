import { outlinedInputClasses, createTheme, Theme } from "@mui/material";

import { CategoriesType } from "../types/";
import { categories } from "../data/categories";

export const categoriesList: CategoriesType[] = [
  {
    category: categories.greetings,
    label: "MEET & GREET",
  },
  {
    category: categories.digits,
    label: "DIGITS",
  },
  {
    category: categories.bigNumbers,
    label: "LARGE NUMBERS",
  },
  {
    category: categories.usefulPhrases,
    label: "USEFUL PHRASES",
  },
  { category: categories.food, label: "FOOD" },
  {
    category: categories.places,
    label: "PLACES",
  },
];

export const muiCustomTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#9b1534",
            paddingTop: "15px",
            paddingBottom: "15px",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#FFF",
            "--TextField-brandBorderHoverColor": "#FFF",
            "--TextField-brandBorderFocusedColor": "#FFF",
            "& .MuiInputLabel-root": {
              color: "#FFF",
            },
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            "& .MuiInputBase-input": {
              color: "#FFF",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: "#FFF",
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#FFF",
          },
        },
      },
    },
  });

export const sliderSettings = {
  centerMode: true,
  dots: true,
  infinite: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        // slidesToShow: 1,
        dots: false,
      },
    },
  ],
};
