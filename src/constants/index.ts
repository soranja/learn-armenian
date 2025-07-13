import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, Theme } from "@mui/material/styles";

import { CategoriesType } from "../types/";
import { categories } from "../data/categories";

export const categoriesList: CategoriesType[] = [
  {
    name: "MEET & GREET",
    category: categories.greetings,
    label: "MEET & GREET",
    id: 1,
  },
  {
    name: "DIGITS",
    category: categories.digits,
    label: "DIGITS",
    id: 2,
  },
  {
    name: "LARGE NUMBERS",
    category: categories.bigNumbers,
    label: "LARGE NUMBERS",
    id: 3,
  },
  {
    name: "USEFUL PHRASES",
    category: categories.usefulPhrases,
    label: "USEFUL PHRASES",
    id: 4,
  },
  { name: "FOOD", category: categories.food, label: "FOOD", id: 5 },
  {
    name: "PLACES",
    category: categories.places,
    label: "PLACES",
    id: 6,
  },
];

export const muiCustomTheme = (outerTheme: Theme) =>
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
