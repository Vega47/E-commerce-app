import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/imgi_11_61aPPgqbNlL._SX3000_.jpg";
import img2 from "../../assets/images/imgi_225_61IENvel2AL._SX3000_.jpg";
import img3 from "../../assets/images/imgi_226_61NyW4Z1n8L._SX1500_.jpg";
import img4 from "../../assets/images/imgi_230_613A5Auv2SL._SX1500_.jpg";
import img5 from "../../assets/images/imgi_7_61KJMiozIuL._SX3000_.jpg";

export default function Mainslider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {}, []);
  return (
    <>
      {" "}
      <div className="md:block hidden slider-container w-full m-auto">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}
