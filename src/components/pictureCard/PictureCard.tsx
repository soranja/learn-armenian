import React from "react";

// Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import "./PictureCard.css";

function PictureCard({
  hy,
  transliteration,
  en,
  ru,
  url,
  category,
}: {
  hy: string;
  transliteration: string;
  en: string;
  ru: string;
  url: string;
  category: string;
}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
    typography: {
      fontSize: 12,
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card className="PictureCard" sx={{ height: "15vw", width: "20vw" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="30%"
              image={require("../../data/pictures/" + category + "/" + url)}
              alt="dictionary picture"
            />
            <CardContent>
              <Typography variant="h5" align="center">
                {hy}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                marginBottom={1}
                marginTop={1}
              >
                Transliteration:{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  / {transliteration} /
                </Box>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                noWrap
                fontStyle="italic"
              >
                English translation:{" "}
                <Box component="span" sx={{ fontWeight: 800 }}>
                  {en}
                </Box>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                noWrap
                fontStyle="italic"
              >
                Перевод на русский:{" "}
                <Box component="span" sx={{ fontWeight: 800 }}>
                  {ru}
                </Box>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default PictureCard;
