import React from "react";

// Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";

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
  return (
    <div>
      <Card className="PictureCard">
        <CardActionArea>
          <CardMedia
            component="img"
            image={require("../../data/pictures/" + category + "/" + url)}
            alt="dictionary picture"
          />
          <CardContent>
            <Box className="card-content">
              <Typography variant="h5" align="center">
                {hy.split("~").join(" | ")}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                marginBottom={"10px"}
                marginTop={"10px"}
              >
                Transliteration: {/* <br className="line-break" />{" "} */}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  / {transliteration.split("~").join(" / || / ")} /
                </Box>
              </Typography>
              <Typography variant="body2" component="p" fontStyle="italic">
                English translation:
                <br className="line-break" />{" "}
                <Box component="span" sx={{ fontWeight: 800 }}>
                  {en.split("~").join(" / ")}
                </Box>
              </Typography>
              <Typography variant="body2" component="p" fontStyle="italic">
                Перевод на русский:
                <br className="line-break" />{" "}
                <Box component="span" sx={{ fontWeight: 800 }}>
                  {ru.split("~").join(" / ")}
                </Box>
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default PictureCard;
