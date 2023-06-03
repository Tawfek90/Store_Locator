import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import "./slider.css";
export default function Slider2() {
  const [sliderImages, setSliderImages] = useState([]);
  useEffect(() => {
    axios.get("https://api-task.bit68.com/en/api/slider_image/").then((res) => {
      setSliderImages(res.data.results);
    });
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrNext
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrPrevious
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="main_slider2">
      <Slider {...settings}>
        {sliderImages.map((item) => {
          return (
            <div>
              <img src={item.image} alt="image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
