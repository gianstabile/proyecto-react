import "boxicons";

const CartWidget = () => {
  return (
    <div className="d-flex gap-2 align-items-center">
      <box-icon
        type="solid"
        name="cart"
        color="MediumVioletRed"
        animation="tada-hover"
      ></box-icon>
      <a href="#">3</a>
    </div>
  );
};

export default CartWidget;
