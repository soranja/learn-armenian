import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, Theme } from "@mui/material/styles";

import { categoriesType } from "../types/";
import { categories } from "../data/categories";

export const categoriesList: categoriesType[] = [
  {
    name: "01 - MEETING & GREETING",
    category: categories.greetings,
    label: "01 - MEETING & GREETING",
    id: 1,
  },
  {
    name: "02 - NUMBERS 0-9",
    category: categories.digits,
    label: "02 - NUMBERS 0-9",
    id: 2,
  },
  {
    name: "03 - LARGE NUMBERS",
    category: categories.bigNumbers,
    label: "03 - LARGE NUMBERS",
    id: 3,
  },
  {
    name: "04 - USEFUL PHRASES",
    category: categories.usefulPhrases,
    label: "04 - USEFUL PHRASES",
    id: 4,
  },
  { name: "05 - FOOD", category: categories.food, label: "05 - FOOD", id: 5 },
  {
    name: "06 - PLACES",
    category: categories.places,
    label: "06 - PLACES",
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
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
};
