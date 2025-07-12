import axios from "axios";
import React, { useContext } from "react";
import { useFormik } from "formik";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  let navigate = useNavigate();
  let { cartId, resetCart } = useContext(CartContext);
  function payCash(val) {
    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        { shippingAddress: val },
        { headers: { token: localStorage.getItem("userToken") } }
      )
      .then((response) => {
        console.log(response);
        navigate("/");
        resetCart();
      })
      .catch((error) => {
        console.log(error);
      });
    // if (response?.data?.status === "success") {
    //   toast.success("Your order Delivred to Us we will Make For You");
    // }
  }
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: payCash,
  });
  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-green-600 text-center font-bold text-2xl">
            Finish Your Order
          </h2>
          <div className="md:w-1/2 w-full mx-auto   ">
            <div className="my-5  ">
              <label htmlFor="details" className="text-xl ">
                Your Address
              </label>
              <input
                value={formik.values.details}
                onChange={formik.handleChange}
                name="details"
                id="details"
                type="text"
                placeholder="Your Addrees"
                className="border-2 rounded-2xl mt-3 border-green-600 p-1 w-full "
              />
            </div>
            <div className="my-5">
              <label htmlFor="phone" className="text-xl m-auto">
                Phone Number
              </label>
              <input
                value={formik.values.phone}
                onChange={formik.handleChange}
                name="phone"
                id="phone"
                type="tel"
                placeholder="Your Addrees"
                className="border-2 rounded-2xl mt-3 border-green-600 p-1 w-full "
              />
            </div>
            <div className="my-5">
              <label htmlFor="city" className="text-xl">
                City
              </label>
              <input
                value={formik.values.city}
                onChange={formik.handleChange}
                name="city"
                id="city"
                type="text"
                placeholder="Your Addrees"
                className="border-2 rounded-2xl mt-3 border-green-600 p-1 w-full "
              />
            </div>
            <button
              onSubmit={payCash}
              className="bg-green-500 text-white font-bold p-3 rounded-2xl hover:bg-green-700 cursor-pointer"
            >
              Pay Cash
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
