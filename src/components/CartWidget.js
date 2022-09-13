import "boxicons";
import React from "react";
import { Badge } from "reactstrap";

const CartWidget = () => {
  return (
    <>
      <box-icon
        type="solid"
        name="cart"
        color="MediumVioletRed"
        animation="tada-hover"
      ></box-icon>
      <Badge color="dark">
        3
      </Badge>
    </>
  );
};

export default CartWidget;
