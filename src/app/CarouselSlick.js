import React, { Component } from "react";
import Slider from "react-slick";
import { CiFacebook, CiYoutube } from "react-icons/ci";

const CarouselSlick = () => {
  const sliderArrImg = [
    "https://bizweb.dktcdn.net/100/427/943/themes/821832/assets/slider_3.jpg?1632270376172",
    "https://bizweb.dktcdn.net/100/427/943/themes/821832/assets/slider_1.jpg?1632270376172",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="single-slick">
      <Slider {...settings}>
        <div>
          <img className="img-slider" src={`${sliderArrImg[0]}`} />
        </div>
        <div>
          <img className="img-slider" src={`${sliderArrImg[1]}`} />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlick;
