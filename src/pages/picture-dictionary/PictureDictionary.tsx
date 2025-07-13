import { useEffect, useRef } from "react";
import Slider from "react-slick";

import PictureCard from "./PictureCard";
import PictureDictionaryOverlay from "./PictureDictionaryOverlay";
import { sliderSettings } from "../../constants";
import { categoriesList } from "../../constants";
import { PicturesType } from "../../types";
import { useAppSelector } from "../../hooks";

// CSS
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/PictureDictionary.css";

export default function PictureDictionary() {
  const sliderRef = useRef<Slider | null>(null);
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const { label } = useAppSelector((state) => state.selector);

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (label) {
      handleScroll();
    }
  }, [label]);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    sliderElement?.innerSlider?.list?.setAttribute("tabindex", "0");
    sliderElement?.innerSlider?.list?.focus();
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <PictureDictionaryOverlay />
      <Box className="picture-dictionary">
        {categoriesList.map((slider, index) => (
          <Box
            className="slider"
            key={slider.name}
            ref={slider.name === label ? scrollRef : null}
          >
            <Typography
              variant="h3"
              component="h3"
              className="category-title"
              sx={{
                fontSize: { xs: 24, sm: 36 },
                mb: { xs: 2, sm: 6 },
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {slider.name}
            </Typography>
            <Slider ref={!index ? sliderRef : null} {...sliderSettings}>
              {slider.category.map((picture: PicturesType) => (
                <PictureCard
                  key={picture.hy}
                  hy={picture.hy}
                  transliteration={picture.transliteration}
                  ru={picture.ru}
                  en={picture.en}
                  url={picture.url}
                  category={picture.category}
                />
              ))}
            </Slider>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
