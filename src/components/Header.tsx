import { useLocation } from "react-router-dom";
import { Box, Toolbar, AppBar } from "@mui/material/";

// Components
import MuiDrawer from "./Drawer";
import CategoriesSearch from "./CategoriesSearch";
import NavLinkComponent from "./NavLinkComponent";

import "../styles/Header.css";

export default function Header() {
  const path = useLocation();

  return (
    <div>
      <AppBar position="fixed">
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
