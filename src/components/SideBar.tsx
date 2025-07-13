import "../styles/SideBar.css";
import { useLocation } from "react-router-dom";

// Material-UI imports
import { Box, Toolbar, AppBar } from "@mui/material/";

// Components
import MuiDrawer from "./Drawer";
import CategoriesSearch from "./CategoriesSearch";
import NavLinkComponent from "./NavLinkComponent";

export default function SideBar() {
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
