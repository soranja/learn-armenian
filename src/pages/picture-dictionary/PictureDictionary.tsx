import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import PictureCard from "../../components/pictureCard/PictureCard";
import { settings } from "../../constants/sliderSettings";
import { categories } from "../../constants/categories";
import { picturesType } from "../../types/picturesType";

// CSS
import "./PictureDictionary.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PictureDictionarySlider.css";

function PictureDictionary() {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    console.log(sliderRef.current);
    const sliderElement = sliderRef.current;
    sliderElement?.innerSlider?.list?.setAttribute("tabindex", "0");
    sliderElement?.innerSlider?.list?.focus();
  }, []);

  return (
    <div className="PictureDictionary">
      {categories.map((slider, index) => (
        <div key={slider.name}>
          <h3 className="category-title">{slider.name}</h3>
          <Slider ref={!index ? sliderRef : null} {...settings}>
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
  );
}

export default PictureDictionary;
