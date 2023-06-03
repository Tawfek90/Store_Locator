import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import "./makeSlider.css";
export default function MakeSlider() {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="make">
      <Slider {...settings}>
        <div className="image_container">
          <img src="./img/b.png" alt="flat" />
        </div>
        <div className="image_container">
          <img src="./img/a.png" alt="flat" />
        </div>
      </Slider>
      <div className="arrows">
        <SamplePrevArrow />
        <SampleNextArrow />
      </div>
      <div className="dots">
        <div className="big"></div>
        <div className="normal"></div>
        <div className="normal"></div>
        <div className="normal"></div>
      </div>
    </div>
  );
}
