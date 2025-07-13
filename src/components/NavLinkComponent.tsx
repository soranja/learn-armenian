import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material/";

export default function NavLinkComponent({
  isMobScreen,
}: {
  isMobScreen: boolean;
}) {
  return (
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
          HOME
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
}
