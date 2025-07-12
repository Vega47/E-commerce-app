import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/close-up-view-online-shopping-concept.jpg";
import img2 from "../../assets/images/cyber-monday-shopping-sales.jpg";
export default function SecondSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="flex flex-col md:flex-row  md:justify-between my-12 justify-center items-center">
        <div className="content md:w-1/2 ">
          <h2 className="text-3xl font-bold  my-10 text-green-600 text-center width md:text-left  ">
            Discover Endless Shopping Possibilities!
          </h2>
          <p className=" text-xl mb-5 text-green-500 md:text-left text-center">
            Explore our curated collection of high-quality products designed to
            elevate your lifestyle. Enjoy seamless shopping with fast delivery,
            secure payments, and exclusive deals just for you.
          </p>
        </div>
        <div className="w-11/12 md:w-1/3  ">
          <img src={img2} className="rounded-full" alt="" />
        </div>
      </div>
    </>
  );
}
