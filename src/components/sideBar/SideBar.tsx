import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
// Material-UI imports
import { Box, Toolbar, AppBar, Typography } from "@mui/material/";

// components
import { MuiDrawer } from "../drawer/MuiDrawer";
import { CategoriesSearch } from "../categoriesSearch/CategoriesSearch";
import { NavLinkComponent } from "../navLinkComponent/NavLinkComponent";

function SideBar() {
  const path = useLocation();
  const mediaMatch = window.matchMedia(
    "((min-width: 320px) and (max-width: 479px))"
  );
  const [matches, setMatches] = useState(mediaMatch.matches);
  // how does it use itself? or it's different...

  useEffect(() => {
    const matchHandler = (e: MediaQueryList) => setMatches(e.matches);

    // mediaMatch.addListener(matchHandler);
    // return () => mediaMatch.removeListener(matchHandler);
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar
          className="sidebar"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box className="page-buttons" component="div" sx={{ flexGrow: 1 }}>
            <NavLinkComponent className="sidebar-nav-btn " />
          </Box>
          <MuiDrawer />
          {path.pathname === "/" && <CategoriesSearch />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SideBar;
