import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import PictureCard from "../../components/pictureCard/PictureCard";
import { settings } from "../../constants/sliderSettings";
import { PicturesData } from "../../types/db-pics";

// CSS
import "./PictureDictionary.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PictureDictionarySlider.css";

// categories
import { greetingsData } from "../../data/categories/greetings";
import { numbersZeroToNineData } from "../../data/categories/numbersZeroToNine";
import { numbersLarge } from "../../data/categories/numbersLarge";
import { usefulPhrases } from "../../data/categories/usefulPhrases";
import { food } from "../../data/categories/food";
import { places } from "../../data/categories/places";

function PictureDictionary() {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    sliderElement?.innerSlider?.list?.setAttribute("tabindex", "0");
    sliderElement?.innerSlider?.list?.focus();

    // div.slick-list
  }, []);

  return (
    <div className="PictureDictionary">
      <div>
        <h3 className="category-title">01 - MEETING & GREETING</h3>
        <Slider ref={sliderRef} {...settings}>
          {greetingsData.map((picture: PicturesData) => (
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
      <div>
        <h3 className="category-title">02 - NUMBERS 0-9</h3>
        <Slider {...settings}>
          {numbersZeroToNineData.map((picture: PicturesData) => (
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
      <div>
        <h3 className="category-title">03 - LARGE NUMBERS</h3>
        <Slider {...settings}>
          {numbersLarge.map((picture: PicturesData) => (
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
      <div>
        <h3 className="category-title">04 - USEFUL PHRASES</h3>
        <Slider {...settings}>
          {usefulPhrases.map((picture: PicturesData) => (
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
      <div>
        <h3 className="category-title">05 - FOOD</h3>
        <Slider {...settings}>
          {food.map((picture: PicturesData) => (
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
      <div>
        <h3 className="category-title">06 - PLACES</h3>
        <Slider {...settings}>
          {places.map((picture: PicturesData) => (
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
