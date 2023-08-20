import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material/";

export const NavLinkComponent: FC<{ isMobScreen: boolean }> = ({
  isMobScreen,
}) => (
  <Box display={isMobScreen ? "block" : "flex"}>
    <Typography
      variant="h6"
      component="div"
      sx={{
        display: { fontWeight: 400 },
        color: "white",
      }}
    >
      <NavLink className="sidebar-nav-btn" to="/">
        PICTURE DICTIONARY
      </NavLink>
    </Typography>
    <Typography
      variant="h6"
      component="div"
      sx={{
        display: { fontWeight: 400 },
      }}
    >
      <NavLink className="sidebar-nav-btn" to="/about">
        ABOUT
      </NavLink>
    </Typography>
  </Box>
);
