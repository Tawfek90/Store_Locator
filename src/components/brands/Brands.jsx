import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import "./brands.css";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get("https://api-task.bit68.com/en/api/brands/").then((res) => {
      setBrands(res.data.results);
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: brands.length > 4 ? 4 : brands.length,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
  return (
    <div className="brands">
      <h3>popular brands</h3>
      <Slider {...settings}>
        {brands.map((item) => {
          return (
            <div className="brand_item" key={item.id}>
              <img src={item.image} alt="image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
