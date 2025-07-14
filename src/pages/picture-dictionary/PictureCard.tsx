import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@mui/material";

import { PicturesType } from "../../types/";
import "../../styles/PictureCard.css";

export default function PictureCard({
  hy,
  transliteration,
  en,
  ru,
  url,
}: PicturesType) {
  return (
    <Card className="picture-card">
      <CardActionArea>
        <CardMedia
          component="img"
          image={"/images/" + url}
          alt={url.replace(/\.[^/.]+$/, "")}
        />
        <CardContent className="card-content">
          <Box>
            <Typography variant="h5">{hy.split("~").join(" / ")}</Typography>

            <Typography variant="body2">
              / {transliteration.split("~").join(" / || / ")} /
            </Typography>

            <Typography variant="body2">
              <span className="card-bold">Eng:&nbsp;</span>
              {en.split("~").join(" / ")}
            </Typography>

            <Typography variant="body2">
              <span className="card-bold">Рус:&nbsp;</span>
              {ru.split("~").join(" / ")}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
