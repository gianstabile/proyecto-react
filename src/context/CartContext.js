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

  const totalPrice = () => {
    return cartList.reduce((prev, act) => prev + act.qty * act.price, 0);
  };

  const totalProducts = () => {
    return cartList.reduce((acc, prod) => acc + prod.qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        setCartList,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalPrice,
        totalProducts,
        cartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
