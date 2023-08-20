import React from "react";
import "./SideBar.css";
import { useLocation } from "react-router-dom";

// Material-UI imports
import { Box, Toolbar, AppBar } from "@mui/material/";

// components
import { MuiDrawer } from "../drawer/MuiDrawer";
import { CategoriesSearch } from "../categoriesSearch/CategoriesSearch";
import { NavLinkComponent } from "../navLinkComponent/NavLinkComponent";

function SideBar() {
  const path = useLocation();

  return (
    <div>
      <AppBar className="sidebar" position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box className="page-buttons" component="div" sx={{ flexGrow: 1 }}>
            <NavLinkComponent isMobScreen={false} />
          </Box>
          <MuiDrawer />
          {path.pathname === "/" && <CategoriesSearch />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SideBar;
