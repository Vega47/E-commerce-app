import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/Home/Home";
import Brands from "./components/Brands/Brands";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import "./App.css";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./components/Context/UserContext";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from "./components/Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import CheckOut from "./components/CheckOut/CheckOut";
import Wishlist from "./components/Wishlist/Wishlist";
import WishlistContextProvider from "./components/Context/WishListContext";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

function App() {
  let Route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "E-commerce-app/",
          element: (
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          ),
        },
        {
          path: "E-commerce-app/forgetpassword",
          element: <ForgetPassword />,
        },

        {
          path: "E-commerce-app/brands",
          element: (
            <ProtectRoute>
              <Brands />
            </ProtectRoute>
          ),
        },
        {
          path: "E-commerce-app/wishlist",
          element: (
            <ProtectRoute>
              <Wishlist />
            </ProtectRoute>
          ),
        },
        {
          path: "E-commerce-app/checkout",
          element: (
            <ProtectRoute>
              <CheckOut />
            </ProtectRoute>
          ),
        },
        {
          path: "E-commerce-app/productdetails/:id/:category",
          element: (
            <ProtectRoute>
              <ProductDetails />
            </ProtectRoute>
          ),
        },
        {
          path: "E-commerce-app/category",
          element: (
            <ProtectRoute>
              <Category />
            </ProtectRoute>
          ),
        },
        {
          path: "E-commerce-app/cart",
          element: (
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          ),
        },
        { path: "E-commerce-app/register", element: <Register /> },
        { path: "E-commerce-app/login", element: <Login /> },
        {
          path: "E-commerce-app/products",
          element: (
            <ProtectRoute>
              <Products />
            </ProtectRoute>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <RouterProvider router={Route}></RouterProvider>
            <Toaster />
          </WishlistContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
