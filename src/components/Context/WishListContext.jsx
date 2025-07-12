import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import Products from "../Products/Products";

export let WishListContext = createContext(0);
export default function WishlistContextProvider(props) {
  let token = localStorage.getItem("userToken");
  let [numOfWishlistItems, setNumOfWishlistItems] = useState(0);
  let [wishListProducts, setWishlistProducts] = useState(null);
  let headrs = {
    token: localStorage.getItem("userToken"),
  };
  function addProductToWishList(prodId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId: prodId },
        { headers: headrs }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
  function getUserWishList() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: headrs,
      })
      .then((response) => {
        setWishlistProducts(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function removeProductFromWishlist(prodID) {
    axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodID}`, {
        headers: headrs,
      })
      .then((response) => {
        setWishlistProducts(response?.data?.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    if (token) {
      getUserWishList();
    }
  }, [token, getUserWishList()]);
  console.log(wishListProducts);

  return (
    <>
      <WishListContext.Provider
        value={{
          addProductToWishList,
          getUserWishList,
          wishListProducts,
          removeProductFromWishlist,
        }}
      >
        {props.children}
      </WishListContext.Provider>
    </>
  );
}
