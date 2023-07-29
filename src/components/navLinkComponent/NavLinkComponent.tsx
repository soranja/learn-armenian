import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material/";

export const NavLinkComponent: FC<{ className: string }> = ({ className }) => (
  <Box display="flex">
    <Typography
      variant="h6"
      component="div"
      sx={{
        display: { fontWeight: 400 },
        color: "white",
      }}
    >
      <NavLink className={className} to="/">
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
      <NavLink className={className} to="/about">
        ABOUT
      </NavLink>
    </Typography>
  </Box>
);
