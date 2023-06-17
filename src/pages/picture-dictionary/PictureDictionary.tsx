import React, { useEffect, useRef } from "react";
import "./PictureDictionary.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PictureDictionarySlider.css";
import { picturesData } from "../../data/db-pics";
import { PicturesData } from "../../types/db-pics";
import PictureCard from "../../components/pictureCard/PictureCard";
import { settings } from "../../constants/sliderSettings";

function PictureDictionary() {
  const sliderRef = useRef<Slider | null>(null);
  const sliderElement = sliderRef.current;

  useEffect(() => {
    console.log(sliderRef);
    sliderElement?.innerSlider?.list?.focus();

    // div.slick-list
  }, []);

  return (
    <div className="PictureDictionary">
      <div>
        <h3 className="greetings">01 - MEETING & GREETING</h3>
        <Slider ref={sliderRef} {...settings}>
          {picturesData.map((picture: PicturesData) => (
            <PictureCard
              key={picture.transliteration}
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
    </div>
  );
}

export default PictureDictionary;
