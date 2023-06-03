import React from "react";
import WhiteFriday from "../../components/whiteFriday/WhiteFriday";
import Navbar from "../../components/navbar/Navbar";
import BigNav from "../../components/bigNav/BigNav";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import Brands from "../../components/brands/Brands";
import Items from "../../components/items/Items";
import Footer from "../../components/footer/Footer";
import MakeSlider from "../../components/MakeSlider/MakeSlider";
import Sale from "../../components/sale/Sale";
import Crocs from "../../components/crocs/Crocs";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <WhiteFriday />
      <Navbar />
      <BigNav />
      <Slider />
      <Categories />
      <MakeSlider />
      <Brands />
      <Sale />
      <Items />
      <Crocs />
      <Footer />
    </div>
  );
}
