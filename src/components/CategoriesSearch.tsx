import {
  TextField,
  Autocomplete,
  useTheme,
  useMediaQuery,
  SxProps,
} from "@mui/material";
import { categoriesList } from "../constants";
import { CategoriesType } from "../types";
import { useActions } from "../hooks";

export default function CategoriesSearch() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { setSelectLabel } = useActions();

  const sxStyles: SxProps = {
    width: isMobile ? 250 : 350,
    marginRight: isMobile ? 4 : 0,
  };

  return (
    <Autocomplete
      sx={sxStyles}
      options={categoriesList}
      noOptionsText="No such a category yet ;)"
      onChange={(_, newValue: CategoriesType | null) => {
        setSelectLabel(newValue?.label || "");
      }}
      renderInput={(params) => <TextField {...params} label="Categories" />}
    />
  );
}
