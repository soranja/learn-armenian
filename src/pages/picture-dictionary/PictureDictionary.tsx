import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import PictureCard from "../../components/PictureCard";
import { sliderSettings } from "../../constants";
import { categoriesList } from "../../constants";
import { picturesType } from "../../types";
import { useAppSelector } from "../../hooks";

// CSS
import "../../styles/PictureDictionary.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    // <div className="picture-dictionary-wrapper">
    <div className="picture-dictionary">
      {categoriesList.map((slider, index) => (
        <div
          className="slider"
          key={slider.name}
          ref={slider.name === label ? scrollRef : null}
        >
          <h3 className="category-title">{slider.name}</h3>
          <Slider ref={!index ? sliderRef : null} {...sliderSettings}>
            {slider.category.map((picture: picturesType) => (
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
        </div>
      ))}
    </div>
    // </div>
  );
}
