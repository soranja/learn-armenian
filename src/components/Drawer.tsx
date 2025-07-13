import { useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinkComponent from "./NavLinkComponent";

export default function MuiDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!isMobile) return null;

  return (
    <>
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
        PaperProps={{
          sx: {
            backgroundColor: "#222",
            color: "white",
            padding: "20px 20px",
            width: "40vw",
            height: "20vh",
            maxWidth: "300px",
            maxHeight: "300px",
            textAlign: "right",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <NavLinkComponent isMobScreen={true} />
        </Box>
      </Drawer>
    </>
  );
}
