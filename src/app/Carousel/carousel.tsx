"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logos } from "../config/content/gallery";
//gallery component
const Gallery = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    swipeToSlide: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  return (
    <>
      <div className=" w-[90%] h-20 overflow-hidden mx-auto">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-auto pt-3">
              <img
                src={logo}
                alt="logo"
                width={50}
                height={50}
                loading="eager"
                className=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Gallery;
