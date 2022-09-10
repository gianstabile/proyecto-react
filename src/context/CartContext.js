import React, { useState, createContext } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let newCart;
    let prod = cartList.find((prod) => prod.id === item.id);
    if (prod) {
      prod.qty += qty;
      newCart = [...cartList];
    } else {
      prod = { ...item, qty: qty };
      newCart = [...cartList, prod];
    }
    setCartList(newCart);
  };

  const removeItem = (itemId) => {
    setCartList(cartList.filter((product) => product.id !== itemId));
  };

  const clearCart = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.find((item) => item.id === id) ? true : false;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addItem,
        removeItem,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
