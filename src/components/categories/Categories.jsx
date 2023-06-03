import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import "./categories.css";

export default function Categories3() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://api-task.bit68.com/en/api/categories/").then((res) => {
      setCategories(res.data.results);
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: categories.length > 4 ? 4 : categories.length,
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
    <div className="categories3">
      <h3>main categories</h3>
      <Slider {...settings}>
        {categories.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
