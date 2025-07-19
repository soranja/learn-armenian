import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        color: "white",
        backgroundColor: "#9b1534",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography>
          {"© "}
          <Link
            color="inherit"
            href="https://soranja.dev/"
            sx={{ textDecoration: "none" }}
          >
            Ivan Zakharov
          </Link>{" "}
          {currentYear}
        </Typography>
      </Container>
    </Box>
  );
}
