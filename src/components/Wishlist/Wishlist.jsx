import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishListContext } from "../Context/WishListContext";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import Products from "../Products/Products";
import Spinner from "../Spinner/Spinner";
export default function Wishlist() {
  let { wishListProducts, removeProductFromWishlist } =
    useContext(WishListContext);
  let { addToCart } = useContext(CartContext);
  async function addProductToCart(prodId) {
    let response = await addToCart(prodId);

    if (response?.data?.status === "success") {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  }
  async function handleDelete(prodId) {
    let response = await removeProductFromWishlist(prodId);
    console.log(response);
  }
  return (
    <>
      {/* {Products ? (
        <section className="bg-white py-8 antialiased md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-center text-2xl font-bold text-green-500 ">
              WishList
            </h2>
            {wishListProducts?.map((prod) => {
              return (
                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                  <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6">
                      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                        <div className="space-y-4  md:flex md:items-center md:justify-around md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1">
                            <img
                              className="rounded-full h-20 w-20 dark:block"
                              src={prod?.imageCover}
                              alt="imac image"
                            />
                          </a>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a
                              href="#"
                              className="text-base font-medium text-gray-900 hover:underline "
                            >
                              {prod?.title}
                            </a>
                            <p>{prod?.description}</p>

                            <div className="flex items-center gap-4">
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
                              <button
                                onClick={() => {
                                  handleDelete(prod?.id);
                                }}
                                type="button"
                                className="inline-flex cursor-pointer items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <Spinner />
      )} */}
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-center text-2xl font-bold text-green-500 ">
            WishList
          </h2>
          {wishListProducts?.map((prod) => {
            return (
              <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div className="space-y-6">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                      <div className="space-y-4  md:flex md:items-center md:justify-around md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img
                            className="rounded-full h-20 w-20 dark:block"
                            src={prod?.imageCover}
                            alt="imac image"
                          />
                        </a>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a
                            href="#"
                            className="text-base font-medium text-gray-900 hover:underline "
                          >
                            {prod?.title}
                          </a>
                          <p>{prod?.description}</p>

                          <div className="flex items-center gap-4">
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
                            <button
                              onClick={() => {
                                handleDelete(prod?.id);
                              }}
                              type="button"
                              className="inline-flex cursor-pointer items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
