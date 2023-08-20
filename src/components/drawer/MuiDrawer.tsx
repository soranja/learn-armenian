import React from "react";
import "./MuiDrawer.css";
import { Drawer, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLinkComponent } from "../navLinkComponent/NavLinkComponent";

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
          <NavLinkComponent isMobScreen={true} />
        </Box>
      </Drawer>
    </div>
  );
};
