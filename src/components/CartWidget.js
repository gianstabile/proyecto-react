import "boxicons";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Badge } from "reactstrap";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <>
      <box-icon
        type="solid"
        name="cart"
        color="MediumVioletRed"
      ></box-icon>
      <Badge color="dark">{totalProducts() || ""}</Badge>
    </>
  );
};

export default CartWidget;
