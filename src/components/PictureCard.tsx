import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import "../styles/PictureCard.css";
import { picturesType } from "../types/";

export default function PictureCard({
  hy,
  transliteration,
  en,
  ru,
  url,
  category,
}: picturesType) {
  return (
    <Card className="picture-card">
      <CardActionArea>
        <CardMedia component="img" image={"/images/" + url} alt="dictionary" />
        <CardContent className="card-content">
          <Box>
            <Typography variant="h5" align="center">
              {hy.split("~").join(" | ")}
            </Typography>

            <Typography
              variant="body2"
              component="p"
              className="translation-block"
            >
              Transliteration: <br className="line-break" />
              <span className="transliteration-bold">
                / {transliteration.split("~").join(" / || / ")} /
              </span>
            </Typography>

            <Typography
              variant="body2"
              component="p"
              className="translation-block"
            >
              English translation: <br className="line-break" />
              <span className="translation-bold">
                {en.split("~").join(" / ")}
              </span>
            </Typography>

            <Typography
              variant="body2"
              component="p"
              className="translation-block"
            >
              Перевод на русский: <br className="line-break" />
              <span className="translation-bold">
                {ru.split("~").join(" / ")}
              </span>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
