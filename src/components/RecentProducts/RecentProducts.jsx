import axios from "axios";
// import Spinner from "../Spinner/Spinner";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { WishListContext } from "../Context/WishListContext";
import toast from "react-hot-toast";
export default function RecentProducts() {
  let { addProductToWishList } = useContext(WishListContext);
  let { addToCart } = useContext(CartContext);
  const [allProducts, setAllProducts] = useState(null);
  function getAllProducts() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(({ data }) => {
        setAllProducts(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function addProductToCart(prodId) {
    let response = await addToCart(prodId);

    if (response?.data?.status === "success") {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  }
  async function addTheProductToWishlist(prodId) {
    let response = await addProductToWishList(prodId);
    if (response?.data?.status === "success") {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      {allProducts?.length > 0 ? (
        <div className="flex flex-wrap m-auto w-11/12 justify-center  }">
          {allProducts?.map((prod) => {
            return (
              <div className="w-full md:w-1/6 m-2.5  lg:w-1/5 max-w-sm bg-white border border-gray-200  hover:shadow-2xl transition duration-500 overflow-hidden">
                <Link to={`productdetails/${prod.id}/${prod.category.name}`}>
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

                <div className="flex items-center justify-between p-7 ">
                  <div
                    onClick={() => {
                      addTheProductToWishlist(prod?.id);
                    }}
                  >
                    <i className="fa-regular fa-heart hover:text-red-500 cursor-pointer"></i>
                  </div>
                  <span className="text-xs font-bold text-gray-900 ">
                    {prod.price} S.Y.P
                  </span>
                  <button
                    onClick={() => {
                      addProductToCart(prod?.id);
                    }}
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 cursor-pointer focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center  "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
