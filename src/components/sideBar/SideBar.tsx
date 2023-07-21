import React from "react";
import "./SideBar.css";

import { NavLink } from "react-router-dom";
// Material-UI imports
import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, InputBase, Toolbar, AppBar } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

import { MuiDrawer } from "../drawer/MuiDrawer";

function SideBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <MuiDrawer />
            <Box className="page-buttons" component="div" sx={{ flexGrow: 1 }}>
              <Typography
                className="to-page-button"
                variant="h6"
                component="div"
                sx={{
                  display: { fontWeight: 400 },
                }}
              >
                <NavLink to="/">PICTURE DICTIONARY</NavLink>
              </Typography>
              <Typography
                className="to-page-button"
                variant="h6"
                component="div"
                sx={{
                  display: { fontWeight: 400 },
                }}
              >
                <NavLink className="navLink" to="/about">
                  ABOUT
                </NavLink>
              </Typography>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default SideBar;
