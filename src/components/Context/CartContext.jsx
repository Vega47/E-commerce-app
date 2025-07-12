import { createContext, useEffect, useState } from "react";
import axios from "axios";

export let CartContext = createContext(0);
export default function CartContextProvider(props) {
  let token = localStorage.getItem("userToken");
  let [cartId, setCartId] = useState(null);
  let [cartTotalPrice, setCartTotalPrice] = useState(0);
  let [products, setProducts] = useState(null);
  let [numOfCartItems, setNumOfCartItems] = useState(0);
  let headrs = {
    token: localStorage.getItem("userToken"),
  };
  function addToCart(prodId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart
    `,
        { productId: prodId },
        { headers: headrs }
      )
      .then((response) => {
        getUserCartItems();
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
  function getUserCartItems() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: headrs })
      .then((response) => {
        console.log(response);
        setCartId(response?.data?.cartId);
        setNumOfCartItems(response?.data?.numOfCartItems);
        setProducts(response?.data?.data?.products);
        setCartTotalPrice(response?.data?.data?.totalCartPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function updateCartProduct(prodId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
        { count: count },
        { headers: headrs }
      )
      .then((response) => {
        setCartId(response?.data?.cartId);
        setNumOfCartItems(response?.data?.numOfCartItems);
        setProducts(response?.data?.data?.products);
        setCartTotalPrice(response?.data?.data?.totalCartPrice);
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
  function deleteCartProduct(prodId) {
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,

        { headers: headrs }
      )
      .then((response) => {
        setCartId(response?.data?.cartId);
        setNumOfCartItems(response?.data?.numOfCartItems);
        setProducts(response?.data?.data?.products);
        setCartTotalPrice(response?.data?.data?.totalCartPrice);
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
  function resetCart() {
    setCartId(null);
    setNumOfCartItems(0);
    setProducts(null);
    setCartTotalPrice(0);
  }
  useEffect(() => {
    if (token) {
      getUserCartItems();
    }
  }, [token, getUserCartItems]);

  return (
    <>
      <CartContext.Provider
        value={{
          resetCart,
          addToCart,
          getUserCartItems,
          cartId,
          numOfCartItems,
          cartTotalPrice,
          products,
          deleteCartProduct,
          updateCartProduct,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
}
