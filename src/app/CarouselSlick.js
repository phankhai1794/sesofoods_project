import React, { Component } from "react";
import Slider from "react-slick";
import { CiFacebook, CiYoutube } from "react-icons/ci";

const CarouselSlick = () => {
  const sliderArrImg = [
    "https://bizweb.dktcdn.net/100/427/943/themes/821832/assets/slider_3.jpg?1632270376172",
    "https://bizweb.dktcdn.net/100/427/943/themes/821832/assets/slider_2.jpg?1632270376172",
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
          <img src={`${sliderArrImg[0]}`} />
        </div>
        <div>
          <img src={`${sliderArrImg[1]}`} />
        </div>
        <div>
          <img src={`${sliderArrImg[2]}`} />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlick;
