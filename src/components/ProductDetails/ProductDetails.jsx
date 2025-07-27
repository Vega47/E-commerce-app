import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Slider from "react-slick";
export default function ProductDetails() {
  const [allProducts, setAllProducts] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let { id, category } = useParams();
  function getAllProducts() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(({ data }) => {
        setAllProducts(
          data?.data.filter((prod) => {
            return prod.category.name === category;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getProductDetails() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProductDetails(data?.data);
        console.log(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getProductDetails();
    getAllProducts();
  }, [id]);
  return (
    <>
      {productDetails ? (
        <div className="flex gap-8 flex-wrap flex-col  md:flex-row items-center justify-around  ">
          <div className="w-full md:w-1/4 ">
            <Slider {...settings}>
              {productDetails?.images.map((img) => {
                return (
                  <img
                    className="w-full"
                    src={img}
                    alt={productDetails.title}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="md:w-2/4 w-full text-center md:text-left">
            <h2 className="text-2xl text-green-500 my-4">
              {productDetails?.title}
            </h2>
            <p className=" text-gray-400 mb-5">{productDetails?.description}</p>
            <div>
              <span className="bg-green-400 w-fit p-1 rounded-xl me-3 text-white ">
                {productDetails?.category?.name}
              </span>
              <span className="bg-green-400 w-fit p-1 rounded-xl text-white ">
                {productDetails?.brand?.name}
              </span>
            </div>
            <div>
              <img
                src={productDetails?.brand?.image}
                className="w-30 md:m-1 m-auto"
                alt=""
              />
              <div className="flex gap-5 justify-center md:gap-15 md:justify-start">
                <span className="text-gray-400">
                  Price:
                  <span className="text-green-500 text-2xl">
                    {productDetails?.price}
                  </span>
                  S.P
                </span>
                <span className="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="text-xl font-bold">
                    {productDetails?.ratingsAverage}
                  </span>
                </span>
                <span className="text-green-400">
                  <span className="text-xl text-gray-400">in Stock :</span>{" "}
                  {productDetails?.quantity}
                </span>
              </div>
            </div>
            <div className="bg-green-500 md:w-1/2 w-3/4 m-auto my-10 md:mx-0 text-white text-center p-1 rounded-xl ">
              <button>Add To Cart</button>
            </div>
          </div>
          <hr className="mx-30 my-10" />
          <h3 className="font-bold text-green-500 text-2xl text-center">
            Products related to this item
          </h3>
          <div className="flex flex-wrap justify-center my-20">
            {" "}
            {allProducts?.map((prod) => {
              return (
                <div className="w-full md:w-1/6 m-2.5  lg:w-1/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                  <Link to={`/productdetails/${prod.id}/${prod.category.name}`}>
                    <a>
                      <img
                        className="p-8 rounded-t-lg w-full"
                        src={prod.imageCover}
                        alt={prod.title}
                      />
                    </a>
                    <div className="px-5 ">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                        {prod.title.split(" ").slice(0, 2).join("")}{" "}
                      </h5>
                      <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                          {prod.ratingsAverage}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="flex items-center justify-between p-7">
                    <span className="text-xs font-bold text-gray-900 ">
                      {prod.price} S.Y.P
                    </span>
                    <a className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center  ">
                      Add to cart
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
