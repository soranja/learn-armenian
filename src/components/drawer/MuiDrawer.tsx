import React from "react";
import "./MuiDrawer.css";
import { NavLink } from "react-router-dom";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="drawer">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ marginRight: "10px" }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box className="drawer-menu" component="div" sx={{ flexGrow: 1 }}>
          <Typography className="to-page-button" variant="h6" component="div">
            <NavLink to="/">PICTURE DICTIONARY</NavLink>
          </Typography>
          <Typography className="to-page-button" variant="h6" component="div">
            <NavLink className="navLink" to="/about">
              ABOUT
            </NavLink>
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};
