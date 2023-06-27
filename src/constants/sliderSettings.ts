export const settings = {
  className: "slider variable-width",
  centerMode: true,
  dots: true,
  infinite: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
};
