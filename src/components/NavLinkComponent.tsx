import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material/";

export default function NavLinkComponent({
  isMobScreen,
}: {
  isMobScreen: boolean;
}) {
  return (
    <Box
      display={isMobScreen ? "block" : "flex"}
      sx={{
        gap: isMobScreen ? 0 : 3,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 400,
          color: "white",
        }}
      >
        <NavLink className="header-nav-btn" to="/">
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
        <NavLink className="header-nav-btn" to="/about">
          ABOUT
        </NavLink>
      </Typography>
    </Box>
  );
}
