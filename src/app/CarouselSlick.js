import React, { Component } from "react";
import Slider from "react-slick";

const CarouselSlick = () => {
  const sliderArrImg = [
    "https://bizweb.dktcdn.net/100/427/943/themes/821832/assets/slider_3.jpg?1632270376172",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickPlay: true
  };

  return (
    <div className="single-slick">
      <Slider {...settings}>
        <img src={`${sliderArrImg[0]}`} />
        <img src={`${sliderArrImg[0]}`} />
        <img src={`${sliderArrImg[0]}`} />
      </Slider>
    </div>
  );
};

export default CarouselSlick;
