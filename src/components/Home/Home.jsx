import React, { useEffect, useState } from "react";
import RecentProducts from "../RecentProducts/RecentProducts";
import Mainslider from "../Mainslider/Mainslider";
import SecondSlider from "../Second Slider/secondSlider";

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [co, setCo] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <SecondSlider />
      <Mainslider />
      <RecentProducts />
    </>
  );
}
