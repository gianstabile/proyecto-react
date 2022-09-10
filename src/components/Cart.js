import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <div className="mb-4 container">
        <div className="container d-flex justify-content-between">
          <h3>Carrito de compra</h3>
          <button
            onClick={cart.clearCart}
            className="btn btn-danger align-items-end"
          >
            Limpiar todo
          </button>
        </div>
        {cart.cartList.map((item) => (
          <div key={item.id} className="container">
            <div className="row border rounded m-3 gap-3 justify-content-around align-items-center">
              <div className="col-1">
                <img
                  className="img-thumbnail item__cart__img"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
              <div className="col-6">
                <p className="fs-5 ms-2 lead">{item.title}</p>
              </div>
              <div className="col-1">
                <p className="fs-5 lead">x {item.qty}</p>
              </div>
              <div className="col-1">
                <p className="fs-5 ">$ {item.price}</p>
              </div>
              <div className="col-1">
                <button
                  onClick={() => cart.removeItem(item.id)}
                  className="btn btn-dark me-4"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
